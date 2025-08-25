let openListBtn = document.querySelector('#open-list');
let favoriteListElement = document.querySelector(".Favorite-list");




function getFavoriteList(id) {
    let url =  `https://dummyjson.com/quotes/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(item => {
            let li = document.createElement('li');
            li.innerHTML = item.quote;
            favoriteListElement.append(li);

        })
        .catch(err => console.error("Ошибка:", err));

}
openListBtn.onclick = () => { 
    document.querySelector('.favorite-container').classList.remove('none');
    document.querySelector('.quote-wrapper').classList.add('none');

    favoriteListElement.innerHTML = ''
    for (let i = 0; i < FavoriteList.length; i++) {
        getFavoriteList(FavoriteList[i])
    }
};


const CloseBtn = () => {  
    document.querySelector('.quote-wrapper').classList.remove('none');
    document.querySelector('.favorite-container').classList.add('none');
};