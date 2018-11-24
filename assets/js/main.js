$(window).on('load', function() {
  setTimeout(function() {
    $('body').removeClass('disable-scroll');
    $('.preloader-container').fadeOut('slow', function() {
      addAnimation('#section-1');
    });
  }, 500);
})

var sections = [];

$('.section').each(function(index, el) {
  sections.push('section-'+(index + 1));
});

$('#content').pagepiling({
  anchors: sections,
  keyboardScrolling: false,
	afterLoad: function(anchorLink, index){
    addAnimation('#'+anchorLink);
    setTimeout(function() {
      if (anchorLink !== 'section-1') {
        removeAnimation('#section-1');
      }
    }, 500)
  },
  onLeave: function (index, nextIndex, direction) {
    removeAnimation('#section-'+index);
  }
});

// API KEY
// AIzaSyDnvZnMUERWi8IQJkiI9Dj3hPjAjgCopus

function initMap(){

}

function cariDokter() {

}
