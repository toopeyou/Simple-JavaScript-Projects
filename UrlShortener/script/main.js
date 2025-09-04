let shortenButton = document.querySelector('.shorten');
let getUrl = document.querySelector('.full-url');
let errorBox = document.querySelector('.error-box');
let resultBox = document.querySelector('.result-box');
let finalUrl = document.querySelector('.short-url')


shortenButton.onclick = () => {
    orginalUrl = getUrl.value;
    console.log(orginalUrl)
    ApiUrl = `https://tinyurl.com/api-create.php?url=${orginalUrl}`
    fetch(ApiUrl).then(response => response.text()).then(data => {
        console.log(data)
        if (data == 'Error') {
            errorBox.innerHTML = 'Error : Unable to shorten URL!'
            resultBox.classList.remove('visible')
        }else {
            finalUrl.value = data
            document.querySelector('.open-link').href = data;
            resultBox.classList.add('visible');
            errorBox.innerHTML = ''
        }
    }).catch(error => {
        errorBox.innerHTML = 'Error : Unable to shorten URL!'
    });
    
}







function copyToClipboard() {
    navigator.clipboard.writeText(finalUrl.value)
        .then(() => {
            alert('URL copied to clipboard!');
        })
        .catch(err => {
            alert('Failed to copy URL: ' + err);
        });
}