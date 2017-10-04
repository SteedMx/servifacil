$(document).ready(function () {
 $('.us__sections').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive : [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  })

  /*
  $('.services__list').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive : [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  })
  */

  $('.hero__carousel').slick({
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 12000,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    pauseOnHover: false,
    dots: true
  })
})
