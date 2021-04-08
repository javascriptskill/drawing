function main() {

  // RENDER PIXELS

  const pixels = []

  for(let i=0; i<7000; i++) {
    pixels.push($('<span class="pixel"></span>'))
  }

  $('.canvas').html(pixels)

  // DRAW ON PIXELS

  const PENCIL = 'PENCIL'
  const ERASER = 'ERASER'

  let selected = PENCIL
  let pressed = false

  $('.pixel').mouseenter(function() {

    if(!pressed) return

    if(selected === PENCIL){
      $(this).addClass('drawn')
    }

    if(selected === ERASER){
      $(this).removeClass('drawn')
    }
  })

  $('.pixel').mousedown(() => pressed = true)
  $('.pixel').mouseup(() => pressed = false)

  // TOOL SELECTION

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