function goToUserSettings() {
  console.log("mia");
  window.location.href = "/UserSettings/UserSettings.html";
}

var i = 0; // Start Point
var images = []; // Images Array
var time = 3000; // Time Between Switch

// Image List
images[0] = "/home/media/pozaPalat.png";
images[1] = "/home/media/insidePalace.jpg";
images[2] = "/home/media/insidePalace1.jpg";
images[3] = "/home/media/outsidePalace.jpg";

// Change Image
function changeImg() {
  document.slide.src = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;

function GotOsearchPage() {
  window.location.href = "/search/search.html";
}

function GotoCUza() {
  window.location.href = "/locationDetail/locationDetail.html";
}

function goTours() {
  window.location.href = "/Tours/tours.html";
}
