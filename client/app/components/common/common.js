import angular from 'angular';
import PlayerList from './playerList/playerList';
import SelectedPlayer from './selectedPlayer/selectedPlayer';

let commonModule = angular.module('common', [
  PlayerList.name,
  SelectedPlayer.name
]);

export default commonModule;

