const toog = document.querySelectorAll(".sw").checked;

function onClickHandler(event) {
  console.log(event);
  if (event.target.checked) {
    document.body.style.background = "#515151";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
}
function openLanguages() {
  console.log("s-a facut click");
}

document.querySelector(".en").addEventListener("click", () => {
  document.querySelector(".limba").classList.add("limba-visible");
});

function goBackToHome() {
  console.log("mi");
  window.location.href = "/home/home.html";
}

function goToSearch() {
  console.log("mi");
  window.location.href = "/search/search.html";
}
