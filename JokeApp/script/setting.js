

let blacklistFlags = document.querySelector('.multiselect')
let LanguageList = document.querySelector('#lang')


let Language = `lang=en`
LanguageList.onchange = function() { 
    Language = `lang=${LanguageList.value}`
};



let BlacklistArray  = ''
function BlackListCheckbox() {
        BlacklistArray = ''
        const checkedCheckboxes = blacklistFlags.querySelectorAll('input[type="checkbox"]:checked');
        checkedCheckboxes.forEach(element => {
            let nameBl = blacklistFlags.querySelector(`label[for="${element.id}"]`).innerHTML;
            BlacklistArray += BlacklistArray == '' ? `${nameBl}` : `,${nameBl}`;
        }); 
};


let twopartElement = document.querySelector('#twopart')
let singleElement = document.querySelector('#single')
let Type = ''
function TypeOfJoke() {
    if (twopartElement.checked && singleElement.checked == false) {Type = '&type=twopart'}
    else if (singleElement.checked && twopartElement.checked == false) {Type = '&type=single'}
    else {Type = ''}
};




let CategorylistElement = document.querySelector('.category')
let CategoryArray = ''
function CategoryChange() {
    CategoryArray = ''
    const CheckedCategory = CategorylistElement.querySelectorAll('input[type="checkbox"]:checked');
    CheckedCategory.forEach(element => {
        let name = CategorylistElement.querySelector(`label[for="${element.id}"]`).innerHTML;
        CategoryArray += CategoryArray == '' ? `${name}` : `,${name}`;
    });
}