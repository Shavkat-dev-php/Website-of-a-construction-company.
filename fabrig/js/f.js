$(document).ready(function(){  

  // compensate scrollbar
  function getScrollbarWidth() {
    const $outer = $('<div>').css({
      visibility: 'hidden',
      width: '100px',
      'ms-overflow-style': 'scrollbar' // для IE и Edge
    }).appendTo('body');  
    const widthNoScroll = $outer.width();
    $outer.css('overflow', 'scroll');  
    const $inner = $('<div>').css('width', '100%').appendTo($outer);
    const widthWithScroll = $inner.width();  
    $outer.remove();  
    return widthNoScroll - widthWithScroll;
  }    
  const scrollbarWidth = getScrollbarWidth();  

  $('.nav-ico').click(function (e) {
    e.preventDefault(e);    
    if ($('body').hasClass('js-open')) {
      $('body').removeClass('js-open'); 
      $('body').css('padding-right', 0)
    } else {
      $('body').addClass('js-open'); 
      $('body').css('padding-right', scrollbarWidth)
    }        
  });
  $('.backdrop').click(function (e) {
    e.preventDefault(e);
    $('body').removeClass('js-open');
    $('body').css('padding-right', 0)
  });


  var swiper = new Swiper(`.home-slider`, {
    slidesPerView: 1,  
		spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-home-next",
      prevEl: ".swiper-home-prev",
    },
    pagination: {
      el: ".swiper-home-pagination",      
    },    
  });

  var swiper = new Swiper(`.brands-slider`, {
    slidesPerView: 4,  
		spaceBetween: 14,    
    scrollbar: {
      el: ".swiper-brands-scrollbar",      
    },   
    breakpoints: {
      578: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 9,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 10,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 15,
        spaceBetween: 24,
      }
    }, 
  });

  var swiper = new Swiper(`.show-room-slider`, {
    slidesPerView: 1,  
		spaceBetween: 4,    
    scrollbar: {
      el: ".swiper-show-room-scrollbar",      
    },    
    navigation: {
      nextEl: ".show-room-next",
      prevEl: ".show-room-prev",
    },
    breakpoints: {      
      768: {        
        spaceBetween: 15
      },      
    }, 
  });

  var swiper = new Swiper(`.review-slider`, {
    slidesPerView: 1,  
		spaceBetween: 14,    
    scrollbar: {
      el: ".swiper-review-scrollbar",      
    },    
    navigation: {
      nextEl: ".review-next",
      prevEl: ".review-prev",
    },
    breakpoints: {
      360: {
        slidesPerView: 1.5
      },
      666: {
        slidesPerView: 2
      },
      768: {        
        slidesPerView: 2.5
      },
      1250: {
        slidesPerView: 4
      },
    }, 
  });

  var swiper = new Swiper(`.room-slider`, {
    slidesPerView: 1,  
		spaceBetween: 14,    
    scrollbar: {
      el: ".swiper-room-scrollbar",      
    },    
    navigation: {
      nextEl: ".room-next",
      prevEl: ".room-prev",
    },
    breakpoints: {
      666: {
        slidesPerView: 2
      },
      480: {
        slidesPerView: 2.5
      },
      768: {        
        slidesPerView: 3
      },
      958: {
        slidesPerView: 3.5
      },
    }, 
  });

  var swiper = new Swiper(`.portfolio-slider`, {
    slidesPerView: 1,  
    autoHeight: true, 
		spaceBetween: 14,         
    breakpoints: {
      578: {
        slidesPerView: 1,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 14,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 14,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 14
      }
    }, 
  });

  var swiper = new Swiper(`.catalog-img-slider`, {
    slidesPerView: 1,  
		spaceBetween: 15,    
    scrollbar: {
      el: ".swiper-catalog-img-scrollbar",      
    },        
  });  

  $('.search-ico').click(function (e) {
    e.preventDefault(e);
    $('body').toggleClass('search-open')
  });
  $('.backdrop').click(function (e) {
    e.preventDefault(e);
    $('body').removeClass('search-open')
  });

  $('.head-ico.cart-ico').click(function (e) {
    e.preventDefault(e);
    if ($('body').hasClass('js-open')) {
      $('body').removeClass('cart-open'); 
      $('body').css('padding-right', 0)
    } else {
      $('body').addClass('cart-open'); 
      $('body').css('padding-right', scrollbarWidth)
    }            
  });
  $('.backdrop, .cart .close').click(function (e) {
    e.preventDefault(e);
    $('body').removeClass('cart-open');
  });

  $('.mm-list > li').each(function(){
    if ($(this).find('ul').length != 0) {
      $(this).addClass('has-menu');
    }
  });
  $('.has-menu > a').click(function (e) {
    e.preventDefault(e);
    $(this).parent('.has-menu').toggleClass('open')
  });

  $('.filter-search-btn').click(function (e) {
    e.stopPropagation();    
    $(this).parents('.filter-line').toggleClass('fsearch-open')
  });
  $('.filter-drop-inner').click(function(e){
    e.stopPropagation();    
  })
  $('html').click(function(e){
    $('.filter-line').removeClass('fsearch-open');
  });

  $('.sort-btn').click(function (e) {
    e.stopPropagation();    
    $(this).parent('.sort').toggleClass('open-sort')
  });
  $('.sort-drop').click(function(e){
    e.stopPropagation();    
  })
  $('html').click(function(e){
    $('.sort').removeClass('open-sort');
  })

  $('.filter-btn').click(function (e) {
    e.preventDefault(e);
    $(this).parent('.filter').toggleClass('open-filter')
  });

  $('.descr-btn').click(function (e) {
    e.preventDefault(e);
    $(this).parent('.descr-drop').toggleClass('open')
  });

  var swiper = new Swiper(".product-thumbs", {
    spaceBetween: 10,
    slidesPerView: 3, 
    navigation: {
      nextEl: ".swiper-product-next",
      prevEl: ".swiper-product-prev",
    },         
    breakpoints: {
      578: {
        slidesPerView: 7,  
      },
      768: {
        slidesPerView: 12,  
      },
      992: {
        slidesPerView: 7,  
      }
    },
  });
  var swiper2 = new Swiper(".product-slider", {
    spaceBetween: 10,      
    thumbs: {
      swiper: swiper,
    },
  });

  $("input[type='tel']").mask("8(999) 999-99-99");
  $('.form-time').mask("99:99");
  $('.form-date').mask("99-99-9999");

  $()

  $('#element').click(function() {
    if($('#radio_button').is(':checked')) { alert("it's checked"); }
 });

 $('.radio-input').change(function() {  
  $('.form-box > div').removeAttr('class');    
  $(this).parents('.form-box > div').addClass('selected-' + $(this).val());
});

});
