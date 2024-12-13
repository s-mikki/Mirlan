let todoItems = [];
let todoAmount = 0;

function todo () {
	let todoValue = document.getElementById('todoInput').value;
	todoItems.push({  // функция push добавляет в массив данные
      id: todoAmount,
      textTitle: todoValue,
      status: true,
  })
	todoAmount++;
  todoTasks()
}

function todoTasks () {
	let text = '';
	for(let i = 0; i<todoItems.length; i++) {
		text = text +
      `
		    <li class="todo-list__item">
           <div class="todo__block">
             <p class="todo__button" onclick=todoStatus(${i})>${todoItems[i].status ? `${todoItems[i].textTitle}` : `<del>${todoItems[i].textTitle}</del>`}</p>
             <button class="todo__button" onclick=todoDelete(${i})>Удалить</button>
           </div>
        </li>
		  `
	}
	document.getElementById('todoList').innerHTML = text;
}

function todoStatus (index) {
	todoItems[index] = {
		id: todoItems[index].id,
    textTitle: todoItems[index].textTitle,
		status: todoItems[index].status === false ? true : false,
	}
	todoTasks()
}

function todoDelete (index) {
    todoItems = todoItems.filter(i => i.id !== todoItems[index].id)
    todoTasks()
}

function todoAlls () {
    todoTasks()
}

function todoActive () {
    let data = todoItems.filter(i => i.status === true);
    if(data.length > 0){
        let text = ""
        for (let i = 0; i<data.length; i++){
            text = text +
          `
		        <li class="todo-list__item">
               <div class="todo-list__block">
                   <p class="todo-list__title" onclick=todoStatus(${i})>${data[i].status ? `${data[i].textTitle}` : `<del>${data[i].textTitle}</del>`}</p>
                   <button class="todo-list__button" onclick=todoDelete(${i})>Удалить</button>
               </div>
            </li>
          `
        }
        document.getElementById('todoList').innerHTML = text
    }else{
        document.getElementById('todoList').innerHTML = 'No active'
    }
}

function todoCompleted () {
    let data = todoItems.filter(i => i.status === false);
    if(data.length > 0){
        let text = ""
        for (let i = 0; i<data.length; i++){
            text = text +
          `
		        <li class="todo-list__item">
               <div class="todo-list__block">
                   <p class="todo-list__title" onclick=todoStatus(${i})>${data[i].status ? `${data[i].textTitle}` : `<del>${data[i].textTitle}</del>`}</p>
                   <button class="todo-list__button" onclick=todoDelete(${i})>Удалить</button>
               </div>
            </li>
          `
        }
        document.getElementById('todoList').innerHTML = text
    } else {
        document.getElementById('todoList').innerHTML = 'No active'
    }
}