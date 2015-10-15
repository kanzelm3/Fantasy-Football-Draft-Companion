import _ from 'lodash';
import moment from 'moment';

class AvailablePlayersController {
  constructor(Players, $timeout, $scope, $filter) {
    this.PlayersService = Players;
    this.filter = $filter('filter');
    this.playerLimit = 0;
    this.loading = true;
    this.playersPromise = Players.list().then((players) => {
      this.players = players;
      delete this.loading;
    });
    this.search = {
      fullName: '',
      position: ''
    };
    Object.observe(this.search, () => {
      $timeout(() => {
        this.playerLimit = 0;
        $timeout(() => {
          console.log('test 1');
          $scope.$emit('list:filtered');
        });
      });
    });
  }
  loadMore() {
    console.log('test 2');
    this.playersPromise.then(() => {
      console.log('test 3');
      this.playerLimit += 10;
      let players = _.slice(this.filter(this.players, this.search), 0, this.playerLimit);
      players.forEach((player) => {
        if (!player.details) {
          this.PlayersService.getDetails(player.id).then((details) => {
            let _player = _.findWhere(this.players, {
              id: player.id
            });
            _player.details = details;
          });
        }
      });
    });
  }
  showDetails(player) {
    this.PlayersService.showDetails(player);
  }
  splicePlayer(playerId) {
    _.remove(this.players, (player) => player.id === playerId);
  }
  selectPlayer(player, evt) {
    evt.stopPropagation();
    this.splicePlayer(player.id);
    this.onPlayerAdd({
      player
    })
  }
  loadPositions() {
    return this.PlayersService.listPositions().then((positions) => {
      this.positions = positions;
    });
  }
  newNotes(notes) {
    return _.filter(notes, (note) => {
      let date = moment(note.timestamp);
      let threshold = moment().subtract(3, 'days');
      return date.isAfter(threshold);
    });
  }
}

export default AvailablePlayersController;
