const cookiespopup = document.querySelector('.cookies');
const cookiesaccept = document.querySelector('#acceptcookies')
const manageconsent = document.querySelector('.mclink');

if (localStorage.getItem("hasVisited") === "true") {
    cookiespopup.style.display = 'none';
} else {
    cookiespopup.style.display = 'flex';
    localStorage.setItem("hasVisited", "true");
}

cookiesaccept.addEventListener('click', () => {
    cookiespopup.style.display = 'none';
})

manageconsent.addEventListener('click', ()=> {
    cookiespopup.style.display = 'flex';
})
