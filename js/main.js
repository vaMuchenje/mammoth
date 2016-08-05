$(document).ready(function(){

// Variables

	var $gallery = $('#gallery'),
		$gallerybond = $('#gallerybond'),
		$gallerywt = $('#gallerywt'),
		$galleryoffice = $('#galleryoffice'),
		$galleryanomaly = $('#galleryanomaly'),
		$galleryw22 = $('#galleryw22'),
		$gallerych = $('#gallerych'),
		$gallerynuts = $('#gallerynuts'),
		$gallerymadison = $('#gallerymadison'),
		$gallerysoho = $('#gallerysoho'),
		$gallerydubai = $('#gallerydubai'),
		$gallerypav = $('#gallerypav'),
		$gallerystore = $('#gallerystore'),
		
		
		
		$thehood = $('#neighborhood'),
		$design = $('#design'),
		$reserve = $('#quote2'),
		$glow = $('#design span.cover'),
		$materials = $('#materials'),
		$re = $('#re'),
		scroll = $('.scroll'),
		$tribeca = $('#tribeca'),
		$craft = $('#craft'),
		$wabi = $('#wabi'),
		$collab = $('#collab'),

		//videoTribeca = $("#video-tribeca"),
	//	videoWabi = $("#video-wabi"),
	//	videoCollab = $("#video-collab"),
	//	videoRe = $("#video-re"),
	//	videoCraft = $("#video-craft"),

		spotTog = $('.spot .toggle'),
		quoteSpan = $('blockquote span'),
		floorSelect = $('.floor-select li'),
		vidPlay = $('.vid, .play'),
		gallery = $('#gallery'),
		plans = $('.floors'),

		sect = $('.wrap > section'),
		sectPanel = $('.wrap > section'),
		fillH = $('.fill');

// Home Video

    $(sect).height(($(window).height()) + 2 );
    $(fillH).height(($(window).height()) + 2 );

    $(window).resize(function() {
        $(sect).height($(window).height() + 2 );
		$(fillH).height($(window).height() + 2 );
    });

//Waypoint Nav

  $(function() {
    var $body = $('body');

    $(sect)
      .waypoint(function(direction) {
        $body.toggleClass(this.id + '-visible', direction === 'down');
      	$(this).addClass('init', direction === 'down');
      	$(this).toggleClass('active', direction === 'down');
        var $links = $('.wayfinding a[href="#' + this.id + '"]');
        $links.toggleClass('active', direction === 'down');
      }, {
        offset: '50%',
        context: '.frame'
      })
      .waypoint(function(direction) {
      	$(this).addClass('init', direction === 'up');
      	$(this).toggleClass('active', direction === 'up');
        var $links = $('.wayfinding a[href="#' + this.id + '"]');
        $links.toggleClass('active', direction === 'up');
        $body.toggleClass(this.id + '-visible', direction === 'up');
      }, {
        offset: '-50%',
        context: '.frame'
      });
  });

  // Sub nav highlighting

  $(function() {
    $(sectPanel)
      .waypoint(function(direction) {
      	$(this).toggleClass('visible', direction === 'down');
      }, {
        offset: '80%',
        context: '.frame'
      })
      .waypoint(function(direction) {
      	$(this).toggleClass('visible', direction === 'up');
      }, {
        offset: function() {
          return -$(this).height() + 100;
        },
        context: '.frame'
      });
  });



	// Vars
	var activeSect = 0,
		crntPanel = 0,
		TotalSects = $('.section').size(),
		frame = $('.frame');

    // IMAGE SLIDING
    // First, NEXT
    function goDown() {
        if (activeSect < TotalSects) {
            var crntPanel = activeSect;
            crntPanel++;
            $(frame).addClass('scrolling').scrollTo('.section:eq('+crntPanel+')', 600, {offset: 0, axis: 'y', easing:'swing', onAfter:function(){
				activeSect = crntPanel;
				$(frame).removeClass('scrolling');
				}
            });
        }
    }

	// Now, PREV
    function goUp() {
        if (activeSect > 0) {
            var crntPanel = activeSect;
            crntPanel--;
            $(frame).addClass('scrolling');
            $(frame).scrollTo('.section:eq('+crntPanel+')', 600, {offset: 0, axis: 'y', easing:'swing', onAfter:function(){
				activeSect = crntPanel;
				$(frame).removeClass('scrolling');
				}
			});
		}
    }

	// Nav Clicks
	    $(".wayfinding a").on('click', function(e){
	    	//Find which image was clicked.
	    	//We add 1, to compensate for index of 0
	        var clickedPanel = $(this).index();
	        clickedPanel = clickedPanel++;
	        $(frame).scrollTo('.section:eq('+clickedPanel+')', 600, {easing:'swing', offset: 0, axis: 'y', onAfter:function(){
	            // Callback
	            activeSect = clickedPanel;
	        	}
	        });
	    e.preventDefault();
	}); // End Image Click function

	//Mousewheel


	$(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
      	event.preventDefault();
	  	var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
	  	if (delta == 0) {
		  	var delta = event.deltaY;
	  	}
		//alert(event.deltaY);
	  	init_scroll(event, delta);
    });

    var lastAnimation;
	var quietPeriod = 500;
	var deltaOfInterest;

    function init_scroll(event, delta) {

        deltaOfInterest = delta;
        var timeNow = new Date().getTime();

        // Cancel scroll if currently animating or within quiet period
        if(timeNow - lastAnimation < quietPeriod + 1000) {
            event.preventDefault();
            return;
        }

        if (deltaOfInterest < 0) {
           goDown();
        } else {
           goUp();
        }
        lastAnimation = timeNow;
    }

	//Key Nav
		$(document.documentElement).keydown(function (e) {
		    var direction = null;
		    var key = e.keyCode? e.keyCode : e.charCode;
		      if (key === 40 ) { //DOWN
		      goDown();
		    } else if (key === 38) { //UP
			  goUp();
		    }
		    if (direction !== null) {
		      goDown();
		    }

		    //Prevent Default
			    if(key >= 38 && key <= 40) {
				 e.preventDefault();
				 return false;
			    }
		  });

//Parallax

	$('.frame').scroll( function() {
		var fromtheTop = $(this).scrollTop();
		var gallPos = $gallery.offset();
		var hoodPos = $thehood.offset();
		var designPos = $design.offset();
		var reservePos = $reserve.offset();
		var materialsPos = $materials.offset();
		var rePos = $re.offset();

			// Calculate distance scrolled

				if (fromtheTop > 0) {

					$(scroll).addClass('min');

					if ($gallery.hasClass('visible')) {
							var newPos = ( ((fromtheTop - gallPos.top) * 0.5) + 0 );
							if ($('html').hasClass('csstransforms3d')) {
							$gallery.css({
								//'transform': 'translate3d(0px, ' + newPos + 'px, 0px)',
								});
							} else {
								$gallery.css({ 'top': '' + newPos + 'px', });
							}
					}

					if ($thehood.hasClass('visible')) {
							var newPos2 = ( ((fromtheTop - hoodPos.top) * 0.2) + 0 );
							if ($('html').hasClass('csstransforms3d')) {
								$thehood.find('.cover').css({
								//'-webkit-transform': 'translate3d(0px, ' + newPos2 + 'px, 0px) scale('+ (((fromtheTop - hoodPos.top) / 10000) + 1.3) +')',
								});
							} else {
								$thehood.find('.cover').css({ 'top': '' + newPos2 + 'px', });
							}
					}

					if ($design.hasClass('visible')) {
							var newPos3 = ( ((fromtheTop - designPos.top) * 0.5) + 0 );
							var newOpac = ( (((fromtheTop - designPos.top) * 0.9) * 0.01 ) - 0.1 );
							if ($('html').hasClass('csstransforms3d')) {
								$design.find('.cover').css({
								//'-webkit-transform': 'translate3d(0px, ' + newPos3 + 'px, 0px)',
								});
								$glow.css({
								'opacity': '' + newOpac + '',
								});
							} else {
								$design.find('.cover').css({ 'top': '' + newPos3 + 'px', });
							}
					}

					if ($reserve.hasClass('visible')) {
							var newPos4 = ( ((fromtheTop - reservePos.top) * 0.5) + 0 );
							if ($('html').hasClass('csstransforms3d')) {
								$reserve.find('.cover').css({
								//'-webkit-transform': 'translate3d(0px, ' + newPos4 + 'px, 0px)',
								});
							} else {
								$reserve.find('.cover').css({ 'top': '' + newPos4 + 'px', });
							}
					}
					/*
					if ($materials.hasClass('visible')) {
							var newPos5 = ( ((fromtheTop - materialsPos.top) * 0.5) + 0 );
							if ($('html').hasClass('csstransforms3d')) {
							$materials.find('.cover').css({
								//'transform': 'translate3d(0px, ' + newPos5 + 'px, 0px)',
								});
							} else {
								$materials.find('.cover').css({ 'top': '' + newPos5 + 'px', });
							}
					}
					*/

					if ($re.hasClass('visible')) {
							var newPos6 = ( ((fromtheTop - rePos.top) * 0.5) + 0 );
							if ($('html').hasClass('csstransforms3d')) {
							$re.find('.cover').css({
								//'transform': 'translate3d(0px, ' + newPos6 + 'px, 0px)',
								});
							} else {
								$re.find('.cover').css({ 'top': '' + newPos6 + 'px', });
							}
					}

					/*
					var triVideo=document.getElementById("video-tribeca");
					if ($tribeca.hasClass('visible') && ($('body').hasClass('tribeca-visible'))) {
						if (!$(triVideo).hasClass('manual-pause')) {
							if (!$(triVideo).parent().hasClass('ended')) {
								triVideo.play();
								$('#tribeca .play').addClass('active');
							}
						}
					} else {
							triVideo.pause();
							$('#tribeca .play').removeClass('active');
					}

					var craftVideo=document.getElementById("video-craft");
					if ($craft.hasClass('visible') && ($('body').hasClass('craft-visible'))) {
						if (!$(craftVideo).hasClass('manual-pause')) {
							if (!$(craftVideo).parent().hasClass('ended')) {
								craftVideo.play();
								$('#craft .play').addClass('active');
							}
						}
					} else {
							craftVideo.pause();
							$('#craft .play').removeClass('active');
					}
					*/
					/*
					var wabiVideo=document.getElementById("video-wabi");
					if ($wabi.hasClass('visible') && ($('body').hasClass('wabi-visible'))) {
						if (!$(wabiVideo).hasClass('manual-pause')) {
							if (!$(wabiVideo).parent().hasClass('ended')) {
								wabiVideo.play();
								$('#wabi .play').addClass('active');
							}
						}
					} else {
							wabiVideo.pause();
							$('#wabi .play').removeClass('active');
					}

					var collabVideo=document.getElementById("video-collab");
					if ($collab.hasClass('visible') && ($('body').hasClass('collab-visible'))) {
						if (!$(collabVideo).hasClass('manual-pause')) {
							if (!$(collabVideo).parent().hasClass('ended')) {
								collabVideo.play();
								$('#collab .play').addClass('active');
							}
						}
					} else {
							collabVideo.pause();
							$('#collab .play').removeClass('active');
					}
					*/

				} else {

					$(scroll).removeClass('min');

				}
	});


	$(spotTog).click(function(e){
		var spotPrnt = $(this).closest('.spot');
		if($(spotPrnt).hasClass('open')) {
			$(spotPrnt).removeClass('open');
		} else {
			$(spotPrnt).addClass('open');
		}
		e.preventDefault();
	});

	$(quoteSpan).each(function() {
		var delay = $(this).data('delay');
	    $(this).css( '-webkit-transition-delay',''+ delay +'s');
	});

	$(window).load(function() {
	  $(gallery).flexslider({
	  	namespace: "g-",
	  	selector: ".slides > .slide",
	  	slideshow: false,
	  	controlsContainer: '#details',
	  	animationSpeed: '700',
	    animation: "slide",
	    before: function(slider){
	    	$('#details').removeClass('wait');
			slider.removeClass('going-left going-right');
			var currSlide = (slider.currentSlide);
			var toSlide = (slider.animatingTo);
			if (currSlide < toSlide) {
				slider.addClass('going-right');
			} else {
				slider.addClass('going-left');
			}
	    },
	  });
	});
	
	$(window).load(function() {
	  $(gallerybond).flexslider({
	  	namespace: "g-",
	  	selector: ".slides > .slide",
	  	slideshow: false,
	  	controlsContainer: '#bond',
	  	animationSpeed: '700',
	    animation: "slide",
	    before: function(slider){
	    	$('#bond').removeClass('wait');
			slider.removeClass('going-left going-right');
			var currSlide = (slider.currentSlide);
			var toSlide = (slider.animatingTo);
			if (currSlide < toSlide) {
				slider.addClass('going-right');
			} else {
				slider.addClass('going-left');
			}
	    },
	  });
	});
	
	$(window).load(function() {
	  $(gallerywt).flexslider({
	  	namespace: "g-",
	  	selector: ".slides > .slide",
	  	slideshow: false,
	  	controlsContainer: '#wt',
	  	animationSpeed: '700',
	    animation: "slide",
	    before: function(slider){
	    	$('#wt').removeClass('wait');
			slider.removeClass('going-left going-right');
			var currSlide = (slider.currentSlide);
			var toSlide = (slider.animatingTo);
			if (currSlide < toSlide) {
				slider.addClass('going-right');
			} else {
				slider.addClass('going-left');
			}
	    },
	  });
	});
	
	$(window).load(function() {
	  $(galleryoffice).flexslider({
	  	namespace: "g-",
	  	selector: ".slides > .slide",
	  	slideshow: false,
	  	controlsContainer: '#office',
	  	animationSpeed: '700',
	    animation: "slide",
	    before: function(slider){
	    	$('#office').removeClass('wait');
			slider.removeClass('going-left going-right');
			var currSlide = (slider.currentSlide);
			var toSlide = (slider.animatingTo);
			if (currSlide < toSlide) {
				slider.addClass('going-right');
			} else {
				slider.addClass('going-left');
			}
	    },
	  });
	});
	
	//anomaly
	
	$(window).load(function() {
	  $(galleryanomaly).flexslider({
	  	namespace: "g-",
	  	selector: ".slides > .slide",
	  	slideshow: false,
	  	controlsContainer: '#anomaly',
	  	animationSpeed: '700',
	    animation: "slide",
	    before: function(slider){
	    	$('#anomaly').removeClass('wait');
			slider.removeClass('going-left going-right');
			var currSlide = (slider.currentSlide);
			var toSlide = (slider.animatingTo);
			if (currSlide < toSlide) {
				slider.addClass('going-right');
			} else {
				slider.addClass('going-left');
			}
	    },
	  });
	});
	
	//w22
	
	$(window).load(function() {
	  $(galleryw22).flexslider({
	  	namespace: "g-",
	  	selector: ".slides > .slide",
	  	slideshow: false,
	  	controlsContainer: '#w22',
	  	animationSpeed: '700',
	    animation: "slide",
	    before: function(slider){
	    	$('#w22').removeClass('wait');
			slider.removeClass('going-left going-right');
			var currSlide = (slider.currentSlide);
			var toSlide = (slider.animatingTo);
			if (currSlide < toSlide) {
				slider.addClass('going-right');
			} else {
				slider.addClass('going-left');
			}
	    },
	  });
	});
	
	//Columbia Heights
	
	$(window).load(function() {
	  $(gallerych).flexslider({
	  	namespace: "g-",
	  	selector: ".slides > .slide",
	  	slideshow: false,
	  	controlsContainer: '#ch',
	  	animationSpeed: '700',
	    animation: "slide",
	    before: function(slider){
	    	$('#ch').removeClass('wait');
			slider.removeClass('going-left going-right');
			var currSlide = (slider.currentSlide);
			var toSlide = (slider.animatingTo);
			if (currSlide < toSlide) {
				slider.addClass('going-right');
			} else {
				slider.addClass('going-left');
			}
	    },
	  });
	});
	
	//nuts
	
	$(window).load(function() {
	  $(gallerynuts).flexslider({
	  	namespace: "g-",
	  	selector: ".slides > .slide",
	  	slideshow: false,
	  	controlsContainer: '#nuts',
	  	animationSpeed: '700',
	    animation: "slide",
	    before: function(slider){
	    	$('#nuts').removeClass('wait');
			slider.removeClass('going-left going-right');
			var currSlide = (slider.currentSlide);
			var toSlide = (slider.animatingTo);
			if (currSlide < toSlide) {
				slider.addClass('going-right');
			} else {
				slider.addClass('going-left');
			}
	    },
	  });
	});
	
	//madison
	
	$(window).load(function() {
	  $(gallerymadison).flexslider({
	  	namespace: "g-",
	  	selector: ".slides > .slide",
	  	slideshow: false,
	  	controlsContainer: '#madison',
	  	animationSpeed: '700',
	    animation: "slide",
	    before: function(slider){
	    	$('#madison').removeClass('wait');
			slider.removeClass('going-left going-right');
			var currSlide = (slider.currentSlide);
			var toSlide = (slider.animatingTo);
			if (currSlide < toSlide) {
				slider.addClass('going-right');
			} else {
				slider.addClass('going-left');
			}
	    },
	  });
	});
	
	//soho
	
	$(window).load(function() {
	  $(gallerysoho).flexslider({
	  	namespace: "g-",
	  	selector: ".slides > .slide",
	  	slideshow: false,
	  	controlsContainer: '#soho',
	  	animationSpeed: '700',
	    animation: "slide",
	    before: function(slider){
	    	$('#soho').removeClass('wait');
			slider.removeClass('going-left going-right');
			var currSlide = (slider.currentSlide);
			var toSlide = (slider.animatingTo);
			if (currSlide < toSlide) {
				slider.addClass('going-right');
			} else {
				slider.addClass('going-left');
			}
	    },
	  });
	});
	
	//dubai
		
	$(window).load(function() {
	  $(gallerydubai).flexslider({
	  	namespace: "g-",
	  	selector: ".slides > .slide",
	  	slideshow: false,
	  	controlsContainer: '#dubai',
	  	animationSpeed: '700',
	    animation: "slide",
	    before: function(slider){
	    	$('#dubai').removeClass('wait');
			slider.removeClass('going-left going-right');
			var currSlide = (slider.currentSlide);
			var toSlide = (slider.animatingTo);
			if (currSlide < toSlide) {
				slider.addClass('going-right');
			} else {
				slider.addClass('going-left');
			}
	    },
	  });
	});
	
	//pav
	$(window).load(function() {
	  $(gallerypav).flexslider({
	  	namespace: "g-",
	  	selector: ".slides > .slide",
	  	slideshow: false,
	  	controlsContainer: '#pav',
	  	animationSpeed: '700',
	    animation: "slide",
	    before: function(slider){
	    	$('#pav').removeClass('wait');
			slider.removeClass('going-left going-right');
			var currSlide = (slider.currentSlide);
			var toSlide = (slider.animatingTo);
			if (currSlide < toSlide) {
				slider.addClass('going-right');
			} else {
				slider.addClass('going-left');
			}
	    },
	  });
	});
	
	//storage
	$(window).load(function() {
	  $(gallerystore).flexslider({
	  	namespace: "g-",
	  	selector: ".slides > .slide",
	  	slideshow: false,
	  	controlsContainer: '#store',
	  	animationSpeed: '700',
	    animation: "slide",
	    before: function(slider){
	    	$('#store').removeClass('wait');
			slider.removeClass('going-left going-right');
			var currSlide = (slider.currentSlide);
			var toSlide = (slider.animatingTo);
			if (currSlide < toSlide) {
				slider.addClass('going-right');
			} else {
				slider.addClass('going-left');
			}
	    },
	  });
	});
	
	

	$(vidPlay).click(function() {
		var video = $(this).children('video');
		var playBtn = $(this).children('.play');
		var myVid = video.get(0);

		if (!myVid.paused) { // IF PLAYING
			$(myVid).removeClass('playing').addClass('manual-pause');
			myVid.pause();
			playBtn.removeClass('active');
		} else { // IF PAUSED
			if ($(video).parent().hasClass('ended')) {
				$(this).closest('.ended').removeClass('ended');
				$(this).removeClass('active');
			}
			$(myVid).addClass('playing').removeClass('manual-pause');
			myVid.play();
			playBtn.addClass('active');
		}
	});

	$('.play').click(function() {
		var video = $(this).prev('video');
		var playBtn = $(this);
		var myVid = video.get(0);

		if ($(this).closest('.vid').hasClass('ended')) {
			if (!myVid.paused) { // IF PLAYING
				$(myVid).removeClass('playing').addClass('manual-pause');
				myVid.pause();
				playBtn.removeClass('active');
			} else { // IF PAUSED
				if ($(video).parent().hasClass('ended')) {
					$(this).closest('.ended').removeClass('ended');
					$(this).removeClass('active');
				}
				$(myVid).addClass('playing').removeClass('manual-pause');
				myVid.play();
				playBtn.addClass('active');
			}
		}
	});
	/*
	$(videoTribeca).bind("ended", function() {
	   $(this).closest('.vid').addClass('ended');
	   $(this).next('.play').removeClass('active');
	});

	$(videoWabi).bind("ended", function() {
	   $(this).closest('.vid').addClass('ended');
	   $(this).next('.play').removeClass('active');
	});

	$(videoCollab).bind("ended", function() {
	   $(this).closest('.vid').addClass('ended');
	   $(this).next('.play').removeClass('active');
	});

	$(videoRe).bind("ended", function() {
	   $(this).closest('.vid').addClass('ended');
	   $(this).next('.play').removeClass('active');
	});

	$(videoCraft).bind("ended", function() {
	   $(this).closest('.vid').addClass('ended');
	   $(this).next('.play').removeClass('active');
	});
	*/
	$(floorSelect).click(function() {
		var clicked = $(this).data('floor');
		clicked = (clicked - 1);
		$(floorSelect).removeClass('active');
		$(this).addClass('active');
		plans.find('figure').removeClass('show');
		plans.find('figure:eq('+ clicked +')').addClass('show');
	});

	$('body').addClass('ready');

		var sxsw = {

			full_bleed: function(boxWidth, boxHeight, imgWidth, imgHeight) {

				// Calculate new height and width…
				var initW = imgWidth;
				var initH = imgHeight;
				var ratio = initH / initW;
				imgWidth = boxWidth;
				imgHeight = boxWidth * ratio;

				if(imgHeight < boxHeight){
				imgHeight = boxHeight;
				imgWidth = imgHeight / ratio;
				}

				return {
					width: imgWidth,
					height: imgHeight
				};

			},
		};
		jQuery(document).ready(function($) {

			function recalculateFills() {

			var browserHeight = Math.round($(window).height());
			var browserWidth = Math.round($(window).width());

			var fills = $('.fill');

			fills.each(function () {
				var videoHeight = $(this).height();
				var videoWidth = $(this).width();
				var new_size = sxsw.full_bleed(browserWidth, browserHeight, videoWidth, videoHeight);
				$(this)
				.width(new_size.width)
				.height(new_size.height)
				.css("marginLeft", ((browserWidth - new_size.width)/2))
				.css("marginTop", ((browserHeight - new_size.height)/2));
			});
			}
			recalculateFills();
			$(window).resize(function() {
				recalculateFills();
			});
		});


	// Nav Clicks
	    $(scroll).on('click', function(e){
	        var clickedPanel = $('.section.active').index();
	        clickedPanel = clickedPanel++;
	        $(frame).scrollTo('.section:eq('+clickedPanel+')', 600, {easing:'swing', offset: 0, axis: 'y', onAfter:function(){
	            // Callback
	            activeSect = clickedPanel;
	        	}
	        });
	    e.preventDefault();
		});


});