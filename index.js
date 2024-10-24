function division () {
    const input1 = parseFloat(document.getElementById('divisionInp').value);
    const input2 = parseInt(document.getElementById('divisionInp2').value);
    let sum = (input1 / 100) * input2;
    document.getElementById('divisionResult').innerHTML = sum
}

function division2 () {
    const input1 = parseFloat(document.getElementById('division2Inp').value);
    const input2 = parseInt(document.getElementById('division2Inp2').value);
    let sum = (input1 / input2) * 100 ;
    document.getElementById('divisionResult2').innerHTML = sum + "%"
}

function minus () {
    const input1 = parseFloat(document.getElementById('minusInp').value);
    const input2 = parseInt(document.getElementById('minusInp2').value);
    let sum2 = input1 - input2;
    document.getElementById('minusResult').innerHTML = sum2
}

function multiplication () {
    const input1 = parseFloat(document.getElementById('multiplicationInp').value);
    const input2 = parseInt(document.getElementById('multiplicationInp2').value);
    let sum3 = input1 * input2;
    document.getElementById('multiplicationResult').innerHTML = sum3
}
function clickButton () {
    const box = `<div class="box">footer</div>`
    document.getElementById('box').innerHTML = box
}
