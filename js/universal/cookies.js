const cookiespopup = document.querySelector('.cookies');
const cookiesaccept = document.querySelector('#acceptcookies')
const manageconsent = document.querySelector('.mclink');
const rest_of_page = document.querySelector('#mainwrap');
const overlayCookies = document.querySelector('.overlay');

if (localStorage.getItem("hasVisited") === "true") {
    cookiespopup.style.display = 'none';
} else {
    cookiespopup.style.display = 'flex';
    overlayCookies.style.display = 'block';
    localStorage.setItem("hasVisited", "true");
}

cookiesaccept.addEventListener('click', () => {
    cookiespopup.style.display = 'none';
    overlayCookies.style.display = 'none';
    rest_of_page.style.pointerEvents = '';
})

manageconsent.addEventListener('click', ()=> {
    cookiespopup.style.display = 'flex';
    overlayCookies.style.display = 'block';
    rest_of_page.style.pointerEvents = 'none';

})
