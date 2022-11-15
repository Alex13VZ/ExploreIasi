var playAudio = true;
var audio = new Audio("/AudioGuide/media/jazz.mp3");

function playMusic() {
  if (playAudio) {
    audio.play();
  } else {
    audio.pause();
  }
  playAudio = !playAudio;
  console.log((audio.currentTime).toFixed(2))
}

function goBackToMap() {
  console.log("check");
  window.location.href = "/TourDetailMap/tourDetailMap.html";
}

