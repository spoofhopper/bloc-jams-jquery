class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    player.getDuration();
  }
}
const helper = new Helper();