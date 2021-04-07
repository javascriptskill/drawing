$(() => {
  const pixels = []
  for(let i=0; i<28000; i++) {
    pixels.push($('<span class="pixel"></span>'))
  }
  $('.canvas').html(pixels)
})