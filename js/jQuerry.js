$(document).ready(function () {
    $('#imageRow div:gt(5)').hide();
    $('#showMoreBtn').on('click', function () {
      $('#imageRow div:hidden:lt(3)').fadeIn(500); 
      if ($('#imageRow div:hidden').length === 0) {
        $('#showMoreBtn').hide();
      }
    });
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 1000,
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
      responsive: [
        {
          breakpoint: 2200, 
          settings: {
            slidesToShow: 8,
            slidesToScroll: 8,
            speed: 3000,
            cssEase: 'linear'
          }
        },
        {
          breakpoint: 1600, 
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            speed: 3000,
            cssEase: 'linear'
          }
        },
        {
          breakpoint: 766, 
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 480, 
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
    
    $('.slide').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
      responsive: [
          {
              breakpoint: 1800,  
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  speed: 3000,
                  cssEase: 'linear'
              }
          },
          {
              breakpoint: 1600,  
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  speed: 3000,
                  cssEase: 'linear'
              }
          },
          {
              breakpoint: 766,  
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 480,  
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });  $('.slides').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    responsive: [
      {
        breakpoint: 1800, // Extra Large screen
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          speed: 3000,
          cssEase: 'linear'
        }
      },
      {
        breakpoint: 1600, // Large screen
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          speed: 3000,
          cssEase: 'linear'
        }
      },
      {
        breakpoint: 766, // Medium screen
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480, // Small screen
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  });