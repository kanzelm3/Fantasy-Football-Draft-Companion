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
      this.availablePlayers.splice(0, 0, player);
    };
    this.watchPlayer = (player) => {
      $log.log('player watched:', player);
      this.watchList.push(player);
    };
  }
}

export default MainController;
