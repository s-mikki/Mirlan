let contacts = [
    {
        id: 1,
        name: 'spider man',
        photo:'./img/vote-bg-1.jpg',
        phone:'+996505688852'

    },
    {
        id: 2,
        name: 'spider man 1',
        photo:'./img/vote-bg-1.jpg',
        phone:'+996505688852'
    },
    {
        id: 3,
        name: 'spider man',
        photo:'./img/vote-bg-1.jpg',
        phone:'+996505688852'
    },
    {
        id: 4,
        name: 'spider man',
        photo:'./img/vote-bg-1.jpg',
        phone:'+996505688852'
    },
    {
        id: 5,
        name: 'spider man',
        photo:'./img/vote-bg-1.jpg',
        phone:'+996505688852'
    },
    {
        id: 6,
        name: 'spider man',
        photo:'./img/vote-bg-1.jpg',
        phone:'+996505688852'
    },
    {
        id: 7,
        name: 'spider man',
        photo:'./img/vote-bg-1.jpg',
        phone:'+996505688852'
    },
    {
        id: 8,
        name: 'spider man',
        photo:'./img/vote-bg-1.jpg',
        phone:'+996505688852'
    },
    {
        id: 9,
        name: 'spider man',
        photo:'./img/vote-bg-1.jpg',
        phone:'+996505688852'
    },
    {
        id: 10,
        name: 'spider man',
        photo:'./img/vote-bg-1.jpg',
        phone:'+996505688852'
    },
    {
        id: 11,
        name: 'spider man',
        photo:'./img/vote-bg-1.jpg',
        phone:'+996505688852'
    },
    {
        id: 12,
        name: 'spider man',
        photo:'./img/vote-bg-1.jpg',
        phone:'+996505688852'
    },
]

function contactFilter () {
    let filter = document.getElementById('contactInput').value;
    let data = contacts.filter((i)=>i.name.phone.toLowerCase().includes(filter.toLowerCase()));
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
    }
}