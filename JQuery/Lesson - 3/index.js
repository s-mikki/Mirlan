function solve2() {
    function solve() {
        $('.propeller__img').css({
            transform: 'rotate(360deg)',
            transition: '2s',
        })
    }

    setTimeout(solve, 1000)

    function circle() {
        $('.propeller__img').css({
            transform: 'rotate(0deg)',
            transition: '0s',
        })
    }

    setTimeout(circle, 3000)
}

setInterval(solve2, 3000)