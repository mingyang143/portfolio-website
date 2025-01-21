(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

  // Know More Button Handler
  $('#know-more-btn').on('click', function() {
    const $button = $(this);
    const $content = $('#additional-content');
    
    if ($content.is(':hidden')) {
      $content.slideDown('slow');
      $button.addClass('active');
      $button.html('<span>show less</span><i class="fa fa-chevron-down"></i>');
    } else {
      $content.slideUp('slow');
      $button.removeClass('active');
      $button.html('<span>read more</span><i class="fa fa-chevron-down"></i>');
    }
  });

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

  // Photo preview functionality
  document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.travel-photo');
    const overlay = document.querySelector('.photo-overlay');
    
    // Create close button
    const closeButton = document.createElement('div');
    closeButton.className = 'preview-close';
    closeButton.innerHTML = '×';
    document.body.appendChild(closeButton);
    closeButton.style.display = 'none';

    photos.forEach(photo => {
      photo.addEventListener('click', function() {
        const preview = this.querySelector('.photo-preview');
        preview.classList.add('active');
        overlay.classList.add('active');
        closeButton.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      });
    });

    // Close preview on overlay or close button click
    function closePreview() {
      const activePreview = document.querySelector('.photo-preview.active');
      if (activePreview) {
        activePreview.classList.remove('active');
        overlay.classList.remove('active');
        closeButton.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
      }
    }

    overlay.addEventListener('click', closePreview);
    closeButton.addEventListener('click', closePreview);

    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closePreview();
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');
    const modal = document.getElementById('modal');

    if (openModalBtn && closeModalBtn && modal) {
      openModalBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      });

      closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
      });

      // Close modal when clicking outside
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          modal.style.display = 'none';
          document.body.style.overflow = '';
        }
      });

      // Close modal on escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
          modal.style.display = 'none';
          document.body.style.overflow = '';
        }
      });
    }
  });

})(jQuery);
