import template from './playerList.html';
import controller from './playerList.controller';
import './playerList.styl';

let playerListComponent = function () {
  return {
    restrict: 'E',
    scope: {
      players: '=',
      useRank: '=?',
      listTitle: '@?',
      onPlayerRemove: '&?',
      onPlayerAdd: '&?'
    },
    replace: true,
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default playerListComponent;
