import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const VIDEO_TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function timeUpdate(data) {
  localStorage.setItem(VIDEO_TIME_KEY, JSON.stringify(data.seconds));
  console.log(localStorage);
}

player.on('timeupdate', throttle(timeUpdate, 1000));
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
player
  .setCurrentTime(localStorage.getItem(VIDEO_TIME_KEY))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });