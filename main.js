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

  // TOOL SELECTION

  const PENCIL = 'PENCIL'
  const ERASER = 'ERASER'

  let selected = PENCIL
  updateToolbar(selected)

  $('.tool').click(function() {
    const thisName = $(this).attr('data-name')
    
    if(thisName === PENCIL) {
      selected = PENCIL
    }
    
    if(thisName === ERASER) {
      selected = ERASER
    }

    updateToolbar(selected)
  })
}

function updateToolbar(selected) {
  $('.tool').removeClass('selected')
  $('[data-name='+selected+']').addClass('selected')
}

$(main)