$(document).ready(function () {
 $('.us__sections').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true
  })
})
