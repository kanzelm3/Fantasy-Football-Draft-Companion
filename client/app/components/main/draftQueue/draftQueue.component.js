import template from './draftQueue.html';
import controller from './draftQueue.controller';
import './draftQueue.styl';

let draftQueueComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default draftQueueComponent;
