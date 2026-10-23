(function($){
var stickylarg=$('#title-area').height();$(window).scroll(function(){var scrollPercent=$(window).scrollTop();if(scrollPercent>stickylarg){scrollPercent=stickylarg;$('.menucontainer').addClass('sticky')}else{$('.menucontainer').removeClass('sticky')}})
})(window.jQuery);