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
      const currPixelId = $(this).index()
      const neigbors = getNeigbors(currPixelId)
      neigbors.forEach((x) => {
        x.removeClass('drawn')
      })
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

function getNeigbors(id) {
  /*
  -101  -100   -99
    -1          +1
   +99  +100  +101
  */
  return [
    $('.pixel').eq(id - 101),
    $('.pixel').eq(id - 100),
    $('.pixel').eq(id -  99),
    $('.pixel').eq(id -   1),
    $('.pixel').eq(id +   1),
    $('.pixel').eq(id +  99),
    $('.pixel').eq(id + 100),
    $('.pixel').eq(id + 101)
  ]
}

$(main)