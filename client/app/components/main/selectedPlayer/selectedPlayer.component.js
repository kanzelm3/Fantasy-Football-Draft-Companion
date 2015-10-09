import template from './selectedPlayer.html';
import controller from './selectedPlayer.controller';
import './selectedPlayer.styl';

let selectedPlayerComponent = function () {
  return {
    restrict: 'E',
    scope: {
      currentPlayer: '='
    },
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default selectedPlayerComponent;
