import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME = "videoplayer-current-time";

player.on('timeupdate', onPlay);

function onPlay(data) {
    localStorage.setItem(CURRENT_TIME, data.seconds);
};

const currentTime = JSON.parse(localStorage.getItem(CURRENT_TIME));

if (currentTime) {
    player.setCurrentTime(currentTime);
};