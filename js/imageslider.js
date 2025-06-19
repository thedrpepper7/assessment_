document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 600,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper .swiper-button-next',
      prevEl: '.swiper .swiper-button-prev',
    },
    grabCursor: true,
  });

  // Second carousel: clients logos
  const clientsSwiper = new Swiper('.clients-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.clients-swiper .clients-pagination',
      clickable: true,
    },
    grabCursor: true,
  });
});
