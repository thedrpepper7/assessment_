const menu = document.querySelector('#burger');
const popoutmenu = document.querySelector('#popoutmenu');
const everythingelse = document.querySelector('#mainwrap');
let isOpen = false;

// menu.addEventListener('click', () => {
//     if (popoutmenu.style.display === 'block') {

//         popoutmenu.style.display = 'none';
//         everythingelse.style.overflow = 'auto';
//         everythingelse.style.position = '';
//         everythingelse.style.left = '350px'

//     } else {
        
//         popoutmenu.style.display = 'block';
//         everythingelse.style.overflow = 'hidden';
//         everythingelse.style.position = 'relative';
//         everythingelse.style.left = '-350px';

//     }
// });


menu.addEventListener('click', ()=> {
    popoutmenu.style.display = 'block';
    everythingelse.style.overflow = 'hidden';
    everythingelse.style.position = 'relative';
    everythingelse.style.left = '-350px';
})

everythingelse.addEventListener('click', (e)=> {
    if (e.target != menu && popoutmenu.style.display === 'block') {
        popoutmenu.style.display = 'none';
        everythingelse.style.overflow = 'auto';
        everythingelse.style.position = '';
        everythingelse.style.left = '350px';
    }
})