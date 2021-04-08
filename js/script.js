$(document).ready(function(){
    $('.top_icon a[href^="#"]').bind('click.smoothscroll',function (e) {
        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate( {
            'scrollTop': $target.offset().top-0 }, 500, 'swing', function () {
            //window.location.hash = target;
        });
        e.preventDefault();
    });
    
    
    $('.mobile_icon').on('click',function(){
        $(this).next().slideToggle('fast');
        $(this).toggleClass('active');        
    });
    
   
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop()>15){
            jQuery(".header-sticky").addClass("hey");
        }
        else {
            jQuery(".header-sticky").removeClass("hey");
        }
    });


      $('#nav').onePageNav();
    
    
    /*** owl car***/
    $('#owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        items:4,    
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    
    $('#banner_slider').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        items:1,
    });
    
    
    
    $('.mobile_filter').click(function() {
        $('.left_bar').toggleClass('open');
        $(this).toggleClass('active');
    });
    $('#tabs a').click(function() {
        $('.left_bar').removeClass('open');
        $('.mobile_filter').removeClass('active');
    });

   
    /*** owl car***/
  
    
    // popup script
    
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });
    
    $('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank"></a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});
    
    
    //Tabs
    $(document).ready(function(){
        $('#tabs ul li a').tabs();
    });
    
    
 });


// Tabs
$.fn.tabs = function() {
	var selector = this;
	
	this.each(function() {
		var obj = $(this); 
		
		$(obj.attr('href')).hide();
		
		$(obj).click(function() {
			$(selector).parent().removeClass('active');
			
			$(selector).each(function(i, element) {
				$($(element).attr('href')).hide();
			});
			
			$(this).parent().addClass('active');
			
			$($(this).attr('href')).fadeIn();
			
			return false;
		});
	});

	$(this).show();
	
	$(this).first().click();
};

$(window).load(function () {
    setTimeout(function(){
        $('.loader').fadeOut();
    },1500)
});
