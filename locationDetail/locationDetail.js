function GoBackToSearch() {
  console.log("i see");
  window.location.href = "/search/search.html";
}

function GoToMyActivites() {
  console.log("i see");
  window.location.href = "/MyActivites/myactivites.html";
}

document.querySelector(".p2").addEventListener("click", () => {
  document.querySelector(".time").classList.add("time-visible");
});

document.querySelector(".BtnClose").addEventListener("click", () => {
  document.querySelector(".time").classList.remove("time-visible");
});
