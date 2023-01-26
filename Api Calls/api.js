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

// function calcul(){
// 	let inputValue = document.getElementById("inputNumber").value;
// 	let rezultat = inputValue * 0.1;
// 	console.log(rezultat);
// }

// exercitiu 4
var persoane = [
  {
    nume: "Ionut",
    prenume: "maftei",
    varsta: 29,
    addresa: {
      strada: "75 Main St",
      oras: "Stuhulet",
      judet: "VS",
      codPostal: 51181,
    },
    numarDeTelefon: [
      {
        tip: "home",
        numar: "856255596",
      },
      {
        tip: "work",
        numar: "603243375",
      },
    ],
    email: "mad97vhpyjsfupzj4tn62m@example.com",
    ocupatia: "FrontEnd developer",
    company: "Babar Inc",
    esteAngajat: false,
    hobbyuri: ["reading", "travelling", "gaming"],
  },
  {
    nume: "Bogdan",
    prenume: "Mandrila",
    varsta: 35,
    addresa: {
      strada: "37 Main St",
      oras: "Stuhulet",
      judet: "VS",
      codPostal: 27009,
    },
    numarDeTelefon: [
      {
        tip: "home",
        numar: "404701523",
      },
      {
        tip: "work",
        numar: "173751173",
      },
    ],
    email: "0zq8hhod59ybrmnpph4ofmh@example.com",
    ocupatia: "electrician",
    company: "Babar Inc",
    esteAngajat: true,
    hobbyuri: ["reading", "travelling", "gaming"],
  },
  {
    nume: "Bogdan",
    prenume: "mazilu",
    varsta: 55,
    addresa: {
      strada: "50 Main St",
      oras: "Stuhulet",
      judet: "IS",
      codPostal: 33405,
    },
    numarDeTelefon: [
      {
        tip: "home",
        numar: "587001991",
      },
      {
        tip: "work",
        numar: "323051305",
      },
    ],
    email: "oze6bfyy2fbt8niq807p3n@example.com",
    ocupatia: "sudor",
    company: "Babar Inc",
    esteAngajat: false,
    hobbyuri: ["reading", "travelling", "gaming"],
  },
  {
    nume: "Alexandru",
    prenume: "zaharia",
    varsta: 45,
    addresa: {
      strada: "10 Main St",
      oras: "Stuhulet",
      judet: "IF",
      codPostal: 91901,
    },
    numarDeTelefon: [
      {
        tip: "home",
        numar: "960310302",
      },
      {
        tip: "work",
        numar: "714499076",
      },
    ],
    email: "5zqufzmt6qak0z431ameqg@example.com",
    ocupatia: "tamplar",
    company: "Babar Inc",
    esteAngajat: false,
    hobbyuri: ["reading", "travelling", "gaming"],
  },
  {
    nume: "Andrei",
    prenume: "Moise",
    varsta: 25,
    addresa: {
      strada: "39 Main St",
      oras: "Stuhulet",
      judet: "IF",
      codPostal: 70119,
    },
    numarDeTelefon: [
      {
        tip: "home",
        numar: "72593110",
      },
      {
        tip: "work",
        numar: "805675323",
      },
    ],
    email: "sj3jr8fulfvcgwvxg55lc@example.com",
    ocupatia: "sofer",
    company: "Babar Inc",
    esteAngajat: true,
    hobbyuri: ["reading", "travelling", "gaming"],
  },
];

function AfisamToatePersoaneleCuToateDetaliile() {
  persoane.forEach((element) => {
    let container = document.getElementById("container-exercitiu4");

    Object.keys(element).forEach((e) => {
      let divulMeu = document.createElement("div");
      divulMeu.innerHTML = e + " : " + element[e];
      container.appendChild(divulMeu);

      console.log();
    });
    // console.log(element);
    //   AfisamToatePersoaneleCuToateDetaliile(element);
  });
}
