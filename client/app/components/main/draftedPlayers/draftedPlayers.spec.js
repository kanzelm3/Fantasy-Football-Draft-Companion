import DraftedPlayersModule from './draftedPlayers'
import DraftedPlayersController from './draftedPlayers.controller';
import DraftedPlayersComponent from './draftedPlayers.component';
import DraftedPlayersTemplate from './draftedPlayers.html';

describe('DraftedPlayers', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DraftedPlayersModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DraftedPlayersController();
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
      expect(DraftedPlayersTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DraftedPlayersComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(DraftedPlayersTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DraftedPlayersController);
      });
  });
});
