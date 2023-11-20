// add film function

function addfilm() {
    var favoriteFilm = document.getElementById("filme").value.trim();
    var elementListFilms = document.getElementById("filmsList");

    if (favoriteFilm == "") {
        alert("Insira o endereço de imagem");
    } else {
        if (isValidImageUrl(favoriteFilm)) {
            elementListFilms.innerHTML = elementListFilms.innerHTML + '<img src=' + favoriteFilm + '>';
        } else {
            alert("Insira uma URL de imagem válida");
        }
    }

    document.getElementById("filme").value = "";
}

function isValidImageUrl(url) {
return /\.(jpg|jpeg|png|gif)$/i.test(url);
}

// popup function

var openBox = document.getElementById("open");
var closeBox = document.getElementById("close");
var modalBox = document.getElementById("modal");

openBox.addEventListener('click', () => {
    modalBox.style.display = 'block';
});

closeBox.addEventListener('click', () => {
    modalBox.style.display = 'none';
});