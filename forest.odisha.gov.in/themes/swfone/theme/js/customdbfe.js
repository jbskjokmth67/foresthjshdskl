jQuery(document).ready(function(){
//culture datatable download -artist download
jQuery('.ollc-artist-database-dataTable .views-view-table').DataTable( {
        dom: 'Blfrtip',
        info: false,
                searching: true,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );

	
 jQuery('.block-views-blockollc-department-ho-entry-anuguel-common-layout-block-1 .views-view-table').DataTable( {
        dom: 'Blfrtip',
        info: false,
		searching: true,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
	 jQuery('.block-views-blockollc-department-ho-entry-anuguel-common-layout-block-2 .views-view-table').DataTable( {
        dom: 'Blfrtip',
        info: false,
		searching: true,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
	
	  jQuery('.block-views-blockollc-department-name-of-the-artist-common-structure-block-1 .views-view-table').DataTable( {
         dom: 'Blfrtip',
         info: false,
		 searching: true,
         buttons: [
             'copy', 'csv', 'excel', 'pdf', 'print'
         ]
     } );
	
	jQuery('.block-views-blockartist-database-odisha-folk-artist-koraput-block-1 .views-view-table').DataTable( {
        dom: 'Blfrtip',
        info: false,
		searching: true,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
	
	jQuery('.block-views-blockollc-department-ho-entry-anuguel-common-layout-block-3 .views-view-table').DataTable( {
        dom: 'Blfrtip',
        info: false,
		searching: true,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
	
	
	

	jQuery(window).scroll(function () { 
      if (jQuery(window).scrollTop() >= 147) {
        jQuery('.nice-menu').addClass('fixed-header');
        jQuery('.nice-menu div').addClass('visible-title');
      }
      else {
        jQuery('.nice-menu').removeClass('fixed-header');
        jQuery('.nice-menu div').removeClass('visible-title');
      }
    });
	jQuery('.views-field-nothing a[href$=".pdf"]').attr('title', 'Click Here for More Details');
	

	jQuery('.views-field-nothing a[href$=".pdf"]').attr('target', '_blank');
	jQuery('.field-content ul li a[href$=".pdf"]').attr('target', '_blank');

	jQuery('.heading-container h1').each(function(){ 
	    var textat = jQuery(this).text().replace('&amp;', '&');
        jQuery(this).text(textat);	
	});
	
	jQuery("a[href^='http://']:not([href*='"+location.hostname+"']), [href^='https://']:not([href*='"+location.hostname+"'])")
    .attr("target","_blank")
    .click(function(e) {
        return confirm('This link will take you to an external URL.');
    });
	
	
	 //translate message..
  jQuery('.alink').click(function(){
		return confirm('Do you want to change the language?');
	});
	
  jQuery('table').wrap('<div class="scroll-table1"></div>');
jQuery(".scroll-table1").before( "<div class='guide-text'>Swipe to view <i class='fa fa-long-arrow-right'></i></div>" );
  jQuery(".nice-menu ul:first").addClass('nav');
  jQuery("#block-mainnavigation-3 .content ul:first").addClass('nav');
   // Slider						
// Slider						
jQuery('#flexSlider').flexslider({
  animation: "slide",
  slideshow: true,
  slideshowSpeed: 4000,   // 4 seconds
  animationSpeed: 600,    // smooth transition speed (optional)
  controlNav: false,
  pausePlay: true,
  start: function (slider) {
    jQuery('body').removeClass('loading');
  }
});

      // Slider						
      jQuery('#trending-news').flexslider({
        animation: "slide",
        controlNav: true,
        pausePlay: false,
        controlNav: false,
        start: function (slider) {
          jQuery('body').removeClass('loading');
        }
      });

      // News Slider						
      jQuery('#news-photo-slider').flexslider({
        animation: "slide",
		animationLoop: false,
		itemWidth: 200,
		itemMargin: 20,
        pausePlay: false,
        controlNav: false,
		minItems: 6,
        maxItems: 6
      });


      // Carousel						
      jQuery('#flexCarousel').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 200,
        itemMargin: 5,
        pausePlay: true,
        minItems: 2,
        maxItems: 6,
        slideshow: 1,
        move: 1,
        controlNav: false,
        start: function (slider) {
          jQuery('body').removeClass('loading');
          if (slider.pagingCount === 1) slider.addClass('flex-centered');
        }
      });
  
    jQuery(document).ready(function () {
      jQuery('ul.tabs li').click(function () {
        var tab_id = jQuery(this).attr('data-tab');

        jQuery('ul.tabs li').removeClass('current');
        jQuery('.tab-content').removeClass('current');

        jQuery(this).addClass('current');
        jQuery("#" + tab_id).addClass('current');
      })
    });

    jQuery('#flexCarousel').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 200,
      itemMargin: 5,
      pausePlay: true,
      minItems: 2,
      maxItems: 6,
      slideshow: 1,
      move: 1,
      controlNav: false,
      start: function (slider) {
        jQuery('body').removeClass('loading');
        if (slider.pagingCount === 1) slider.addClass('flex-centered');
      }
    });
    /* jQuery(".nav-container > div").click(function () {
      jQuery(".nav-container ul").slideToggle();
      jQuery(".nav-container ul ul").css("display", "none");
    });
    jQuery(".nav-container ul li").click(function () {
      jQuery(".nav-container ul ul").slideUp();
      jQuery(this).find('.nav-container ul').slideToggle();
    }); */
    jQuery(window).resize(function () {
      if (jQuery(window).width() > 768) {
        jQuery(".nav-container ul").removeAttr('style');
      }
    });
	
	
	
	/* jQuery("a[href^='http://']:not([href*='"+location.hostname+"']), [href^='https://']:not([href*='"+location.hostname+"'])")
    .attr("target","_blank")
    .click(function(e) {
        return confirm('You are being redirected to an external website. Please note that This website cannot be held responsible for external websites content & privacy policies.');
    }); */
	
	//Flash News
	jQuery(function(){
		var timer = !1;
		_Ticker = jQuery("#unee-news").newsTicker();
		_Ticker.on("mouseenter",function(){
			var __self = this;
			timer = setTimeout(function(){
				__self.pauseTicker();
			},1);
		});
		_Ticker.on("mouseleave",function(){
			clearTimeout(timer);
			if(!timer) return !1;
			this.startTicker();
		});
	});
});

(function ($) {
  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) { 

	  
     	  
    	jQuery('.more-link a').attr('title','View All'); 
		
		
			jQuery('#views-exposed-form-agriculture-home-tabs-list-data-page-11 .shs-container').change(function () {

	jQuery('.shs-widget-container:nth-child(1)').after('<span class="shs-labelsc">' + Drupal.t('Scheme') + '</span>');
	
	
	  if(jQuery('.shs-widget-container:nth-child(1) .form-select').length){	   
		  if(jQuery('.shs-widget-container:nth-child(1) .form-select').val() =='All' ){
			  jQuery('.shs-labelsc').css('display','none');
		  }
		  else{
			  jQuery('.shs-labelsc').css('display','block');
			  
			  
		  }
		  
		  
	  } 
	  
});


 if(jQuery('.shs-widget-container:nth-child(2)').length){	
jQuery('.shs-widget-container:nth-child(1)').after('<span class="shs-labelsc">' + Drupal.t('Scheme') + '</span>'); 
		  if(jQuery('.shs-widget-container:nth-child(0) .form-select').val() =='All'  || jQuery('.shs-widget-container:nth-child(1) .form-select').val().length == 0 ){
			  jQuery('.shs-labelsc').css('display','none');
		  }
		  else{
			  jQuery('.shs-labelsc').css('display','block!important');
			  
			  
		  }

 }
	  
	 	  jQuery('#views-exposed-form-agriculture-home-tabs-list-data-page-11 .js-form-submit').click(function () {
		  
		  setTimeout(function(){   if(jQuery('.shs-widget-container:nth-child(1) .form-select').length){		  
		  if(jQuery('.shs-widget-container:nth-child(1) .form-select').val() =='All'  || jQuery('.shs-widget-container:nth-child(1) .form-select').val().length == 0 ){
			  jQuery('.shs-labelsc').css('display','none');
		  }
		  else{
			  jQuery('.shs-labelsc').css('display','block!important');
			  
			  
		  }
		  
		  
	  }; 
  
	  }, 1800);
	  
	  });
	  
	  
	  
	  
	  
	 		jQuery('#views-exposed-form-agriculture-home-tabs-list-data-page-12 .shs-container').change(function () {

	jQuery('.shs-widget-container:nth-child(1)').after('<span class="shs-labelsc1">' + Drupal.t('Scheme') + '</span>');
	
	
	  if(jQuery('.shs-widget-container:nth-child(1) .form-select').length){	   
		  if(jQuery('.shs-widget-container:nth-child(1) .form-select').val() =='All' ){
			  jQuery('.shs-labelsc1').css('display','none');
		  }
		  else{
			  jQuery('.shs-labelsc1').css('display','block');
			  
			  
		  }
		  
		  
	  } 
	  
});


 if(jQuery('.shs-widget-container:nth-child(2)').length){	
jQuery('.shs-widget-container:nth-child(1)').after('<span class="shs-labelsc1">' + Drupal.t('Scheme') + '</span>'); 
		  if(jQuery('.shs-widget-container:nth-child(0) .form-select').val() =='All'  || jQuery('.shs-widget-container:nth-child(1) .form-select').val().length == 0 ){
			  jQuery('.shs-labelsc1').css('display','none');
		  }
		  else{
			  jQuery('.shs-labelsc1').css('display','block!important');
			  
			  
		  }

 }
	  
	 	  jQuery('#views-exposed-form-agriculture-home-tabs-list-data-page-12 .js-form-submit').click(function () {
		  
		  setTimeout(function(){   if(jQuery('.shs-widget-container:nth-child(1) .form-select').length){		  
		  if(jQuery('.shs-widget-container:nth-child(1) .form-select').val() =='All'  || jQuery('.shs-widget-container:nth-child(1) .form-select').val().length == 0 ){
			  jQuery('.shs-labelsc1').css('display','none');
		  }
		  else{
			  jQuery('.shs-labelsc1').css('display','block!important');
			  
			  
		  }
		  
		  
	  }; 
  
	  }, 1800);
	  
	  }); 
	  
	  
	  
	   		jQuery('#views-exposed-form-agriculture-home-tabs-list-data-page-13 .shs-container').change(function () {

	jQuery('.shs-widget-container:nth-child(1)').after('<span class="shs-labelsc2">' + Drupal.t('Scheme') + '</span>');
	
	
	  if(jQuery('.shs-widget-container:nth-child(1) .form-select').length){	   
		  if(jQuery('.shs-widget-container:nth-child(1) .form-select').val() =='All' ){
			  jQuery('.shs-labelsc2').css('display','none');
		  }
		  else{
			  jQuery('.shs-labelsc2').css('display','block');
			  
			  
		  }
		  
		  
	  } 
	  
});


 if(jQuery('.shs-widget-container:nth-child(2)').length){	
jQuery('.shs-widget-container:nth-child(1)').after('<span class="shs-labelsc2">' + Drupal.t('Scheme') + '</span>'); 
		  if(jQuery('.shs-widget-container:nth-child(0) .form-select').val() =='All'  || jQuery('.shs-widget-container:nth-child(1) .form-select').val().length == 0 ){
			  jQuery('.shs-labelsc2').css('display','none');
		  }
		  else{
			  jQuery('.shs-labelsc2').css('display','block!important');
			  
			  
		  }

 }
	  
	 	  jQuery('#views-exposed-form-agriculture-home-tabs-list-data-page-13 .js-form-submit').click(function () {
		  
		  setTimeout(function(){   if(jQuery('.shs-widget-container:nth-child(1) .form-select').length){		  
		  if(jQuery('.shs-widget-container:nth-child(1) .form-select').val() =='All'  || jQuery('.shs-widget-container:nth-child(1) .form-select').val().length == 0 ){
			  jQuery('.shs-labelsc2').css('display','none');
		  }
		  else{
			  jQuery('.shs-labelsc2').css('display','block!important');
			  
			  
		  }
		  
		  
	  }; 
  
	  }, 1800);
	  
	  }); 
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  

    }
  };
}(jQuery));


function checkNumeric(keycode){
		if((keycode >= 48  && keycode <= 57) || (keycode >= 96  && keycode <= 105) || keycode == 8 || keycode == 13 || keycode == 46 ||  keycode == 37 || keycode == 39 || keycode==9 ){			
			return true;
		}else{			
			return false;
		}
	}
	
	function onlyAlphabets(keycode){	
		if((keycode >= 65  && keycode <= 90) || keycode == 8 || keycode == 13 || keycode == 46 ||  keycode == 37 || keycode == 39 || keycode == 9 || keycode==32){			
			return true;
		}else{ 
			return false;
		}
	}
	function checkAlphaNumeric(keycode){
		if((keycode >= 65  && keycode <= 90) || (keycode >= 48  && keycode <= 57) || (keycode >= 96  && keycode <= 105) || keycode == 8 || keycode == 13 || keycode == 46 ||  keycode == 37 || keycode == 39 || keycode==9 || keycode == 32){			
			return true;
		}else{			
			return false;
		}
	}
	
	
	jQuery(document).ready(function(){
	
	/* validation for receipt register form */

jQuery('#search-block-form').on('keydown','#edit-keys',function(e){
		keycode=e.keyCode;
		if(e.shiftKey && (e.which>=48 && e.which<=57) ){//for SPECIAL CHARACTER COMES WITH SHIFT	
			return false;
		}
		return onlyAlphabets(keycode);	
	});
	
	
	
	
	
	});
	
	function checkNumeric(keycode){
		if((keycode >= 48  && keycode <= 57) || (keycode >= 96  && keycode <= 105) || keycode == 8 || keycode == 13 || keycode == 46 ||  keycode == 37 || keycode == 39 || keycode==9 ){			
			return true;
		}else{			
			return false;
		}
	}
	
	function onlyAlphabets(keycode){	
		if((keycode >= 65  && keycode <= 90) || keycode == 8 || keycode == 13 || keycode == 46 ||  keycode == 37 || keycode == 39 || keycode == 9 || keycode==32){			
			return true;
		}else{ 
			return false;
		}
	}
	function checkAlphaNumeric(keycode){
		if((keycode >= 65  && keycode <= 90) || (keycode >= 48  && keycode <= 57) || (keycode >= 96  && keycode <= 105) || keycode == 8 || keycode == 13 || keycode == 46 ||  keycode == 37 || keycode == 39 || keycode==9 || keycode == 32){			
			return true;
		}else{			
			return false;
		}
	}
	
	
	jQuery(document).ready(function(){
		
		jQuery('#edit-name, #edit-subject, #edit-message, #edit-email').bind("cut copy paste",function(e) {
      e.preventDefault();
	});
	
	/* validation for receipt register form */

jQuery('#webform-submission-contact-add-form').on('keydown','#edit-name',function(e){
		keycode=e.keyCode;
		if(e.shiftKey && (e.which>=48 && e.which<=57) ){//for SPECIAL CHARACTER COMES WITH SHIFT	
			return false;
		}
		return onlyAlphabets(keycode);	
	});
	
	
	jQuery('#webform-submission-contact-add-form').on('keydown','#edit-subject',function(e){
		keycode=e.keyCode;
		if(e.shiftKey && (e.which>=48 && e.which<=57) ){//for SPECIAL CHARACTER COMES WITH SHIFT	
			return false;
		}
		return onlyAlphabets(keycode);	
	});
	
	jQuery('#webform-submission-contact-add-form').on('keydown','#edit-message',function(e){
		keycode=e.keyCode;
		if(e.shiftKey && (e.which>=48 && e.which<=57) ){//for SPECIAL CHARACTER COMES WITH SHIFT	
			return false;
		}
		return checkAlphaNumeric(keycode);	
	});
	
	
	});
	
	
	
jQuery(window).load(function(){
	// alert(8);
	  jQuery('#edit-name').attr('maxlength','30');

	  
});



