const menu = document.querySelector('#burger');
const popoutmenu = document.querySelector('#popoutmenu');
const everythingelse = document.querySelector('#mainwrap');

menu.addEventListener('click', () => {
    const isOpen = popoutmenu.style.display === 'block';

    if (isOpen) {
        popoutmenu.style.display = 'none';
        everythingelse.style.overflow = 'auto';
        everythingelse.style.position = '';
        everythingelse.style.left = '350px';
        menu.classList.remove('burgerclose');
    } else {
        popoutmenu.style.display = 'block';
        everythingelse.style.overflow = 'hidden';
        everythingelse.style.position = 'relative';
        everythingelse.style.left = '-350px';
        menu.classList.add('burgerclose');
    }
});


everythingelse.addEventListener('click', (e) => {
    const isOpen = popoutmenu.style.display === 'block';
    if (isOpen && e.target !== popoutmenu && e.target !== menu) {
        popoutmenu.style.display = 'none';
        everythingelse.style.overflow = 'auto';
        everythingelse.style.position = '';
        everythingelse.style.left = '350px';
        menu.classList.remove('burgerclose');
    }
});
