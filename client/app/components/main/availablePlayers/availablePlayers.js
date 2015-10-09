import angular from 'angular';
import uiRouter from 'angular-ui-router';
import availablePlayersComponent from './availablePlayers.component';

let availablePlayersModule = angular.module('availablePlayers', [
    uiRouter
])

.directive('availablePlayers', availablePlayersComponent);

export default availablePlayersModule;
