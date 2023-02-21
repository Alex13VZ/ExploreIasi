function goBcackToUs() {
  console.log("mi");
  window.location.href = "/home/home.html";
}

function goToLocDetail() {
  console.log("push");
  window.location.href = "/locationDetail/locationDetail.html";
}

const searchInput = document.getElementById('search-input');
const recentSearches = document.getElementById('recent-searches');

const searches = [
  'Palatul Culturii',
  'Universitatea Alexandru Ioan Cuza',
  'Union Museum',
  'Dosoftei House Museum',
  'Copou Gardens',
  'Botanical Gardens',
  'Golia Monastery',
  'Cetatuia Monastery'
];

searchInput.addEventListener('focus', () => {
  recentSearches.innerHTML = ''; // Clear recent searches

  searches.forEach(search => {
    const div = document.createElement('div');
    div.textContent = search;
    div.addEventListener('click', () => {
      searchInput.value = search;
    });
    recentSearches.appendChild(div);
  });
});

document.addEventListener('click', event => {
  if (event.target !== searchInput && !recentSearches.contains(event.target)) {
    recentSearches.style.display = 'none';
  }
});


function goNext(){
  window.location.href = "/locationDetail/locationDetail.html"
}