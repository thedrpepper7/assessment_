const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const main_wrap = document.querySelector('#mainwrap');
const popout_menu_btn = document.querySelector('#burgermenu');
const popout_menu = document.querySelector('#popout-menu');

//menu is closed at this point
popout_menu_btn.addEventListener('click', (event) => {
    event.stopPropagation();

    main_wrap.classList.add('MenuOpen');
    popout_menu.classList.add('open');
    popout_menu_btn.classList.add('burgerToClose')
    
    overlay.style.zIndex = '20';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    body.classList.add('noScroll');
});

//close the menu and remove overlay effect
overlay.addEventListener('click', () => {
    if (main_wrap.classList.contains('MenuOpen')) {

        main_wrap.classList.remove('MenuOpen');
        popout_menu.classList.remove('open'); 
        popout_menu_btn.classList.remove('burgerToClose');

        body.classList.remove('noScroll');
        overlay.style.zIndex = '-1';
        overlay.style.backgroundColor = '';
    }
});
