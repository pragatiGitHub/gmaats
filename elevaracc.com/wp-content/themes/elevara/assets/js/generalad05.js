/*---------------------------------------------------------------------*/
;(function($){

  /*================= On Document Load Start =================*/	
  $(document).ready( function(){
   
    // Menu Ready
    removeAttr();

    /*Home Page Banner Slider */
    if ($("#slider").length){	
     $('#slider').owlCarousel({
       loop:true,
       margin:0,
       nav:true,
       items:1,
     });
     $("#slider .owl-item").each(function () {
      var img_src = $(this).children(".item").children("img").attr('src');
      $(this).children(".item").css("background-image", 'url(' + img_src + ')');
      $(this).children(".item").children("img").hide();
    });	  
   }

  // $("#innerBanner").each(function () {
  //  var img_src = $(this).children("img").attr('src');
  //  $(this).("background-image", 'url(" + img_src + ")');
  //  $(this).children("img").hide();
  // });
  if( $("#innerBanner").length) {
    var img_src = $(".pageBanner img").attr('src');
    $(".pageBanner").css("background-image", 'url(' + img_src + ')');
    $(".pageBanner img").hide();

  }    

  $("#playBtn").click(function(){
    $('#myVideo').get(0).play(); 
    $(this).hide();
    $("#pauseBtn").show();
  });

  $("#pauseBtn").click(function(){
   $('#myVideo').get(0).pause(); 
   $(this).hide();
   $("#playBtn").show();
 });

 $('#test').owlCarousel({
  loop:true,
  items:1,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

  if ($("#testimonoalSlider").length){
    
   $('#testimonoalSlider').owlCarousel({
    items: 3,
    loop: true,
    margin: 0,
    dots:true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    responsive:{
      0:{
        items:1,
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
      
    }
  })
 }

 
 /*carousel - Logo*/    
 if ($("#logoSlider").length){
  
   
   $('#logoSlider').owlCarousel({
    items: 6,
    loop: true,
    margin: 20,
    dots:false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: false,
    responsive:{
      0:{
        items:1,
      },
      600:{
        items:3
      },
      1000:{
        items:5
      },
      1200:{
        items:6
      }
      
    }
  })
 }

// Remove Empty P Tag
$('p').each(function() {
  var $this = $(this);
  if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
  $this.remove();
});

//  Popups 
if( $(".popup-with-form, .popupBtn").length){
	$('.popup-with-form a, .popupBtn').magnificPopup({
    type: 'inline',
    preloader: false,
  });
}

// Get starts popups
$(".popBtn").click(function () {
  $(".getintouch").addClass("active");
	//$(".wpcf7-form").trigger('reset');
 // $("body").addClass('body-fixed');
});
$(".search-popup-main .menuClose").click(function () {
  $(".getintouch").removeClass("active");
	wpcf7.clearResponse('.wpcf7-form');
  //$("body").removeClass('body-fixed');
});

// Em Request A Quote popups
$(".RQBtn").click(function () {
  $(".rquote").addClass("active");
  //$("body").addClass('body-fixed');
});
$(".RQpopup .menuClose").click(function () {
  $(".rquote").removeClass("active");wpcf7.clearResponse('.wpcf7-form');
  //$("body").removeClass('body-fixed');
});



/*For BacktoTop Back to Top function*/

if( $("#backtotop").length){
  $(window).scroll(function(){
   if ($(window).scrollTop()>120){
     $('#backtotop').fadeIn('250').css('display','block');}
     else {
       $('#backtotop').fadeOut('250');}
     });
  $('#backtotop').click(function(){
   $('html, body').animate({scrollTop:0}, '200');
   return false;
 });
};	  

if( $(".counter_number").length){
 $('.counter_number').counterUp({
  delay: 10,
  time: 1000
});
}	

});

  /*================= On Document Load End =================*/

  $(window).scroll(function() {

   var sticky = $('.header'),
   scroll = $(window).scrollTop();

   if (scroll >= 10) sticky.addClass('fixed');
   else sticky.removeClass('fixed');

 });

  $(window).resize(function(){
    removeAttr();
  });

  function removeAttr() {
  if ($(window).width() < 768) {
      
    } else{  
      $(".menu-modal").removeClass("active");
      $(".menu-modal").removeClass("show-modal");
    }
  }

})(jQuery);


