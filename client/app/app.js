import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';
import '../../node_modules/videogular/dist/videogular/latest/videogular';
import '../../node_modules/videogular/dist/controls/latest/vg-controls';
import '../../node_modules/videogular/dist/overlay-play/latest/vg-overlay-play';
import '../../node_modules/videogular/dist/poster/latest/vg-poster';
import '../../node_modules/videogular/dist/buffering/latest/vg-buffering';
import 'ng-infinite-scroll';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
  ngSanitize,
  'com.2fdevs.videogular',
  'com.2fdevs.videogular.plugins.controls',
  'com.2fdevs.videogular.plugins.overlayplay',
  'com.2fdevs.videogular.plugins.poster',
  'infinite-scroll',
  uiRouter,
  ngMaterial,
  Common.name,
  Components.name
])

.directive('app', AppComponent)

.config(($mdThemingProvider) => {
  $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('grey');
});
