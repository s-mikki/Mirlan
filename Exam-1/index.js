let products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    quantity: 10
  },
  {
    id: 2,
    name: "Mouse",
    price: 25,
    quantity: 100
  },
  {
    id: 3,
    name: "Keyboard",
    price: 45,
    quantity: 50
  },
  {
    id: 4,
    name: "Monitor",
    price: 300,
    quantity: 20
  },
  {
    id: 5,
    name: "USB Cable",
    price: 10,
    quantity: 200
  }
];

let todoItems = [];
let todoAmount = 0;

function contactFilter() {
  let filter = document.getElementById('contactInput').value.toLowerCase();
  let data = products.filter((i) => i.name.toLowerCase().includes(filter));
  let text = '';

  if (data.length > 0) {
    data.forEach(item => {
      text += `
                <li class="contact__item">
                    <a href="#" class="contact__link">
                        <div class="contact__block">
                            <p class="contact__title">${item.name}</p>
                            <p class="contact__price">${item.price}</p>
                            <p class="contact__quantity">${item.quantity}</p>
                        </div>
                    </a>
                </li>
            `;
    });
    document.getElementById('contactResult').innerHTML = text;
  } else {
    document.getElementById('contactResult').innerHTML = "Нет результатов";
  }
}

function todo() {
  let todoValue = document.getElementById('todoInput').value;
  todoItems.push({
    id: todoAmount,
    textTitle: todoValue,
    status: true,
  })
  todoAmount++;
  todoTasks()
}


function todoTasks() {
  let text = '';
  for (let i = 0; i < todoItems.length; i++) {
    text += `
     		    <li class="todo-list__item">
           <div class="todo__block">
             <p class="todo__button" onclick=todoStatus(${i})>${todoItems[i].status ? `${todoItems[i].textTitle}` : `<del>${todoItems[i].textTitle}</del>`}</p>
             <button class="todo__button" onclick=todoDelete(${i})>Удалить</button>
           </div>
        </li>
        `;
  }
  document.getElementById('todoList').innerHTML = text;
}

function todoStatus(index) {
  todoItems[index].status = !todoItems[index].status;
  todoTasks();
}

function todoDelete(index) {
  todoItems.splice(index, 1);
  todoTasks();
}

function todoAlls() {
  todoTasks();
}

function todoActive() {
  let data = todoItems.filter(i => i.status === true);
  let text = '';

  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      text += `
 	        <li class="todo-list__item">
               <div class="todo-list__block">
                   <p class="todo-list__title" onclick=todoStatus(${i})>${data[i].status ? `${data[i].textTitle}` : `<del>${data[i].textTitle}</del>`}</p>
                   <button class="todo-list__button" onclick=todoDelete(${i})>Удалить</button>
               </div>
            </li>
            `;
    }
    document.getElementById('todoList').innerHTML = text;
  } else {
    document.getElementById('todoList').innerHTML = 'Нет активных задач';
  }
}

function todoCompleted() {
  let data = todoItems.filter(i => i.status === false);
  let text = '';

  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      text += `
         	        <li class="todo-list__item">
               <div class="todo-list__block">
                   <p class="todo-list__title" onclick=todoStatus(${i})>${data[i].status ? `${data[i].textTitle}` : `<del>${data[i].textTitle}</del>`}</p>
                   <button class="todo-list__button" onclick=todoDelete(${i})>Удалить</button>
               </div>
            </li>
            `;
    }
    document.getElementById('todoList').innerHTML = text;
  } else {
    document.getElementById('todoList').innerHTML = 'Нет завершенных задач';
  }
}
