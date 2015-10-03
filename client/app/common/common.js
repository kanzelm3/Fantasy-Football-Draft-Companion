import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Players from './players/players';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  Players.name
]);

export default commonModule;
