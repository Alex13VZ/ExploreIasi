var playAudio = true;
var audio = new Audio("/AudioGuide/media/jazz.mp3");

function playMusic() {
  if (playAudio) {
    audio.play();
  } else {
    audio.pause();
  }
  playAudio = !playAudio;
}

function goBackToMap() {
  window.location.href = "/TourDetailMap/tourDetailMap.html";
}


setInterval(() => {
  var timer = Math.trunc(audio.currentTime);

  const minutes = Math.floor(timer / 60);

  const seconds = timer % 60;

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  const currentTimer = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  document.getElementById("time").innerHTML = currentTimer;

  var remainTimer = Math.trunc(audio.duration) - timer;
  const remainingMinutes = Math.floor(remainTimer / 60);
  const remainingSeconds = remainTimer % 60;

  const remainingTimer = `${padTo2Digits(remainingMinutes)}:${padTo2Digits(
    remainingSeconds
  )}`;
  document.getElementById("time-left").innerHTML = remainingTimer;

  //change width of progressbar
  var elem = document.getElementById("progress-bar");
  var songPos = document.getElementById("song-position");
  var percentageOfSong = ((timer + 0.25) / Math.trunc(audio.duration)) * 100;
  // var percentageOfSongPos = ((timer + 0.25) / Math.trunc(audio.duration)) * 70;
  

  elem.style.width = percentageOfSong + "%";
  songPos.style.left = percentageOfSong - 2 + "vW";
}, 1000);

// la biluta ne jucam cu LEFT din CSS
// la progressbar ne jucam cu width de pe class="w3-progressbar w3-round-xlarge"
