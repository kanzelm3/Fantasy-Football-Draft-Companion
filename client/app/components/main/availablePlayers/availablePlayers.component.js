import template from './availablePlayers.html';
import controller from './availablePlayers.controller';
import './availablePlayers.styl';

let availablePlayersComponent = function () {
  return {
    restrict: 'E',
    scope: {
      players: '=',
      onPlayerAdd: '&',
      onPlayerWatch: '&'
    },
    replace: true,
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default availablePlayersComponent;
