function main() {

  // RENDER PIXELS

  const pixels = []

  for(let i=0; i<7000; i++) {
    pixels.push($('<span class="pixel"></span>'))
  }

  $('.canvas').html(pixels)

  // DRAW ON PIXELS

  const PENCIL = 'PENCIL' // tool type
  const ERASER = 'ERASER' // tool type
  const POINT = 'POINT'   // action type
  const STROKE = 'STROKE' // action type

  let selected = PENCIL
  let pressed = false

  function edit(action, that) {

    if(!pressed && action === STROKE) return

    if(selected === PENCIL){
      that.addClass('drawn')
    }

    if(selected === ERASER){
      const currPixelId = $(this).index()
      const neigbors = getNeigbors(currPixelId)
      neigbors.forEach((x) => {
        x.removeClass('drawn')
      })
      that.removeClass('drawn')
    }
  }

  $('.pixel').mouseenter(function() { edit(STROKE, $(this)) })
  $('.pixel').click(function() { edit(POINT, $(this)) })

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