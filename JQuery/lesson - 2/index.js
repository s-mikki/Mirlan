function time() {
    $('.line__img').animate({
        left: '615px',
        transition: '4s'
    })
}

setTimeout(time, 1000)


function trafficGreen() {
    $('.line__circle--green').css({
        backgroundColor: 'green',
        transition: '2s'
    })
}

setTimeout(trafficGreen, 2000)

function trafficYellow() {
    $('.line__circle--yellow').css({
        backgroundColor: 'yellow',
        transition: '2s'
    })
    $('.line__circle--green').css({
        backgroundColor: 'transparent',
        transition: '2s'
    })
}

setTimeout(trafficYellow, 4000)

function trafficRed() {
    $('.line__circle--red').css({
        backgroundColor: 'red',
        transition: '2s'
    })
    $('.line__circle--yellow').css({
        backgroundColor: 'transparent',
        transition: '2s'
    })
}

setTimeout(trafficRed, 6000)
