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

function convertTemp () {
    let val = parseFloat(document.getElementById('tempInput').value);
    let temp = document.getElementById('select').value;
    let temp2 = document.getElementById('select2').value;
    if(temp === 'C' && temp2 === 'F') {
        document.getElementById('tempResult').innerHTML = (val * 9/5) + 32
    }
    if(temp === 'F' && temp2 === 'C') {
        document.getElementById('tempResult').innerHTML = (val - 32) * 5/9
    }
    if(temp === 'K' && temp2 === 'C') {
        document.getElementById('tempResult').innerHTML = val - 273.15
    }
    if(temp === 'C' && temp2 === 'K') {
        document.getElementById('tempResult').innerHTML = val + 273.15
    }
    if(temp === 'K' && temp2 === 'F') {
        document.getElementById('tempResult').innerHTML = (val - 273.15) * 9/5 + 32
    }
    if(temp === 'F' && temp2 === 'K') {
        document.getElementById('tempResult').innerHTML = 5/9 * (val - 32) + 273.15
    }
}

let creamItem = 0;
let creamSum = 0;
function countAdd (type) {
    if(type === 'cream') {
        creamSum = creamSum + 7
        document.getElementById('sumBox').innerHTML = creamSum
        document.getElementById('countBox').innerHTML = ++creamItem
    }
    if(type === 'water') {
        creamSum = creamSum + 10
        document.getElementById('sumBox').innerHTML = creamSum
        document.getElementById('countBox').innerHTML = ++creamItem
    }
    if(type === 'donut') {
        creamSum = creamSum + 5
        document.getElementById('sumBox').innerHTML = creamSum
        document.getElementById('countBox').innerHTML = ++creamItem
    }
}

function countRemove (type) {
    if(type === 'cream') {
        creamSum = creamSum - 7
        document.getElementById('sumBox').innerHTML = creamSum
        document.getElementById('countBox').innerHTML = --creamItem
    }
    if(type === 'water') {
        creamSum = creamSum - 10
        document.getElementById('sumBox').innerHTML = creamSum
        document.getElementById('countBox').innerHTML = --creamItem
    }
    if(type === 'donut') {
        creamSum = creamSum - 5
        document.getElementById('sumBox').innerHTML = creamSum
        document.getElementById('countBox').innerHTML = --creamItem
    }
}

function areaScore () {
    let val = parseFloat(document.getElementById('areaInput').value);
    let temp = document.getElementById('areaSelect').value;
    if(temp === 'oak') {
        document.getElementById('areaScore').innerHTML = 150 * val
    }
    if(temp === 'pine') {
        document.getElementById('areaScore').innerHTML = 100 * val
    }
    if(temp === 'cherry') {
        document.getElementById('areaScore').innerHTML = 200 * val
    }
    if(temp === 'birch') {
        document.getElementById('areaScore').innerHTML = 300 * val
    }
}
