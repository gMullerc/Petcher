$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else{
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function(){scroll(0,0)});

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $(".goAbout").click(function(){scroll(0,610)});
  $(".goService").click(function(){scroll(0,1850)});
  $(".goEducation").click(function(){scroll(0,2300)});
  $(".goWorks").click(function(){scroll(0,3200)});
  $(".goContact").click(function(){scroll(0,4150)});

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
});





