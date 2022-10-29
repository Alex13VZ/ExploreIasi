const paragraf = document.getElementsByClassName(".para");
const textnode = document.createTextNode("mancare");
// paragraf.appendChild(textnode)
console.log(paragraf);

function GoBackToLocationDetail() {
  console.log("i see");
  window.location.href = "/locationDetail/locationDetail.html";
}

function GoToTurs() {
  console.log("i see");
  window.location.href = "/Tours/tours.html";
}
