import angular from 'angular';
import uiRouter from 'angular-ui-router';
import playerListComponent from './playerList.component';

let playerListModule = angular.module('playerList', [
  uiRouter
])

.directive('playerList', playerListComponent);

export default playerListModule;
