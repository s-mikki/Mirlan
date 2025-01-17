function time() {
    $('.line__circle').animate({
        bottom: '100px',
        left: '20px'
    })
}

setTimeout(time, 2000)

function time1() {
    $('.line__circle').animate({
        bottom: '0px',
        left: '40px'
    })
}

setTimeout(time1, 2500)

function time2() {
    $('.line__circle').animate({
        bottom: '75px',
        left: '60px'
    })
}

setTimeout(time2, 3000)

function time3() {
    $('.line__circle').animate({
        bottom: '0px',
        left: '80px'
    })
}

setTimeout(time3, 3500)

function time4() {
    $('.line__circle').animate({
        bottom: '50px',
        left: '90px'
    })
}

setTimeout(time4, 4000)

function time5() {
    $('.line__circle').animate({
        bottom: '0px',
        left: '100px'
    })
}

setTimeout(time5, 4500)


// function floor() {
//     let floor = document.getElementById('floorInput').value;
//
//     document.getElementById('floorAnswer').innerHTML = '';
//
//     if (floor === '1') {
//         $('.floor__item--active').animate({
//             bottom: '0px'
//         })
//     }
//     if (floor === '2') {
//         $('.floor__item--active').animate({
//             bottom: '20px'
//         })
//     }
//     if (floor === '3') {
//         $('.floor__item--active').animate({
//             bottom: '40px'
//         })
//     }
//     if (floor === '4') {
//         $('.floor__item--active').animate({
//             bottom: '60px'
//         })
//     }
//     if (floor === '5') {
//         $('.floor__item--active').animate({
//             bottom: '80px'
//         })
//     }
//     if (floor === '6') {
//         $('.floor__item--active').animate({
//             bottom: '100px'
//         })
//     }
//     if (floor === '7') {
//         $('.floor__item--active').animate({
//             bottom: '120px'
//         })
//     }
//     if (floor === '8') {
//         $('.floor__item--active').animate({
//             bottom: '140px'
//         })
//     }
//     if (floor === '9') {
//         $('.floor__item--active').animate({
//             bottom: '160px'
//         })
//     }
//     if (floor === '10') {
//         $('.floor__item--active').animate({
//             bottom: '180px'
//         })
//     }else {
//         document.getElementById('floorAnswer').innerHTML = 'Ничего нет';
//     }
// }

function draw() {
    let position = {
        '1': '0px',
        '2': '20px',
        '3': '40px',
        '4': '60px',
        '5': '80px',
        '6': '100px',
        '7': '120px',
        '8': '140px',
        '9': '160px',
        '10': '180px'
    }
    let floor = document.getElementById('floorInput').value;
    let answer = document.getElementById('floorAnswer');

    if(position[floor]) {
        $('.floor__item--active').animate({
            bottom: [position[floor]],
        })
        answer.innerHTML = '';
    } else {
        answer.innerHTML = 'Такого этажа нет'
    }
}

