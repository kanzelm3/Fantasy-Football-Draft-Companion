import _ from 'lodash';

class AvailablePlayersController {
  constructor(Players) {
    this.PlayersService = Players;
  }
  loadMore() {
    let offset = this.players.length;
    this.loading = true;
    this.PlayersService.list(offset).then((players) => {
      this.players = this.players.concat(players);
      delete this.loading;
    });
  }
  getPlayer(player) {
    this.PlayersService.showDetails(player.id);
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
  watchPlayer(player, evt) {
    evt.stopPropagation();
    this.splicePlayer(player.id);
    this.onPlayerWatch({
      player
    })
  }
}

export default AvailablePlayersController;
