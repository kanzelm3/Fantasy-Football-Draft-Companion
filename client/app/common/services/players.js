import _ from 'lodash';

let Players = function ($http, $q, $sce, $mdBottomSheet) {

  class PlayersFactory {
    constructor(year) {
      this.year = year || null;
    }
    fetchVideoInformation(videoId) {
      return $http.get(`//www.nfl.com/static/embeddablevideo/${videoId}.json`)
        .then((res) => res.data)
        .then((video) => {
          video.config = {
            sources: [
              {src: $sce.trustAsResourceUrl(`//a.video.nfl.com${video.cdnData.uri}`), type: "video/mp4"}
            ],
            theme: {
              url: '//www.videogular.com/styles/themes/default/latest/videogular.css'
            },
            plugins: {
              poster: video.imagePaths.xl
            }
          };
          return video;
        });
    }
    fetchPlayer(playerId) {
      return $http.get('//api.fantasy.nfl.com/v1/players/details', {
        params: {
          format: 'json',
          playerId,
          year: this.year,
          statType: 'seasonStats'
        }
      })
        .then((res) => res.data.players[0]);
    }
    joinPlayerLists(lists) {
      let { rankings, players } = lists;
      return _.chain(players)
        .map((player) => {
          let foundPlayer = _.findWhere(rankings, {
            fname: player.firstName,
            lname: player.lastName,
            team: player.teamAbbr,
            position: player.position
          });
          if (foundPlayer) {
            player = _.extend(player, _.pick(foundPlayer, ['nerdRank', 'positionRank', 'overallRank']));
          }
          return player;
        })
        .sortBy((player) => parseInt(player.overallRank, 10))
        .value();
    }
    getNerdRankings() {
      return $http.get('//www.fantasyfootballnerd.com/service/draft-rankings/json/z99n4kgcdcru/')
        .then((res) => res.data.DraftRankings);
    }
    getNflRankings(offset = 0) {
      return $http.get('//api.fantasy.nfl.com/v1/players/editordraftranks', {
        params: {
          format: 'json',
          year: this.year,
          offset: offset,
          count: 100
        }
      }).then((res) => res.data.players)
        .then((players) => {
          return $q.all(players.map((player) => {
            player.fullName = `${player.firstName} ${player.lastName}`;
            return player;
          }));
        });
    }
    async getAllPlayers() {
      let players = [];
      let newPlayers = await this.getNflRankings();
      while (newPlayers.length > 0) {
        players = players.concat(newPlayers);
        newPlayers = await this.getNflRankings(players.length);
      }
      return players;
    }
    list() {
      if (!this.allPlayersPromise) {
        this.allPlayersPromise = $q.all([this.getAllPlayers(), this.getNerdRankings()]).then((lists) => {
          let [ players, rankings ] = lists;
          return this.joinPlayerLists({players, rankings});
        });
      }
      return this.allPlayersPromise;
    }
    listPositions() {
      return this.list().then((players) => {
        return _.chain(players).pluck('position').uniq().value();
      });
    }
    getInjuryStatusAbbr(injuryStatus = '') {
      switch(injuryStatus.toLowerCase()) {
        case 'inactive':
          return 'IA';
        case 'injured reserve':
          return 'IR';
        case 'did not participate in practice':
          return 'DNP';
        case 'physically unable to perform':
          return 'PUP';
        case 'limited participation in practice':
          return 'LP';
        default:
          return _.first(injuryStatus);
      }
    }
    getPlayerDetails(players) {
      return $q.all(_.map(players, (player) => {
        return this.getDetails(player.id).then((details) => {
          player.details = details;
          return player;
        });
      }));
    }
    processPlayerDetails(details) {
      details.byeWeek = _.findWhere(details.weeks, {
        opponent: false
      }).id;
      details.injuryGameStatusAbbr = details.injuryGameStatus ? this.getInjuryStatusAbbr(details.injuryGameStatus) : null;
      details.imageUrl = `//s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/${details.esbid}.png`;
      return details;
    }
    getDetails(playerId) {
      return this.fetchPlayer(playerId)
        .then(this.processPlayerDetails.bind(this));
    }
    showDetails(player) {
      let details = player.details;
      $mdBottomSheet.show({
        template: `
            <md-bottom-sheet class="current-player-sheet">
                <selected-player current-player="currentPlayer"></selected-player>
            </md-bottom-sheet>
        `,
        locals: {
          currentPlayer: details
        },
        controller: ($scope, currentPlayer) => {
          $scope.currentPlayer = currentPlayer;
        }
      });
    }
  }

  return new PlayersFactory(2015);

};

export default Players;