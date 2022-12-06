$(function () {
  $(".header__btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });
  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });
  $(".header__btn-menu").on("click", function () {
    $(".menu").toggleClass("menu--open");
  });
  if ($(window).width() < 651) {
    $(".works-path__item--measurements").appendTo($(".works-path__items-box"));
  }
  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });
  $(".contact-slider").slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        },
      },
    ],
  });
  $(".article-slider__box").slick({
    arrows: true,
    prevArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.svg"></button>',
    nextArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slide-right.svg"></button>',
    autoplay: true,
  });

  var mixer = mixitup(".gallety__inner", {
    load: {
      filter: ".living",
    },
  });
});
