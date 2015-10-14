class MainController {
  constructor($log) {
    this.availablePlayers = [];
    this.draftedPlayers = [];
    this.watchList = [];
    this.draftPlayer = (player) => {
      $log.log('player drafted:', player);
      this.draftedPlayers.push(player);
    };
    this.makePlayerAvailable = (player) => {
      $log.log('player made available:', player);
      let index = _.findIndex(this.availablePlayers, (_player, i) => {
        let prev = this.availablePlayers[i - 1];
        if (!prev) {
          return parseInt(player.rank, 10) < parseInt(_player.rank, 10);
        }
        return parseInt(player.rank, 10) > parseInt(prev.rank, 10) && parseInt(player.rank, 10) < parseInt(_player.rank, 10);
      });
      this.availablePlayers.splice(index, 0, player);
    };
    this.watchPlayer = (player) => {
      $log.log('player watched:', player);
      this.watchList.push(player);
    };
  }
}

export default MainController;
