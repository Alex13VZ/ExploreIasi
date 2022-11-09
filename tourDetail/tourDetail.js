var content = [
  {
    h1: "About",
    paragraf:
      "Home to the oldest Romanian university and to the first engineering school, Iași is one of the most important education and research centres of the country, accommodating over 60,000 students in five public universities. he social and cultural life revolves around the Vasile Alecsandri National Theatre (the oldest in Romania), the Moldova State Philharmonic, the Opera House, the Iași Athenaeum, the Botanical Garden (the oldest and largest in Romania), the Central University Library (the oldest in Romania), the cultural ... Read more ",
  },
  {
    h1: "Hightlights",
    paragraf:
      "Enjoy a full-day walking tour in one of the most important and oldest cities in Romania. You will be amazed by the way that occidental part of the city blends in with the old town shaped by hundreds of year of history, culture and religious life Walk along the main historical street of the city  Tour the one of the most impressive buildings of the city, the Palace of Culture Visit one of the first typohraphy in Romania at the Dosoftei House Visit the biggest Cathedral in Moldova.",
  },
];

function createDiv(h1, paragraftxt) {
  var container = document.createElement("div");
  container.className = "container";
  const h1Element = document.createElement("h1");
  const paragraf = document.createElement("p");
  const h1Text = document.createTextNode(h1);
  const paragraftext = document.createTextNode(paragraftxt);
  h1Element.appendChild(h1Text);
  paragraf.appendChild(paragraftext);
  document.getElementById("wrapper").appendChild(container);
  container.appendChild(h1Element);
  container.appendChild(paragraf);
}

content.forEach((element) => {
  createDiv(element.h1, element.paragraf);
});

var blocPoze = [
  {
    imaginesrc: "/tourDetail/media/palatulPozaMica.png",
    h3text: "Palatul Culturii",
    h6text: "Blv. Carol I nr. 11, Iasi, Romania",
    imgsrcIcon: "/tourDetail/media/locatiegri.png",
    h5text: "100m",
  },
  {
    imaginesrc: "/tourDetail/media/DosofteiPozaMica.png",
    h3text: "Dosoftei House",
    h6text: "Blv. Carol I nr. 11, Iasi, Romania",
    imgsrcIcon: "/tourDetail/media/locatiegri.png",
    h5text: "500m",
  },
  {
    imaginesrc: "/tourDetail/media/rozovanuPozaMica.png",
    h3text: "Roznovanu Palace",
    h6text: "Blv. Carol I nr. 11, Iasi, Romania",
    imgsrcIcon: "/tourDetail/media/locatiegri.png",
    h5text: "700m",
  },
  {
    imaginesrc: "/tourDetail/media/MetCathedralPozamica.png",
    h3text: "Metropolitan Cathedral",
    h6text: "Blv. Carol I nr. 11, Iasi, Romania",
    imgsrcIcon: "/tourDetail/media/locatiegri.png",
    h5text: "1.2km",
  },
  {
    imaginesrc: "/tourDetail/media/NationalTheatreaPozaMica.png",
    h3text: "National Theatre “V. Alecsandri”",
    h6text: "Blv. Carol I nr. 11, Iasi, Romania",
    imgsrcIcon: "/tourDetail/media/locatiegri.png",
    h5text: "1.2km",
  },
];

function primulMeuFor(imaginesrc, h3, h6textul, imgsrcIcon, h5textul) {
  var primuldiv = document.createElement("div");
  primuldiv.className = "primuldiv";
  const img = document.createElement("img");
  img.className = "clasaPePoza";
  primuldiv.appendChild(img);
  var divuldoi = document.createElement("div");
  divuldoi.className = "divuldoi";
  var divultrei = document.createElement("div");
  divultrei.className = "divultrei";
  document.getElementById("PozeMici").appendChild(primuldiv);
  // document.getElementsByClassName("primuldiv").appendChild(divuldoi);
  primuldiv.appendChild(divuldoi);
  primuldiv.appendChild(divultrei);
  // document.getElementsByClassName("primuldiv").appendChild(clasaPePoza);
  img.src = imaginesrc;
  let h3text = document.createElement("h3");
  h3text.className = "titlulMeu";
  let h3cuvinte = document.createTextNode(h3);
  h3text.appendChild(h3cuvinte);
  // document.getElementsByClassName("divuldoi").appendChild(h3text);
  divuldoi.appendChild(h3text);
  var h6text = document.createElement("h6");
  h6text.className = "primulcapitol";
  var h6cuvinte = document.createTextNode(h6textul);
  h6text.appendChild(h6cuvinte);
  // document.getElementsByClassName("divuldoi").appendChild(h6text);
  divuldoi.appendChild(h6text);
  const imgIcon = document.createElement("img");
  imgIcon.className = "icoane";
  imgIcon.src = imgsrcIcon;
  // document.getElementsByClassName("divultrei").appendChild(icoane);
  divultrei.appendChild(imgIcon);
  var h5text = document.createElement("h5");
  h5text.className = "aldoileacapitol";
  const h5cuvinte = document.createTextNode(h5textul);
  h5text.appendChild(h5cuvinte);
  // document.getElementsByClassName("divultrei").appendChild(aldoileacapitol);
  divultrei.appendChild(h5text);
}

blocPoze.forEach((obiect) => {
  primulMeuFor(
    obiect.imaginesrc,
    obiect.h3text,
    obiect.h6text,
    obiect.imgsrcIcon,
    obiect.h5text
  );
});

function goBackToTour() {
  console.log("catel");
  window.location.href = "/Tours/tours.html";
}

function goToTDL() {
  console.log("i see");
  window.location.href = "/tourDetailList/tourDetailList.html";
}
