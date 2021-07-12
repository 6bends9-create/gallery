
lightbox.option({
	'wrapAround': true,
	'albumLabel': ' %1 / total %2 '
  })


  function fadeAnime(){
  // flipLeft
  $('.gallery li').each(function(){
	  var elemPos = $(this).offset().top;
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll >= elemPos - windowHeight){
		  $(this).addClass('flipLeft');
	  }else{
		  $(this).removeClass('flipLeft');
	  }
  });
  }

	$(window).scroll(function (){
	  fadeAnime();
	});

	$(window).on('load', function(){
	  fadeAnime();
	});