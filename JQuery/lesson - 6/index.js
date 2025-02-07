function solve2() {
    $('.propeller__content-1')
      .animate({ bottom: '100px' }, 600)
      .animate({ bottom: '85px' }, 500)
      .animate({ bottom: '115px' }, 400)
      .animate({ bottom: '95px' }, 350)
      .animate({ bottom: '105px' }, 300)
      .animate({ bottom: '100px' }, 250);

    $('.propeller__content-2')
      .animate({ bottom: '170px' }, 700)
      .animate({ bottom: '155px' }, 500)
      .animate({ bottom: '185px' }, 450)
      .animate({ bottom: '160px' }, 350)
      .animate({ bottom: '175px' }, 300)
      .animate({ bottom: '170px' }, 250);

    $('.propeller__content-3')
      .animate({ bottom: '240px' }, 800)
      .animate({ bottom: '225px' }, 600)
      .animate({ bottom: '255px' }, 500)
      .animate({ bottom: '230px' }, 400)
      .animate({ bottom: '245px' }, 350)
      .animate({ bottom: '240px' }, 300);
}

$('.toggle-button').on('click', solve2);
