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
