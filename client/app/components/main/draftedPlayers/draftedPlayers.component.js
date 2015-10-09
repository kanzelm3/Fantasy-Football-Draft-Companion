import template from './draftedPlayers.html';
import controller from './draftedPlayers.controller';
import './draftedPlayers.styl';

let draftedPlayersComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default draftedPlayersComponent;
