class AvailablePlayersController {
  constructor(Players, $mdBottomSheet) {

    this.players = [];

    this.loadMore = () => {
      let offset = this.players.length;
      this.loading = true;
      Players.list(offset).then((players) => {
        this.players = this.players.concat(players);
        delete this.loading;
      });
    };

    this.getPlayer = (player) => {
      Players.get(player.id).then((details) => {
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
    };

    // initialize players list
    this.loadMore();

  }
}

export default AvailablePlayersController;
