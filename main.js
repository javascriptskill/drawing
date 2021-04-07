$(function() {
  const pixels = []
  for(let i=0; i<28000; i++) {
    pixels.push($('<span class="pixel"></span>'))
  }
  $('.canvas').html(pixels)

  $('.canvas').on('mouseenter', '.pixel', function() {
    $(this).addClass('drawn')
  })
})