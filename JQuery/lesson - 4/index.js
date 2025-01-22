function solve2() {
    function solve() {
        $('.propeller__img').animate({
            bottom: '+=50px',
            left: '+=200px',
        },
          3000,
          'linear',
          function () {
            circle() //запуск следующей анимации после заверщения первой функции
          }
    )
    }
    function circle() {
        $('.propeller__img').animate({
            bottom: '-=50px',
            left: '+=200px',
        }, 3000,
          'linear',
          function () {
              solve(); // Повторяем движение
          })
    }
    solve()
}

setTimeout(solve2, 1000);