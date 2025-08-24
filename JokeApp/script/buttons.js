const buttons = document.querySelector('.Open-btn');
const SettingPage = document.querySelector('.setting-wrapper');
const JokePage = document.querySelector('.home-wrapper');

buttons.onclick = () => {
    buttons.querySelector('i').classList.toggle('fa-xmark');
    buttons.querySelector('i').classList.toggle('fa-bars');

    SettingPage.classList.toggle('none');
    JokePage.classList.toggle('none');
};