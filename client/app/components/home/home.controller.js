class HomeController {
  constructor(Players) {
    this.name = 'home';
    Players.list().then((players) => this.players = players);
    this.getPlayer = (player) => {
      Players.get(player.id).then((details) => this.currentPlayer = details)
    }
  }
}

export default HomeController;
