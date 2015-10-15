class SelectedPlayerController {
  constructor($mdDialog, Players) {
    this.playVideo = (video) => {
      Players.fetchVideoInformation(video.id).then((videoDetails) => {
        $mdDialog.show({
          clickOutsideToClose: true,
          template: `
            <md-dialog>
              <md-dialog-content>
                <videogular
                  vg-theme="video.config.theme.url"
                  vg-auto-play="true">
                  <vg-media
                    vg-src="video.config.sources">
                  </vg-media>
                  <vg-controls vg-autohide="true">
                    <vg-play-pause-button></vg-play-pause-button>
                    <vg-time-display>{{ currentTime | date:'mm:ss' }}</vg-time-display>
                    <vg-scrub-bar>
                      <vg-scrub-bar-current-time></vg-scrub-bar-current-time>
                    </vg-scrub-bar>
                    <vg-time-display>{{ timeLeft | date:'mm:ss' }}</vg-time-display>
                    <vg-volume>
                      <vg-mute-button></vg-mute-button>
                      <vg-volume-bar></vg-volume-bar>
                    </vg-volume>
                    <vg-fullscreen-button></vg-fullscreen-button>
                  </vg-controls>
                  <vg-overlay-play></vg-overlay-play>
                  <vg-poster vg-url='video.config.plugins.poster'></vg-poster>
                </videogular>
                <h2 ng-bind="video.clipHeadline"></h2>
                <p ng-bind="video.caption"></p>
              </md-dialog-content>
            </md-dialog>
          `,
          controller: function DialogController($scope, $mdDialog, video) {
            $scope.closeDialog = function() {
              $mdDialog.hide();
            };
            $scope.video = video;
          },
          locals: { video: videoDetails }
        });
      });
    }
  }
}

export default SelectedPlayerController;
