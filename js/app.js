$(document).ready(function() {
  $('.slider').slick({
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  })
  $('.footer__toTop--link').click(function(e) {
    var target = $(this.hash);
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000)
  })
  $('.header__burger').click(function() {
    $('.header__burger, .header__mobile').toggleClass('active')
    $('body').toggleClass('lock')
})
  $('.header__buttons--sign').click(function() {
    $('.popup').addClass('active')    
    $('.sign').addClass('active dark')
  })
  $('.header__sign, .footer__sign').click(function() {
    $('.sign').addClass('active')
    $('.popup').addClass('active')
  })
  $('.footer__registration').click(function() {
    $('.sign').addClass('active')
    $('.registration').addClass('active')
  })
  $('.popup__close, .popup__dark--close').click(function() {
    $('.sign').removeClass('active')
    $('.popup').removeClass('active')
    $('.registration').removeClass('active')
  })
  $('.sign').click(function() {
    $('.sign').removeClass('active')
    $('.popup, .registration').removeClass('active')
  })

  $('.header__lang').click(function() {
    $('.header__lang--hover').toggleClass('active')
  })
  $('.header__server--infoBlock span').click(function() {
    $('.header__server--blockHover').toggleClass('active')
  })
  $('.header__server--infoBlockSecond span').click(function() {
    $('.header__server--blockSecondHover').toggleClass('active')
  })
  $('.stat__btn--nemezida').click(function() {
    $('.stat__btn--horizon').addClass('notActive') && $('.stat__btn--nemezida').addClass('active')
    $('.stat__table--item:nth-child(5), .stat__table--item:nth-child(4)').hide()
  })
  $('.stat__btn--horizon').click(function() {
    $('.stat__btn--horizon').removeClass('notActive') && $('.stat__btn--nemezida').removeClass('active')
    $('.stat__table--item:nth-child(5), .stat__table--item:nth-child(4)').show()
  })
  
  $('.stat__btn--nemezida.dark').click(function() {
    $('.stat__btn--horizon.dark').addClass('notActive') && $('.stat__btn--nemezida.dark').addClass('active')
  })

  $('#dark').click(function(e) {
    $('body').addClass('dark')
    $('.header, .header__logo-d, .header__lang span, .header__nav--link, .header__text p').addClass('dark');
    $('.header__server, .header__server--text p:nth-child(1), .header__server--text p:nth-child(2)').addClass('dark')
    $('.header__server--text button, .header__server--block, .header__server--blockSecond').addClass('dark')
    $('.header__server--block span, .header__server--blockSecond span').addClass('dark')
    $('.info, .info__game--title span, .line__right-d, .line__left-d, .info__game--step').addClass('dark')
    $('.info__game--statBlock, .info__game--statServer span:nth-child(1), .info__game--link a:nth-child(1)').addClass('dark')
    $('.info__download--btn button, .info__download--suppDark, .info__download--suppLight, .info__download--supp p').addClass('dark')
    $('.info__download--guide>p, .info__download--guideList span, .info__download--guideListBlock p, .info__download--guideListBlock a').addClass('dark')
    $('.news__btn button, .stat, .stat__rank--title span, .stat__icon--dark, .stat__icon--light, .stat__btn button').addClass('dark')
    $('.stat__table, .stat__table--title>div span, .stat__table--main, .stat__table span, .stat__table--item, .stat__table--itemFame').addClass('dark')
    $('.stat__table--nav, .table__nav--icon, .arrow, .stat__name span, .market__title span, .slider__item--text p').addClass('dark')
    $('.slider__item, .slider__line--light, .slider__line--dark, .slider__hover--text p, .slider__hover--text p span').addClass('dark')
    $('.slider__hover--btn button, .footer, .footer__themes--l, .footer__market button').addClass('dark')
    $('.footer__themes--dark, .market, .popup, .registration, .sign, .popup__dark--close').addClass('dark')
    $('.form__title span, .form__block--log, .form__block--log.dark::after, .form__block--log.dark::before').addClass('dark')
    $('.form__block input, .form__block--inputPass, .form__block--pass, .form__forgot--infoPass, .slider').addClass('dark')
    $('.footer__themes, .line__left, .line__right, .header__logo-l, .popup__close').hide()
    e.preventDefault()
  })

  $('#light').click(function(e) {
    $('body').removeClass('dark')
    $('.header, .header__logo-d, .header__lang span, .header__nav--link, .header__text p').removeClass('dark');
    $('.header__server, .header__server--text p:nth-child(1), .header__server--text p:nth-child(2)').removeClass('dark')
    $('.header__server--text button, .header__server--block, .header__server--blockSecond').removeClass('dark')
    $('.header__server--block span, .header__server--blockSecond span').removeClass('dark')
    $('.info, .info__game--title span, .line__right-d, .line__left-d, .info__game--step').removeClass('dark')
    $('.info__game--statBlock, .info__game--statServer span:nth-child(1), .info__game--link a:nth-child(1)').removeClass('dark')
    $('.info__download--btn button, .info__download--suppDark, .info__download--suppLight, .info__download--supp p').removeClass('dark')
    $('.info__download--guide>p, .info__download--guideList span, .info__download--guideListBlock p, .info__download--guideListBlock a').removeClass('dark')
    $('.news__btn button, .stat, .stat__rank--title span, .stat__icon--dark, .stat__icon--light, .stat__btn button').removeClass('dark')
    $('.stat__table, .stat__table--title>div span, .stat__table--main, .stat__table span, .stat__table--item, .stat__table--itemFame').removeClass('dark')
    $('.stat__table--nav, .table__nav--icon, .arrow, .stat__name span, .market__title span, .slider__item--text p').removeClass('dark')
    $('.slider__item, .slider__line--light, .slider__line--dark, .slider__hover--text p, .slider__hover--text p span').removeClass('dark')
    $('.slider__hover--btn button, .footer, .footer__themes--l, .footer__market button').removeClass('dark')
    $('.footer__themes--dark, .market, .popup, .registration, .sign, .popup__dark--close').removeClass('dark')
    $('.form__title span, .form__block--log, .form__block--log.dark::after, .form__block--log.dark::before').removeClass('dark')
    $('.form__block input, .form__block--inputPass, .form__block--pass, .form__forgot--infoPass, .slider').removeClass('dark')
    $('.footer__themes, .line__left, .line__right, .header__logo-l, .popup__close').show()
    e.preventDefault()
  })
})