// let allData;

// // api url
// const api_url = "https://www.fishwatch.gov/api/species/red-snapper";

// function createElement(dataFromUrl) {
// 	let titlu = document.createElement("h4");
// 	titlu.innerHTML = dataFromUrl;
//    let main = document.getElementById("main");
//    main.appendChild(titlu);
//    let imagine = document.createElement("img");
//    document.getElementById("poze").appendChild(imagine);
//    imagine.className= "picture";
// //    imagine.src = dataFromUrl.Image_Gallery[0].src;
//    imagine.src = "https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/snapperred_1.jpg";

//   }

// // Defining async function
// async function getapi(url) {
//   // Storing response
//   const response = await fetch(url);

//   // Storing data in form of JSON
//   var data = await response.json();
//   allData = data[0];
//   console.log(allData);
//   if (response) {
//    createElement(allData.Calories);
//   }
//   //   show(data);
// }
// // Calling that async function
// getapi(api_url);


// exercitiu 2

// let array = ["ala", "bala", "portocala"];
// function RandomWords() {
//   for (let index = 0; index < array.length; index++) {
    
//     const element = array;
//     let a = document.createElement("p");
//     a.innerHTML = element;
//     document.getElementById("myAr").appendChild(a);
//     array.push(array.shift())

//   }
// }


//exercitiu 3


//creeaza un input de timp numar 
// creeaza un buton care la apasarea lui sa mi afiseze 10% din valoarea numarului introdus in input
