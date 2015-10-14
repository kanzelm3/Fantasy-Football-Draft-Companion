import angular from 'angular';
import _ from 'lodash';

class PlayerListController {
  constructor(Players) {
    this.PlayersService = Players;
  }
  getPlayer(player) {
    this.PlayersService.showDetails(player.id);
  }
  splicePlayer(playerId) {
    _.remove(this.players, (player) => player.id === playerId);
  }
  removePlayer(player, evt) {
    evt.stopPropagation();
    this.splicePlayer(player.id);
    this.onPlayerRemove({
      player
    })
  }
  draftPlayer(player, evt) {
    evt.stopPropagation();
    this.splicePlayer(player.id);
    this.onPlayerAdd({
      player
    })
  }
}

export default PlayerListController;
