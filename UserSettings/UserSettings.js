// const toog = document.querySelectorAll(".sw").checked;

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

document.querySelector(".close-panel").addEventListener("click", () =>{
  document.querySelector(".limba").classList.remove("limba-visible");
}
)

document.querySelector(".limba1").addEventListener("click", () => {
  document.querySelector(".check").classList.add("check-visible");
});


document.querySelector(".limba2").addEventListener("click", () => {
  document.querySelector(".check1").classList.add("check-visible");
  document.querySelector(".check").classList.remove("check-visible");
  
});


document.querySelector(".limba3").addEventListener("click", () => {
  document.querySelector(".check2").classList.add("check-visible");
  document.querySelector(".check1").classList.remove("check-visible");
  
});


document.querySelector(".limba4").addEventListener("click", () => {
  document.querySelector(".check3").classList.add("check-visible");
  document.querySelector(".check2").classList.remove("check-visible");
  
});


document.querySelector(".limba5").addEventListener("click", () => {
  document.querySelector(".check4").classList.add("check-visible");
  document.querySelector(".check3").classList.remove("check-visible");
  
});







function goBackToHome() {
  console.log("mi");
  window.location.href = "/home/home.html";
}

function goToSearch() {
  console.log("mi");
  window.location.href = "/search/search.html";
}


