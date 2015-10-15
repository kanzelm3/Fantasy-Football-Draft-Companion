import angular from 'angular';
import Main from './main/main';
import Common from './common/common';

let componentModule = angular.module('app.components', [
  Main.name,
  Common.name
]);

export default componentModule;
