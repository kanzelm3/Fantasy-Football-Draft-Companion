import angular from 'angular';
import uiRouter from 'angular-ui-router';
import selectedPlayerComponent from './selectedPlayer.component';

let selectedPlayerModule = angular.module('selectedPlayer', [
  uiRouter
])

.directive('selectedPlayer', selectedPlayerComponent);

export default selectedPlayerModule;
