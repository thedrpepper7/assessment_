document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".stickyheader");
  if (!header) return;

  let lastScroll = window.scrollY;
  const hideAfter = 300;

  window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll <= hideAfter) {
      header.classList.remove("hidden");
    } else {
      if (currentScroll > lastScroll) {
        header.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
      }
    }

    lastScroll = currentScroll;
  });
});
