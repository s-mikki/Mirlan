let box = [
    {
        id:1,
        name:'Germany',
        code:'+49',
        shortName:'DE'
    },
    {
        id:2,
        name:'Kyrgyzstan',
        code:'+996',
        shortName:'KG'
    },
    {
        id:3,
        name:'Kazakhstan',
        code:'+7',
        shortName:'KZ'
    },
    {
        id:4,
        name:'Russia',
        code:'+7',
        shortName:'RU'
    },
    {
        id:5,
        name:'Pakistan',
        code:'+92',
        shortName:'PK',
        category:'men'
    },
]

function search () {
    let searchValue = document.getElementById('inputValue').value;
    let data = box.filter((i)=> i.name.toLowerCase().includes(searchValue.toLowerCase()));
    if(data.length > 0){
        let text = '';
        for(let i = 0; i<data.length; i++){
            text += `<option value="${data[i].name}">${data[i].name}</option>`;
        }
        document.getElementById('select').innerHTML = text;
    }else{
        document.getElementById('select').innerHTML = '';
    }
}

function selectCountry () {
    let selectValue = document.getElementById('select').value;
    let data = box.filter((i)=> i.category === selectValue);
    if(data.length > 0) {
        document.getElementById('result').innerHTML = 
        `
        <p>${data[0].name}</p>
        <p>${data[0].code}</p>
        <p>${data[0].shortName}</p>
        `;
    }else{
        document.getElementById('result').innerHTML = '';
    }
}