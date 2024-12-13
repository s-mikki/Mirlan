function getAge (){

    let newAge = new Date().getFullYear();
    let newMonth = new Date().getMonth() + 1; // JS читает всё с 0 поэтому + 1
    let newDay = new Date().getDate();


    let myAge = parseInt(document.getElementById("age").value);
    let myMonth = parseInt(document.getElementById("month").value);
    let myDay = parseInt(document.getElementById("day").value);

    let age = newAge - myAge;

    let month = newMonth - myMonth;
    if (month < 0) {
        age--; // Уменьшает возраст, если текущий месяц меньше месяца рождения
        month += 12; //ограничиваем до 12 месяцев (корректируем)
    }
    let day = newDay - myDay;
    if(day < 0) {
        month--;
        let daysInMonth = new Date(newAge, newMonth - 1, 0).getDate();
        day += daysInMonth;
        // Определяет количество дней в предыдущем месяце
    }

    if (day >= 0 && month >= 0 && age >= 0) {document.getElementById("ageResult").innerHTML =
      `
        <p class="age__result">Your age is</p>
        <p class="age__result">${age}</p>
        <p class="age__result">Years</p>
        <p class="age__result">${month}</p>
        <p class="age__result">Months</p>
        <p class="age__result">${day}</p>
        <p class="age__result">Days</p>
      `} else {
        document.getElementById("ageResult").innerHTML = "Не могли вычесть"
    }
}



