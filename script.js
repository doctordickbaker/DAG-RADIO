var background = document.getElementById("background");
var but_play = document.getElementById("but_play");
var audioPlayer = document.getElementById("audioPlayer");
audioPlayer.src = "https://mopidy.electrostat.xyz/stream/live.mp3";
///set station's URL here

function Pause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    but_play.innerHTML = "Pause";
    background.className = "on";
    ///background.style.margin = "-100vh -100vw";  /// top right bottom left
    ///background.style.transform = "translate(-108vw,-108vh)";
    ///background.style.webkitFilter = "blur(8px)";
  } else {
    audioPlayer.pause();
    but_play.innerHTML = "Play";
    background.className = "off";
    //background.style.margin = "0vh 0vw 0vh 0vw";
    //background.style.webkitFilter = "blur(0px)";
    //background.style.transform = "translate(0vw,-18vh)";
  }
}

but_play.onclick = (function(){
  Pause();
})


