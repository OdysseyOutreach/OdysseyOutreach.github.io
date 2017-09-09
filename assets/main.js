$('.navbar a').on( 'click', function(){
  var offset = 95;
  $('body').animate( {
    scrollTop: $( $(this).attr('href') ).offset().top - offset + 'px'
  }, 250);
});
