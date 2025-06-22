let header = document.querySelector('.stickyheader');
let lastScroll = window.scrollY;

window.addEventListener('scroll', () => {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    // Scrolling down → hide header
    header.classList.add('hidden');
  } else {
    // Scrolling up → show header fully
    header.classList.remove('hidden');
  }

  lastScroll = currentScroll;
});
