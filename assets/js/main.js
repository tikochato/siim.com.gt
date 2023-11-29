/*
	Projection by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

  // Breakpoints.
  skel.breakpoints({xlarge: '(max-width: 1680px)', large: '(max-width: 1280px)', medium: '(max-width: 980px)', small: '(max-width: 736px)', xsmall: '(max-width: 480px)'});

  $(function() {

    var $window = $(window),
      $body = $('body'),
      $main = $('#main');


			    // Nav.
			    var $nav = $('#nav');
					var $navinner = $('#navinner');
					var $logo = $('#logo');
			    if ($nav.length > 0) {
			      // Shrink effect.
			      $main.scrollex({
			        mode: 'top',
			        enter: function() {
			          $nav.addClass('alt');
								$logo.addClass('alt');
								$navinner.addClass('alt');
								$navinner.removeClass('inner');
			        },
			        leave: function() {
			          $nav.removeClass('alt');
								$logo.removeClass('alt');
								$navinner.removeClass('alt');
								$navinner.addClass('inner');
			        }
			      });
			      // Links.
			      var $nav_a = $nav.find('a');
			      $nav_a.scrolly({
			        speed: 1000,
			        offset: function() {
			          return $nav.height();
			        }
			      }).on('click', function() {
			        var $this = $(this);
			        // External link? Bail.
			        if ($this.attr('href').charAt(0) != '#')
			          return;
			        // Deactivate all links.
			        $nav_a.removeClass('active').removeClass('active-locked');
			        // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
			        $this.addClass('active').addClass('active-locked');
			      }).each(function() {
			        var $this = $(this),
			          id = $this.attr('href'),
			          $section = $(id);
			        // No section for this link? Bail.
			        if ($section.length < 1)
			          return;
			        // Scrollex.
			        $section.scrollex({
			          mode: 'middle',
			          initialize: function() {
			            // Deactivate section.
			            if (skel.canUse('transition'))
			              $section.addClass('inactive');

			            }
			          ,
			          enter: function() {
			            // Activate section.
			            $section.removeClass('inactive');
			            // No locked links? Deactivate all links and activate this section's one.
			            if ($nav_a.filter('.active-locked').length == 0) {
			              $nav_a.removeClass('active');
			              $this.addClass('active');// Otherwise, if this section's link is the one that's locked, unlock it.);
			            } else if ($this.hasClass('active-locked'))
			              $this.removeClass('active-locked');
			            }
			          });
			      });
			    }

    // Disable animations/transitions until the page has loaded.
    $body.addClass('is-loading');

    $window.on('load', function() {
      window.setTimeout(function() {
        $body.removeClass('is-loading');
      }, 100);
    });

    // Prioritize "important" elements on medium.
    skel.on('+medium -medium', function() {
      $.prioritize('.important\\28 medium\\29', skel.breakpoint('medium').active);
    });

    // Off-Canvas Navigation.

    // Navigation Panel.
    $('<div id="navPanel">' + $('#nav').html() + '<a href="#navPanel" class="close"></a>' + '</div>').appendTo($body).panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: 'left'
    });


    // Fix: Remove transitions on WP<10 (poor/buggy performance).
    if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
      $('#navPanel').css('transition', 'none');

    }
  );

})(jQuery);

/* carrousel */
$(document).ready(function() {
  $('.pgwSlideshow').pgwSlideshow();
});

$("#slideshow > div:gt(0)").hide();

setInterval(function () {
	$('#slideshow > div:first')
		.fadeOut(0)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slideshow');
}, 3000);
