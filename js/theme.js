/*!
 * This website was made from a heavily modified versuon of the grayscale bootstrap theme.
 * Grayscale Bootstrap Theme @ (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
 

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


// jQuery to change logo style on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-brand").addClass("navbar-brand-collapsed");
    } else {
        $(".navbar-brand").removeClass("navbar-brand-collapsed");
    }
});

// jQuery to rotate resume img on scroll
//also to slide in download span
$(window).scroll(function() {
    if ($(this).scrollTop()>=$(".rotate-trigger").offset().top-600) {
        $(".img-to-rotate").addClass("rotating-img");
        $(".span-to-slide ").addClass("slide-in-span");
            if ($.contains($(".rotating-img-container")[0],$(".circle-display-lg")[0])) {
            } else {
            $(".rotate-trigger").after("<div class=\"circle-link-lg\"><div class=\"circle-display-lg img-to-rotate-lg rotating-img\"></div></div>");
            }
        
    }
});
    
//jQuery for hovering over clipboard
$(".img-to-rotate").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("1.png", "2.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("2.png", "1.png");
    });
});


$(document).on("mouseenter", ".circle-link-lg", function() {
     $(".img-to-rotate").css("background-image","url(img/pdf-icn2.png)");
});

$(document).on("mouseleave", ".circle-link-lg", function() {
    $(".img-to-rotate").css("background-image","url(img/pdf-icn1.png)");
});


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).on("mouseenter", ".mobile-link", function() {
     $('.mobile-download').attr('src','img/pdf-icn2.png');
});

$(document).on("mouseleave", ".mobile-link", function() {
    $('.mobile-download').attr('src','img/pdf-icn1.png');
});


//CUSTOM


/*
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
*/

