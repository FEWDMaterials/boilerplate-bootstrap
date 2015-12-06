/* CURRENTLY IN: javascript/main.js */

$('.js-slick').slick({
  arrows: false
});

$('.js-prev').on('click', slickPrev );
$('.js-next').on('click', slickNext );

function slickPrev() {
  $('.js-slick').slick( 'slickPrev' );
}

function slickNext() {
  $('.js-slick').slick( 'slicklickNext' );
}

$('.js-page-1').on('click', slickGoTo);
$('.js-page-2').on('click', slickGoTo);
$('.js-page-3').on('click', slickGoTo);

function slickGoTo() {
  var me = $( this );

  var imageSlideNumber = me.attr('data-id');

  $('.js-slick').slick('slickGoTo', imageSlideNumber);

  $('.page-active').removeClass('page-active');
  me.addClass('page-active');
}
