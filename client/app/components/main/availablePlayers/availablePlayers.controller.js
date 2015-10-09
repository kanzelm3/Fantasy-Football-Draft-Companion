class AvailablePlayersController {
  constructor(Players, $mdBottomSheet) {
    this.name = 'availablePlayers';
    Players.list().then((players) => this.players = players);
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
    }
  }
}

export default AvailablePlayersController;
