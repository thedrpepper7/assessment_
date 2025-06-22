let header = document.querySelector('.stickyheader');
let lastScroll = window.scrollY;
const hideAfter = 300; // Adjust as needed

window.addEventListener('scroll', () => {
  let currentScroll = window.scrollY;

  if (currentScroll <= hideAfter) {
    // If near top of page, always show header
    header.classList.remove('hidden');
  } else {
    // Only apply hide/show logic after threshold
    if (currentScroll > lastScroll) {
      // Scrolling down → hide header
      header.classList.add('hidden');
    } else {
      // Scrolling up → show header
      header.classList.remove('hidden');
    }
  }

  lastScroll = currentScroll;
});
