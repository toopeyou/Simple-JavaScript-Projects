let getNumber = document.querySelector('.getNumber');
let CheckCardButton = document.querySelector('.CheckBinBtn');



function card(type,bank,category,flagSrc,Scheme,Number) {
    if (bank == null) bank = 'Неизвестно';
    if (category == null) category = 'Неизвестно';

    let Logo;
    const first4 = Number.slice(0, 4);  
    const last2 = Number.slice(-2);  
    if (Scheme == 'VISA') {Logo = './img/visa.svg';}
    else if(Scheme == 'MASTERCARD') {Logo = './img/masterCard.png';}
    else {Logo = './img/chip.png'};

    document.querySelector(".card").innerHTML = `
        <header>
            <div class="header-left">
                <img class="SchemeLogo" src="${Logo}" alt="">
                <span class="CardType">${type}</span>
            </div>
            <img class="Flag" src="${flagSrc}" alt="">
        </header>
        <div class="card-details">
            <div class="Card-names">
                <h3>CARD NUMBER:</h3>
                <h2>${first4} ${last2}** **** ****</h2>
                <a href="!#" target="_blank" class="BankName">${bank}</a>
            </div>
            <div class="valid-date">
                <span class="cardCategory">
                    ${category}
                </span>
            </div>
        </div>
    `;
};




function getInfo(number) {
    let url =  `https://data.handyapi.com/bin/${number}`;
    fetch(url)
    .then(data => data.json())
    .then(result => {
        if (result.Status ==  'WRONG INPUT') {
            alert('some error');
        }else {
            console.log(result)
            document.querySelector('.card').classList.add('show');
            let getCountryCode = result.Country.A2;
            let getFlag = `https://flagcdn.com/48x36/${getCountryCode.toLowerCase()}.png`;  
            card(result.Type, result.Issuer, result.CardTier, getFlag, result.Scheme, number);
        };

    });
};

CheckCardButton.onclick = () => { getInfo(getNumber.value); };

