$(document).ready(function () {
  $(".clients").slick({
    slidesToShow: 7, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    infinite: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200, // screens smaller than 1200px
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992, // screens smaller than 992px (tablets)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // screens smaller than 600px (phones)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400, // very small screens
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});
