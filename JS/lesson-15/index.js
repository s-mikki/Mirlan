let contacts = [
    {
        id: 1,
        name: 'Iron Man',
        photo:'./img/vote-bg-1.jpg',
        phone:'+1 202-555-0173' // США
    },
    {
        id: 2,
        name: 'Captain America',
        photo:'./img/vote-bg-1.jpg',
        phone:'+44 20 7946 0958' // Великобритания
    },
    {
        id: 3,
        name: 'Thor',
        photo:'./img/vote-bg-1.jpg',
        phone:'+996 555 123 456' // Кыргызстан
    },
    {
        id: 4,
        name: 'Hulk',
        photo:'./img/vote-bg-1.jpg',
        phone:'+91 98765 43210' // Индия
    },
    {
        id: 5,
        name: 'Black Widow',
        photo:'./img/vote-bg-1.jpg',
        phone:'+33 1 23 45 67 89' // Франция
    },
    {
        id: 6,
        name: 'Hawkeye',
        photo:'./img/vote-bg-1.jpg',
        phone:'+81 90-1234-5678' // Япония
    },
    {
        id: 7,
        name: 'Doctor Strange',
        photo:'./img/vote-bg-1.jpg',
        phone:'+49 151 23456789' // Германия
    },
    {
        id: 8,
        name: 'Scarlet Witch',
        photo:'./img/vote-bg-1.jpg',
        phone:'+86 138 00138000' // Китай
    },
    {
        id: 9,
        name: 'Black Panther',
        photo:'./img/vote-bg-1.jpg',
        phone:'+27 82 123 4567' // Южная Африка
    },
    {
        id: 10,
        name: 'Spider-Man',
        photo:'./img/vote-bg-1.jpg',
        phone:'+7 495 123-45-67' // Россия
    },
    {
        id: 11,
        name: 'Ant-Man',
        photo:'./img/vote-bg-1.jpg',
        phone:'+61 400 123 456' // Австралия
    },
    {
        id: 12,
        name: 'Captain Marvel',
        photo:'./img/vote-bg-1.jpg',
        phone:'+34 600 123 456' // Испания
    },
];


function contactFilter () {
    let filter = document.getElementById('contactInput').value.toLowerCase();
    let data = contacts.filter((i)=>
      i.name.toLowerCase().includes(filter) ||
      i.phone.toLowerCase().includes(filter)
    );
    if(data.length > 0) {
        let text = '';
        data.forEach(item => {
            text = text + ` <li class="contact__item">
                    <a href="#" class="contact__link">
                        <picture class="contact__picture">
                            <source media="(min-width: 980px)" width="40" height="40" srcset="${item.photo}">
                            <source media="(max-width: 980px)" width="40" height="40" srcset="${item.photo}">
                            <img class="contact__source" src="${item.photo}" alt="asa">
                        </picture>
                        <div class="contact__block">
                            <p class="contact__title">${item.name}</p>
                            <p class="contact__number">${item.phone}</p>
                        </div>
                    </a>
                </li>
    `
        })
        document.getElementById('contactResult').innerHTML = text;
    }else {
        document.getElementById('contactResult').innerHTML = "()^()";
    }
}