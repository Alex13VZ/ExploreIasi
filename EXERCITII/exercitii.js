// function schimbaCuloarea(){
//   console.log("pisica");
// }

// var playMusic = true;
// var audio = new Audio("/AudioGuide/media/jazz.mp3");

// function song() {
//   if (playMusic) {
//     audio.play();
//   } else {
//     audio.pause();
//   }
//   playMusic = !playMusic;
// }

// ex nr 2

// window.addEventListener("keydown", apasaTasta);
// function apasaTasta(e) {
//   switch (e.keyCode) {
//     case  76:
//       audio.play();

//       break;
//     case 80:
//       audio.pause();

//     default:
//       break;
//   }
//   if (e.keyCode == 76) {
//     audio.play();
//   } else if (e.keyCode == 80) {
//     audio.pause();
//   } else if (e.keyCode == 32) {
//     document.querySelector("body").style.backgroundColor = "red";
//   }

// ex nr 3
// exemple de falsy values
// var e = undefined;
// var i = NaN;
// var c = false;
// var h = null;
// var j = "";
// var d = 0;
// var f; (undefined adica valoare falsa)

// truthy values
// var a = 2;
// var b = "4";
// var g = [1,"2","dog",false]
// var k =[1,2,3,4,5,6];

// // if (k.length) {
// //   console.log("valoarea este adevarata");
// // } else {
// //   console.log("valoarea este falsa");
// // }

// var a = 10;
// var b = 20;
// var c = 12;

// if (q) {
//   console.log("adevarat");
// } else {
//   console.log("fals");
// }

// ex 4

// var click = 0;

// window.addEventListener("hover", apasa)
// function apasa(e){
// 	click++;
// 	console.log(click);

// }

// var hover = 0;
// function culcat() {
//   document.getElementById("canta").style.width = "150px";
//   hover++;
//   console.log(hover);
// }

// function mars() {
//   document.getElementById("canta").style.width = "80px";
// }

function addItem() {
  var scris = document.getElementById("inputText");
  console.log(scris);
  var par = document.createElement("p");
  par.id = "added-item";
  var x = document.createElement("INPUT");
  x.id = "checkbox";
  x.setAttribute("type", "checkbox");
  x.setAttribute("onclick", "hasmocar()");
  if (!scris.value == "") {
    par.innerHTML = scris.value;

    var divItem = document.createElement("div");
    divItem.className = "div-item";
    divItem.appendChild(x);
    divItem.appendChild(par);
    document.getElementById("wrapper").appendChild(divItem);
  }
  scris.focus();
}

function hasmocar() {
  var checkvalue = document.getElementById("checkbox");
  if (checkvalue.checked) {
    var linie = document.getElementById("added-item");
    linie.className = "linie";
  } else {
    var linie = document.getElementById("added-item");
    linie.classList.remove("linie");
  }
}
