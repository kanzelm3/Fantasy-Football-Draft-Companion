import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainComponent from './main.component';
import AvailablePlayers from './availablePlayers/availablePlayers';
import PlayerList from './../common/playerList/playerList';
import SelectedPlayer from './selectedPlayer/selectedPlayer';

let mainModule = angular.module('main', [
  uiRouter,
  AvailablePlayers.name,
  PlayerList.name,
  SelectedPlayer.name
])

  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>'
      });
  })

  .directive('main', mainComponent);

export default mainModule;
