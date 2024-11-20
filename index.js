function division() {
    const input1 = parseFloat(document.getElementById('divisionInp').value);
    const input2 = parseInt(document.getElementById('divisionInp2').value);
    let sum = (input1 / 100) * input2;
    document.getElementById('divisionResult').innerHTML = sum
}

function division2() {
    const input1 = parseFloat(document.getElementById('division2Inp').value);
    const input2 = parseInt(document.getElementById('division2Inp2').value);
    let sum = (input1 / input2) * 100;
    document.getElementById('divisionResult2').innerHTML = sum + "%"
}

function minus() {
    const input1 = parseFloat(document.getElementById('minusInp').value);
    const input2 = parseInt(document.getElementById('minusInp2').value);
    let sum2 = input1 - input2;
    document.getElementById('minusResult').innerHTML = sum2
}

function multiplication() {
    const input1 = parseFloat(document.getElementById('multiplicationInp').value);
    const input2 = parseInt(document.getElementById('multiplicationInp2').value);
    let sum3 = input1 * input2;
    document.getElementById('multiplicationResult').innerHTML = sum3
}

function clickButton() {
    const box = `<div class="box">footer</div>`
    document.getElementById('box').innerHTML = box
}

function meter() {
    const meter1 = parseFloat(document.getElementById('meter').value)
    document.getElementById('fud').value = meter1 * 3.281
    document.getElementById('yard').value = meter1 * 1.09361
}

function fud() {
    const fud1 = parseFloat(document.getElementById('fud').value)
    document.getElementById('meter').value = fud1 / 3.281
    document.getElementById('yard').value = fud1 * 3
}

function yard() {
    const yard1 = parseFloat(document.getElementById('yard').value)
    document.getElementById('fud').value = yard1 / 3
    document.getElementById('meter').value = yard1 / 0.9361
}

function convertTemp() {
    let val = parseFloat(document.getElementById('tempInput').value);
    let temp = document.getElementById('select').value;
    let temp2 = document.getElementById('select2').value;
    if (temp === 'C' && temp2 === 'F') {
        document.getElementById('tempResult').innerHTML = (val * 9 / 5) + 32
    }
    if (temp === 'F' && temp2 === 'C') {
        document.getElementById('tempResult').innerHTML = (val - 32) * 5 / 9
    }
    if (temp === 'K' && temp2 === 'C') {
        document.getElementById('tempResult').innerHTML = val - 273.15
    }
    if (temp === 'C' && temp2 === 'K') {
        document.getElementById('tempResult').innerHTML = val + 273.15
    }
    if (temp === 'K' && temp2 === 'F') {
        document.getElementById('tempResult').innerHTML = (val - 273.15) * 9 / 5 + 32
    }
    if (temp === 'F' && temp2 === 'K') {
        document.getElementById('tempResult').innerHTML = 5 / 9 * (val - 32) + 273.15
    }
}

let creamItem = 0;
let creamSum = 0;

function countAdd(type) {
    if (type === 'cream') {
        creamSum = creamSum + 7
        document.getElementById('sumBox').innerHTML = creamSum
        document.getElementById('countBox').innerHTML = ++creamItem
    }
    if (type === 'water') {
        creamSum = creamSum + 10
        document.getElementById('sumBox').innerHTML = creamSum
        document.getElementById('countBox').innerHTML = ++creamItem
    }
    if (type === 'donut') {
        creamSum = creamSum + 5
        document.getElementById('sumBox').innerHTML = creamSum
        document.getElementById('countBox').innerHTML = ++creamItem
    }
}

function countRemove(type) {
    if (type === 'cream') {
        creamSum = creamSum - 7
        document.getElementById('sumBox').innerHTML = creamSum
        document.getElementById('countBox').innerHTML = --creamItem
    }
    if (type === 'water') {
        creamSum = creamSum - 10
        document.getElementById('sumBox').innerHTML = creamSum
        document.getElementById('countBox').innerHTML = --creamItem
    }
    if (type === 'donut') {
        creamSum = creamSum - 5
        document.getElementById('sumBox').innerHTML = creamSum
        document.getElementById('countBox').innerHTML = --creamItem
    }
}

function areaScore() {
    let val = parseFloat(document.getElementById('areaInput').value);
    let temp = document.getElementById('areaSelect').value;
    if (temp === 'oak') {
        document.getElementById('areaScore').innerHTML = 150 * val
    }
    if (temp === 'pine') {
        document.getElementById('areaScore').innerHTML = 100 * val
    }
    if (temp === 'cherry') {
        document.getElementById('areaScore').innerHTML = 200 * val
    }
    if (temp === 'birch') {
        document.getElementById('areaScore').innerHTML = 300 * val
    }
}

function infoNames() {
    const name = (document.getElementById('infoName').value);
    const age = (document.getElementById('infoAge').value);
    document.getElementById('infoResultName').innerHTML = name + ': ' + age
}


// !== это сравнение чтобы было не равно
// == это сравнение чтобы было равно
// = присвоение
// === Сравнение с типом данных

function time() {
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();

    if (min < 10 && sec < 10) {
        document.getElementById('time').innerHTML = hours + ":0" + min + ":0" + sec;
    } else if (min < 10) {
        document.getElementById('time').innerHTML = hours + ":0" + min + ":" + sec;
    } else if (sec < 10) {
        document.getElementById('time').innerHTML = hours + ":" + min + ":0" + sec;
    } else {
        document.getElementById('time').innerHTML = hours + ":" + min + ":" + sec;
    }
}

setInterval(time, 1000); //2s = 2000

function date() {
    var date = new Date().getDate();
}

let ball = 0

function balReplenish() {
    let ballInput = parseFloat(document.getElementById('balanceInput').value);
    ball += ballInput;
    document.getElementById('balResult').innerHTML = ball;
}

function balTakeOff() {
    let ballInput = parseFloat(document.getElementById('balanceInput').value);
    if (ball >= ballInput) {
        ball -= ballInput;
        document.getElementById('balResult').innerHTML = ball;
    } else {
        document.getElementById('balResult').innerHTML = `Баланс не может быть меньше нуля`;
    }
}

function balRemainder() {
    document.getElementById('balResult').innerHTML = ball;
}

function balExit() {
    document.getElementById('balResult').innerHTML = `Вы вышли из системы`;
}

function world() {
    document.getElementById('worldImg').src = "img/img-2.jpg";
}

function hello1() {
    document.getElementById('helloBlock').insertAdjacentHTML('beforeend', `<p class="world__text">Привет</p>`);
}

function hello2() {
    document.getElementById('helloBlock').insertAdjacentHTML('beforeend', `<p class="world__text">Мир</p>`);
}

setTimeout(world, 10000);
setTimeout(hello1, 4000);
setTimeout(hello2, 8000);

function trafficReset() {
    document.getElementById('red').style.backgroundColor = '';
    document.getElementById('yellow').style.backgroundColor = '';
    document.getElementById('green').style.backgroundColor = '';
}

function trafficReset1() {
    document.getElementById('red1').style.backgroundColor = '';
    document.getElementById('yellow1').style.backgroundColor = '';
    document.getElementById('green1').style.backgroundColor = '';
    document.getElementById('white').style.backgroundColor = '';
    document.getElementById('blue').style.backgroundColor = '';
}

function traffic() {
    trafficReset()

    function trafficRed() {
        trafficReset();
        document.getElementById('red').style.backgroundColor = '#FF0000';
    }

    setTimeout(trafficRed, 1000);

    function trafficYellow() {
        trafficReset();
        document.getElementById('yellow').style.backgroundColor = '#FFEA00';
    }

    setTimeout(trafficYellow, 2000);

    function trafficGreen() {
        trafficReset();
        document.getElementById('green').style.backgroundColor = '#2AFF00';
    }

    setTimeout(trafficGreen, 3000);
}

setInterval(traffic, 3000);

function traffic1() {
    trafficReset1()

    function trafficRed1() {
        trafficReset1();
        document.getElementById('red1').style.backgroundColor = '#FF0000';
    }

    setTimeout(trafficRed1, 1000);


    function trafficYellow1() {
        trafficReset1();
        document.getElementById('yellow1').style.backgroundColor = '#FFEA00';
    }

    setTimeout(trafficYellow1, 2000);


    function trafficGreen1() {
        trafficReset1();
        document.getElementById('green1').style.backgroundColor = '#2AFF00';
    }

    setTimeout(trafficGreen1, 3000);

    function trafficWhite() {
        trafficReset1();
        document.getElementById('white').style.backgroundColor = '#FFFFFF';
    }

    setTimeout(trafficWhite, 4000);


    function trafficBlue() {
        trafficReset1();
        document.getElementById('blue').style.backgroundColor = '#0022FF';
    }

    setTimeout(trafficBlue, 5000);
}

setInterval(traffic1, 5000);

function timer() {
    let timeLeft = 60
    let timerText = document.getElementById('timerText');
    let TimeMin = 0;
    let TimeHour = 0

    let countDown = setInterval(() => {
        timeLeft--;
        timerText.innerText = timeLeft;
        if (timeLeft < 0) {
            clearInterval(countDown);
        } else {
            if (TimeMin < 10 && timeLeft < 10) {
                document.getElementById('timerText').innerHTML = TimeHour + ":0" + TimeMin + ":0" + timeLeft;
            } else if (TimeMin < 10) {
                document.getElementById('timerText').innerHTML = TimeHour + ":0" + TimeMin + ":" + timeLeft;
            } else if (timeLeft < 10) {
                document.getElementById('timerText').innerHTML = TimeHour + ":" + TimeMin + ":0" + timeLeft;
            } else {
                document.getElementById('timerText').innerHTML = TimeHour + ":" + TimeMin + ":" + timeLeft;
            }
        }
    }, 1000)
}

timer()