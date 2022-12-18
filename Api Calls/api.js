let allData;

// api url
const api_url = "https://www.fishwatch.gov/api/species/red-snapper";

function createElement(dataFromUrl) {
	let titlu = document.createElement("h4");
	titlu.innerHTML = dataFromUrl;
   let main = document.getElementById("main");
   main.appendChild(titlu);
   let imagine = document.createElement("img");
   document.getElementById("poze").appendChild(imagine);
   imagine.className= "picture";
//    imagine.src = dataFromUrl.Image_Gallery[0].src;
   imagine.src = "https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/snapperred_1.jpg";

	
  }

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  allData = data[0];
  console.log(allData);
  if (response) {
   createElement(allData.Calories);
  }
  //   show(data);
}
// Calling that async function
getapi(api_url);



