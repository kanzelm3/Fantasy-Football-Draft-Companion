import DraftQueueModule from './draftQueue'
import DraftQueueController from './draftQueue.controller';
import DraftQueueComponent from './draftQueue.component';
import DraftQueueTemplate from './draftQueue.html';

describe('DraftQueue', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DraftQueueModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DraftQueueController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(DraftQueueTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DraftQueueComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(DraftQueueTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DraftQueueController);
      });
  });
});
