let category = [
    {
        id: 1,
        name: 'spider man',
        year: '2011',
        photo:'./img/vote-bg-1.jpg'
    },
    {
        id: 2,
        name: 'Интерстеллар',
        year: '2011',
        photo:'./img/vote-bg-2.jpg'
    },
    {
        id: 3,
        name: '1+1',
        year: '2015',
        photo:'./img/vote-bg-3.jpg'
    },
    {
        id: 4,
        name: 'Властелин колец',
        year: '2015',
        photo:'./img/vote-bg-4.jpg'
    },
    {
        id: 5,
        name: 'Форест Гамп',
        year: '2012',
        photo:'./img/vote-bg-5.jpg'
    },
    {
        id: 6,
        name: 'Остров проклятых',
        year: '2012',
        photo:'./img/vote-bg-6.jpg'
    },
    {
        id: 7,
        name: 'Ванпис',
        year: '2013',
        photo:'./img/vote-bg-1.jpg'
    },
    {
        id: 8,
        name: 'Наруто',
        year: '2013',
        photo:'./img/vote-bg-2.jpg'
    },
    {
        id: 9,
        name: 'Побег из шоушенка',
        year: '1999',
        photo:'./img/vote-bg-3.jpg'
    },
    {
        id: 10,
        name: 'Интерстеллар',
        year: '1999',
        photo:'./img/vote-bg-4.jpg'
    }
]

function filter () {
    let filter = document.getElementById('filterInput').value;
    let data = category.filter((i)=> i.name.toLowerCase().includes(filter.toLowerCase()));
    if(data.length > 0) {
        let text = '';
        data.forEach(item => {
            text = text +
              `
                <p>${item.name}</p>
                <img src="${item.photo}" alt="${item.name}">
              `
        })
        document.getElementById('categoryResult').innerHTML = text;
    }else{
        document.getElementById('categoryResult').innerHTML = 'Ничего не найдено';
    }
}
