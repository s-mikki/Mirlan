function trafficLights() {
  function TGreen() {
    $('.line__circle--green').css({
      backgroundColor: 'green',
      transition: '2s'
    });
    $('.line__circle--red, .line__circle--yellow').css({
      backgroundColor: 'transparent',
      transition: '2s'
    });
    startCar();
  }
  
  function TYellow() {
    $('.line__circle--yellow').css({
      backgroundColor: 'yellow',
      transition: '2s'
    })
    $('.line__circle--green, .line__circle--red').css({
      backgroundColor: 'transparent',
      transition: '2s'
    })
    stopCar()
  }

  function TRed() {
    $('.line__circle--red').css({
      backgroundColor: 'red',
      transition: '2s'
    })
    $('.line__circle--green, .line__circle--yellow').css({
      backgroundColor: 'transparent',
      transition: '2s'
    })
    stopCar()
  }

  let state = 0

  setInterval(() => {
    if (state === 0) {
      TGreen()
    } else if (state === 1) {
      TYellow()
    }else if (state === 2) {
      TRed()
    }
    state = (state + 1) % 3
  }, 4000)
}

function startCar() {
  let car =$('.line__img')
  let carLeft = car.position().left
  car.animate({
    left: carLeft + 615 + 'px'
  }, 4000)
}

function stopCar() {
  $('.line__img').stop()
}

trafficLights()