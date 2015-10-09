import angular from 'angular';
import uiRouter from 'angular-ui-router';
import draftedPlayersComponent from './draftedPlayers.component';

let draftedPlayersModule = angular.module('draftedPlayers', [
  uiRouter
])

.directive('draftedPlayers', draftedPlayersComponent);

export default draftedPlayersModule;
