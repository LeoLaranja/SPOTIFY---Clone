const resultArtist = document.getElementById('result-artist');
const areaCards = document.getElementById('area-cards');
const textArea = document.getElementById('text-area')
const searchInput = document.getElementById('search-input');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            const filteredResults = filterResultsByFirstLetter(result, searchTerm);
            displayResults(filteredResults);
        })
        .catch((error) => console.error('Error fetching data:', error));
}

function filterResultsByFirstLetter(results, searchTerm) {
    if (!searchTerm) {
        return results; 
    }

    const searchTermLower = searchTerm.toLowerCase();
    return results.filter(artist => artist.name.toLowerCase().startsWith(searchTermLower));
}

function displayResults(results) {
    hidePlaylists();
    const artistImage = document.getElementById ('artist-img');
    const artistName = document.getElementById ('artist-name');

    results.forEach ((element) => {
        artistImage.src = element.urlImg;
        artistName.innerText = element.name;
    })
    resultArtist.classList.remove('hidden');
}

function hidePlaylists() {
    textArea.classList.add("hidden");
    areaCards.classList.add("hidden");
  }

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === ""){
        resultArtist.classList.add('hidden');
        textArea.classList.remove('hidden');
        areaCards.classList.remove('hidden');
        return;
    }
    requestApi(searchTerm);
})


