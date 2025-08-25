let addFavoriteButton = document.querySelector('#favourite');
const copyBtn = document.querySelector('#copy');
const clearButton = document.querySelector('#clear-button');

let FavoriteList = [];
FavoriteList = retrievedArray;

function AddFavorite(id) {

     if (FavoriteList.includes(id)) {
        FavoriteList.splice(FavoriteList.indexOf(id), 1);
        addFavoriteButton.classList.remove('liked');
        console.log(`Удалено: ${id}`);
    } else {
        FavoriteList.push(id);
        addFavoriteButton.classList.add('liked');
        console.log(`Добавлено: ${id}`);
    }
    const jsonArray = JSON.stringify(FavoriteList); 
    localStorage.setItem('save', jsonArray);

   
}
addFavoriteButton.onclick = () => AddFavorite(id);



copyBtn.onclick = () => { 
    const textarea = document.createElement('textarea');
    textarea.value = QuoteText.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

clearButton.onclick = () => {
    addFavoriteButton.classList.remove('liked');
    FavoriteList = [];
    favoriteListElement.innerHTML = ''
    localStorage.setItem('save', FavoriteList);

}