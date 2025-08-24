
let joke = document.querySelector('#joke')
let Btn = document.querySelector('#getJoke')


function GetJoke(lang,bl, type, category) {
    
    let setCategory;
    let setBlacList;
    setCategory = (category === undefined || category === '') ? "Any" : category;
    setBlacList = (bl === undefined || bl === '') ? "" : `&blacklistFlags=${bl}`;

    let url =  `https://v2.jokeapi.dev/joke/${setCategory}?${lang}${setBlacList}${type}`
    fetch(url)
    .then(data => data.json())
    .then(item => {
        if (item.joke == undefined) {
            joke.textContent = `${item.setup} - \n ${item.delivery}`
        } else {
            joke.textContent = `${item.joke}`
        }

    })
}


Btn.onclick = () => {GetJoke(Language, BlacklistArray, Type, CategoryArray)}

GetJoke()