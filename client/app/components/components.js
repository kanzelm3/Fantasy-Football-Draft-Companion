import angular from 'angular';
import Main from './main/main';

let componentModule = angular.module('app.components', [
  Main.name
]);

export default componentModule;
