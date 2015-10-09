import template from './main.html';
import controller from './main.controller';
import './main.styl';

let mainComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default mainComponent;
