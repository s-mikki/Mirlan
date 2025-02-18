function cream1() {
    $('.softCream__img-1').animate({
        top: 0,
    },1500)
    $('.softCream__img-2').animate({
        top: '-100%',
    },100)
    $('.softCream__img-3').animate({
        top: '-100%',
    },100)
}

function cream2() {
    $('.softCream__img-2').animate({
        top: 0,
    },1500)
    $('.softCream__img-1').animate({
        top: '-100%',
    },100)
    $('.softCream__img-3').animate({
        top: '-100%',
    },100)
}

function cream3() {
    $('.softCream__img-3').animate({
        top: 0,
    },1500)
    $('.softCream__img-1').animate({
        top:'-100%'
    },100)
    $('.softCream__img-2').animate({
        top:'-100%'
    },100)
}

function showCream(index) {
    $('.softCream__img').animate({ top: '-100%' }, 500); // Скрываем все
    $(`.softCream__img-${index}`).animate({ top: 0 }, 1500); // Показываем нужный
}

$('.cream__button--1').click(() => showCream(1));
$('.cream__button--2').click(() => showCream(2));
$('.cream__button--3').click(() => showCream(3));