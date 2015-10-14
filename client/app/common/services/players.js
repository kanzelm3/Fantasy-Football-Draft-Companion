import _ from 'lodash';

let Players = function ($http, $q, $sce, $mdBottomSheet) {

    class PlayersFactory {
        constructor(year) {
            this.year = year;
            this.positions = ['QB', 'RB', 'WR', 'TE', 'K', 'DEF'];
            this.pprPositions = ['RB-ppr', 'WR-ppr', 'TE-ppr'];
        }
        fetchVideoInformation(videoId) {
            return $http.get(`http://www.nfl.com/static/embeddablevideo/${videoId}.json`)
                .then((res) => res.data)
                .then((video) => {
                    video.config = {
                        sources: [
                            {src: $sce.trustAsResourceUrl(`http://a.video.nfl.com${video.cdnData.uri}`), type: "video/mp4"}
                        ],
                        theme: {
                            url: 'http://www.videogular.com/styles/themes/default/latest/videogular.css'
                        },
                        plugins: {
                            poster: video.imagePaths.xl
                        }
                    };
                    return video;
                });
        }
        fetchPlayer(playerId) {
            return $http.get('http://api.fantasy.nfl.com/v1/players/details', {
                params: {
                    format: 'json',
                    playerId,
                    year: this.year,
                    statType: 'seasonStats'
                }
            })
                .then((res) => res.data.players[0]);
        }
        list(offset = 0) {
            return $http.get('http://api.fantasy.nfl.com/v1/players/editordraftranks', {
                params: {
                    format: 'json',
                    year: this.year,
                    offset: offset
                }
            }).then((res) => res.data.players);
        }
        listPosition(position) {

        }
        showDetails(playerId) {
            return this.fetchPlayer(playerId).then((details) => {
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
            })
        }
        get(playerId) {
            return this.fetchPlayer(playerId);
        }
    }

    return new PlayersFactory(2015);

};

export default Players;