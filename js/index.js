var background = document.getElementById("background");
var but_play = document.getElementById("but_play");
var audioPlayer = document.getElementById("audioPlayer");
var gonzo = document.getElementById("gonzo");
var logo =  document.getElementById("logo");
audioPlayer.src = "https://mopidy.electrostat.xyz/stream/live.mp3";
///set station's URL here

function Pause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    but_play.innerHTML = "Pause";
    background.className = "on";
    but_play.className = "on";
    logo.className = "on";
    gonzo.className = "on";
  } else {
    audioPlayer.pause();
    but_play.innerHTML = "Play";
    background.className = "off";
    logo.className = "off";
    but_play.className = "off";
    gonzo.className = "off";
  }
}

but_play.onmousedown = (function(){
  Pause();
})