$(document).ready(function(){

var grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 160,
  stagger: 30,
});

//stagger function//
grid.on('click','.grid-item',function(){
  $( this ).toggleClass('grid-item--gigante');
  grid.masonry('layout');
});


});
