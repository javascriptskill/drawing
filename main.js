function main() {
  const pixels = []

  for(let i=0; i<28000; i++) {
    pixels.push($('<span class="pixel"></span>'))
  }

  $('.canvas').html(pixels)

  let pressed = false

  $('.pixel').mouseenter(function() {
    if(pressed){
      $(this).addClass('drawn')
    }
  })

  $('.pixel').mousedown(function() {
    pressed = true
  })

  $('.pixel').mouseup(function() {
    pressed = false
  })
}

$(main)