let ToSelect = document.querySelector('.toList')
let FromSelect = document.querySelector('.fromList');

let toFlag = document.querySelector('.toflag');
let fromFlag = document.querySelector('.fromFlag');

let currency_code = Object.keys(country_list);
let exchangeRate = document.querySelector('.exchange-rate')
let ConvertButton = document.querySelector('.btn');

fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(data => {
        console.log('Страна:', data);
        FromSelect.value = data.currency;
        flagLoad(FromSelect.value, false)
        ToSelect.value = 'USD';
        flagLoad(ToSelect.value, true)

    }).catch(err => console.error('Ошибка:', err));

function Convert() {
   let url = `https://v6.exchangerate-api.com/v6/f13953bb243b56a40b2a10c8/latest/${FromSelect.value}`;
   fetch(url).then(response => response.json()).then(result =>{
      let exchange = result.conversion_rates[ToSelect.value];
      let input = document.querySelector('.input');
      let final = (exchange * input.value).toFixed(2);
      exchangeRate.innerText = final + ' ' + ToSelect.value;
  }).catch(() =>{
      exchangeRateTxt.innerText = "Something went wrong";
  });
  
};
ConvertButton.addEventListener('click', Convert );

function loadCountry() {
    for (let index = 0; index < currency_code.length; index++) {
        let optionFrom = document.createElement('option');
        let optionTo = document.createElement('option');
        
        optionFrom.value = currency_code[index];
        optionTo.value = currency_code[index];

        optionFrom.innerHTML = currency_code[index];
        optionTo.innerHTML = currency_code[index];

        ToSelect.append(optionTo);
        FromSelect.append(optionFrom);
    };
};
loadCountry();

function flagLoad(countryCode, FromTo) {
    if (FromTo == true) toFlag.src = `https://flagcdn.com/48x36/${country_list[countryCode].toLowerCase()}.png`;
    if (FromTo == false) fromFlag.src = `https://flagcdn.com/48x36/${country_list[countryCode].toLowerCase()}.png`;  
};
ToSelect.onchange = function() {flagLoad(ToSelect.value, true)};
FromSelect.onchange = function() {flagLoad(FromSelect.value, false)};