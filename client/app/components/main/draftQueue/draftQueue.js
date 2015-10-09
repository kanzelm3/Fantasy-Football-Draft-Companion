import angular from 'angular';
import uiRouter from 'angular-ui-router';
import draftQueueComponent from './draftQueue.component';

let draftQueueModule = angular.module('draftQueue', [
  uiRouter
])

.directive('draftQueue', draftQueueComponent);

export default draftQueueModule;
