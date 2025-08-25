let QuoteText = document.querySelector('.quote');
let AuthorText = document.querySelector('#author');
let id;


function getQuote() {
    let url =  `https://dummyjson.com/quotes/random`
    fetch(url)
        .then(res => res.json())
        .then(item => {
            if (FavoriteList.includes(id)) {addFavoriteButton.classList.remove('liked')}

            
            QuoteText.innerHTML = item.quote;
            AuthorText.innerHTML = item.author;
            id = item.id;
        })
        .catch(err => console.error("Ошибка:", err));

};

getQuote();

let retrievedArray = [];

function loadPage() {

    let getLiked = localStorage.getItem('save');
    console.log(getLiked)
    if (getLiked !== '') {retrievedArray = JSON.parse(getLiked);}
}
loadPage()