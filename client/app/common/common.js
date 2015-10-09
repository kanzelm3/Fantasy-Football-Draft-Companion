import angular from 'angular';
import Navbar from './navbar/navbar';
import Players from './services/players';

let commonModule = angular.module('app.common', [
  Navbar.name
]);

// Add services
angular.module('app.common').factory('Players', Players);

export default commonModule;
