import angular from 'angular';
import PlayersFactory from './players.factory';

let playersModule = angular.module('players', [])

    .factory('Players', PlayersFactory);

export default playersModule;
