$(".sale-slider").slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.sale-slider__nav .prev'),
    nextArrow: $('.sale-slider__nav .next'),
});
$(".partner-slider").slick({
    rows: 2,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: $('.partner-slider .prev'),
    nextArrow: $('.partner-slider .next'),
});
//
//
// $('.header-btn').on('click', function (e) {
//     var $this = $(this);
//     $this.toggleClass('active');
//     $('.header').toggleClass('active');
//     $('body').toggleClass('scroll');
// });
// if ($(window).width() < 992) {
//     $('.header-bottom li').on('click', function (e) {
//         var $this = $(this);
//         $this.toggleClass('active').find('.sub-nav').slideToggle();
//     });
// }else{
//     $('.has-sub').on( "mouseenter",  function() {
//         var $this = $(this);
//         $('.sub-nav').removeClass('active');
//         $this.addClass('active');
//         $this.find('.sub-nav').addClass('active');
//     })
//     .on( "mouseleave", function() {
//         $('.has-sub').removeClass('active');
//     });
//     $('.header-bottom').on( "mouseleave", function() {
//
//         $('.sub-nav').removeClass('active')
//     });
// }
//
//
//
// $('.numbers-item__number span').each(function (e) {
//     var $this = $(this);
//     var $thisPersent = $this.parent().data('progress');
//     $this.css('background', ' conic-gradient( rgba(0, 159, 239, 1) '+$thisPersent+'%, rgba(0, 159, 239, .06) '+$thisPersent+'%)')
// });
// $('.price-table__btn').on('click', function (e) {
//     e.preventDefault();
//     var $this = $(this);
//     $this.find('span').toggleClass('hidden');
//     $this.prev().toggleClass('active');
// });
// $('.faq-item__title').on('click', function (e) {
//     e.preventDefault();
//     var $this = $(this);
//     $this.next().slideToggle().parents('.faq-item').toggleClass('active');
//     return false;
// });
//
// function popupOpen() {
//     var $popupButton = $('.btn-popup');
//     $popupButton.on('click', function (e) {
//         var $this = $(this);
//         var popupButtonData = $this.data('popup');
//         $('.popup').removeClass('active');
//         $('div[data-popup = '+popupButtonData+']').addClass('active');
//         // $('body').addClass('scroll');
//     });
// }
// popupOpen();
// $('.popup-close').on('click', function (e) {
//     var $this = $(this);
//     $this.parent().parent().removeClass('active');
//     $('.popup-overlay').removeClass('active');
//     // $('body').removeClass('scroll');
// });
// $('.popup-overlay').on('click', function (e) {
//     var $this = $(this);
//     $this.removeClass('active');
//     $('.popup').removeClass('active');
//     // $('body').removeClass('scroll');
// });
// $('.emailForm').on('click', function (e) {
//
// });
