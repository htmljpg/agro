$(document).ready(function(){
    (function() {
        'use strict';
  
        // breakpoint where swiper will be destroyed
        // and switches to a dual-column layout
        const breakpoint = window.matchMedia( '(max-width: 991px)' );
  
        // keep track of swiper instances to destroy later
        let mySwiper;
  
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
  
        const breakpointChecker = function() {
  
          // if larger viewport and multi-row layout needed
          if ( breakpoint.matches === true ) {
  
            // clean up old instances and inline styles when available
            if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
  
            // or/and do nothing
            return;
  
            // else if a small viewport and single column layout needed
            } else if ( breakpoint.matches === false ) {
  
              // fire small viewport version of swiper
              return enableSwiper();
  
            }
  
        };
  
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
  
        const enableSwiper = function() {
  
          mySwiper = new Swiper('.swiper-container--brands', {
            slidesPerView: 1,
            simulateTouch: false,
            watchOverflow: true,
            watchSlidesVisibility: true,
            cssMode: false,
            loop: false,
            navigation: {
            nextEl: '#nextBrands',
            prevEl: '#prevBrands',
        },
            pagination: {
            el: '#discBrands',
            clickable: true,
        },
            mousewheel: {
            forceToAxis: true,
        },
            touchReleaseOnEdges: true,
            keyboard: false,
        });
  
        };
  
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
  
        // keep an eye on viewport size changes
        breakpoint.addListener(breakpointChecker);
  
        // kickstart
        breakpointChecker();

    })(); /* IIFE end */

    $(".show-more-btn").click(function(e){
        $(".swiper-slide--hidden:hidden").fadeIn();
        $(this).fadeOut();
    })
        
    // menu responsive
    $('[data-target]').on('click', function(){
        var target = $(this).data("target");
        if($(this).hasClass('target-absolute')) {
            $(this).toggleClass('active');
            $(target).toggleClass('active');
            $(target).siblings('.overlay').addClass('active');
            if($(this).hasClass('overlay')) {
                $(this).removeClass('active');
                $('.header__icons-icon--hamburger').removeClass('active');
            }
        }
        else if($(this).hasClass('css-toggle')) {
            $(this).toggleClass('active').siblings(target).toggleClass('active');
        }
        else if($(this).hasClass('faq__button')) {
            $(this).toggleClass('active').siblings(target).slideToggle().toggleClass('active');
            $(this).parent('.faq__block').toggleClass('active');
        }
        else {
            $(this).toggleClass('active').siblings(target).slideToggle();
        }
        
    });

    $(".sort__button").click(function(){
        $('.cards__item').removeClass('cards__item--list').addClass($(this).data('view'));
    })
    $(".sort__button").click(function(){
        $(this).addClass('selected').parent('.sort__button-block').siblings('.sort__button-block').find('.sort__button').removeClass('selected');

    });

    // carousel
    swiper = new Swiper('.swiper-container--intro', {
        slidesPerView: 1,
        simulateTouch: false,
        spaceBetween: 0,
        watchSlidesVisibility: true,
        effect: 'fade',
        loop: true,
        pagination: {
            el: '#discIntro',
            clickable: true,
        },
        navigation: {
            nextEl: '',
            prevEl: '',
        },
        mousewheel: {
            forceToAxis: true,
        },
        on: {
            slideChangeTransitionStart: function () {
                $('.intro__picture').hide(0);
                $('.intro__picture').removeClass('aos-init').removeClass('aos-animate');
            },
            slideChangeTransitionEnd: function () {
                $('.intro__picture').show(0);
                AOS.init();
            },
        },
        keyboard: false,
    });
    mySwiper = new Swiper('.swiper-container--spares', {
        slidesPerView: 'auto',
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        direction: 'horizontal',
        loop: false,
        navigation: {
        nextEl: '#nextSpares',
        prevEl: '#prevSpares',
    },
        pagination: {
        el: '#discSpares',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
    });
    mySwiper = new Swiper('.swiper-container--spares-inner', {
        slidesPerView: 'auto',
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        direction: 'horizontal',
        loop: false,
        nested: true,
        navigation: {
        nextEl: '',
        prevEl: '',
    },
        pagination: {
        el: '',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
    });
    mySwiper = new Swiper('.swiper-container--news', {
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '#nextNews',
        prevEl: '#prevNews',
    },
        pagination: {
        el: '#discNews',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            0: {
                slidesPerView: 'auto',
            },
            575: {
                slidesPerView: 'auto',
            },
            767: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 2,
            },
            1230: {
                slidesPerView: 3,
            }
        }
    });
    mySwiper = new Swiper('.swiper-container--cards', {
        slidesPerView: 1,
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '#nextCards',
        prevEl: '#prevCards',
    },
        pagination: {
        el: '',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            0: {
                slidesPerView: 'auto',
            },
            992: {
                slidesPerView: 3,
            },
            1230: {
                slidesPerView: 4,
            }
        }
    });
    var galleryTop = new Swiper('.swiper-container--card-image', {
        spaceBetween: 0,
        autoplay: {
            delay: 3000,
        },
          pagination: {
          el: '#discCardImage',
          clickable: true,
      },
        navigation: {
          nextEl: '',
          prevEl: '',
        },
      });

    // AOS animate
    AOS.init();

    // Tabs
    $('.tab__item').hide();
    
    $('.tabs__nav-item').click( function() {
	
	var tabID = $(this).attr('data-tab');

        $(this).addClass('active').siblings().removeClass('active');

        $('#tab-'+tabID).addClass('active').show().siblings().hide().removeClass('active');
    });

    // quantity buttons
    // $('.quantity__button--sub').click(function () {
	// 	var $input = $(this).parents('.quantity').find('input');
	// 	var count = parseInt($input.val()) - 1;
	// 	count = count < 1 ? 1 : count;
	// 	$input.val(count);
	// 	$input.change();
	// 	return false;
	// });
	// $('.quantity__button--add').click(function () {
	// 	var $input = $(this).parents('.quantity').find('input');
	// 	$input.val(parseInt($input.val()) + 1);
	// 	$input.change();
	// 	return false;
    // });

    var stepper = function () {
        var stepperNumber,
            subButton;
        
        return {
          
          allSteppers: $( '.input-stepper' ),
        
          // check to see if the input is at '1'...
          checkStepperNumber: function ( thisStepper ) {
            stepperInput = $( thisStepper ).find( 'input' );
            stepperNumber = stepperInput.val();
            decrementButton = $( thisStepper ).find( 'button.quantity__button--sub' );
      
            if ( stepperNumber === '1' || stepperNumber <= 1 ) {
              // if so, disable the sub button. 
              decrementButton.prop( 'disabled', true );
              stepperInput.val( 1 );
            } else {
              // if number is positive, enable the sub button
              decrementButton.prop( 'disabled', false );
            }
      
          },
      
          init: function () {
            stepper.allSteppers.each( function ( index, element ) {
              var thisStepperInput = $( element ).find( 'input' );
              var thissubButton = $( element ).find( 'button.quantity__button--sub' );
      
              if ( thisStepperInput.val() === '1' || thisStepperInput.val() <= 1 ) {
                thissubButton.prop( 'disabled', true );
                thisStepperInput.val( 1 );
              } else {
                // if number is positive, enable the sub button
                thissubButton.prop( 'disabled', false );
              }
            });
          }
          
        }
      }();
      
      // on button.add click ...
      $( '.input-stepper button.quantity__button--add' ).on( 'click', function ( e ) {
        thisStepper = $( e.target ).closest( '.input-stepper' );
        stepperInput = thisStepper.find( 'input' );
        
        // check the input value
        stepperNumber = stepperInput.val();
        
        // increment the input value
        stepperNumber++;
        stepperInput.val( stepperNumber );
        
        // then check the stepper number
        stepper.checkStepperNumber( thisStepper );
      });
      
      // on button.sub click ...
      $( '.input-stepper button.quantity__button--sub' ).on( 'click', function ( e ) {
        thisStepper = $( e.target ).closest( '.input-stepper' );
        stepperInput = thisStepper.find( 'input' );
        
        // check the input value
        stepperNumber = stepperInput.val();
        
        // decrement the input value
        stepperNumber--;
        stepperInput.val( stepperNumber );
        
        // then check the stepper number
        stepper.checkStepperNumber( thisStepper );
      });
      
      // on input field blur ...
      $( '.input-stepper input' ).on( 'blur', function ( e ) {
        thisStepper = $( e.target ).closest( '.input-stepper' );
        // check the stepper number
        stepper.checkStepperNumber( thisStepper );
      });
      
      // check the stepper number on load
      if ( $( '.input-stepper' ).length ) {
        stepper.init();
       }


    $('.fancybox').fancybox();
});