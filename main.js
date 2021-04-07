function main() {

  // RENDER PIXELS

  const pixels = []

  for(let i=0; i<7000; i++) {
    pixels.push($('<span class="pixel"></span>'))
  }

  $('.canvas').html(pixels)

  // DRAW ON PIXELS

  let pressed = false

  $('.pixel').mouseenter(function() {
    if(pressed){
      $(this).addClass('drawn')
    }
  })

  $('.pixel').mousedown(() => pressed = true)
  $('.pixel').mouseup(() => pressed = false)
}

$(main)