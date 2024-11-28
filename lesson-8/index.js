
let todoItems = [];
let todoInput = document.getElementById("todoListInput");
let todoAmount = 0;

function todoTasks () {
    let todoValue = document.getElementById("todoListInput").value;
    todoItems.push({
        id: todoAmount,
        text: todoValue,
        status: true,
    })
    todoAmount++;
    todoShowTasks()
}

function todoShowTasks () {
    let text = ""
    for (let i = 0; i<todoItems.length; i++) {
        text = text +
          `
            <li class="todo-list__item">
               <div class="todo__block">
                   ${todoItems[i].status ? `${todoItems[i].text}` : `<del>${todoItems[i].text}</del>`}
                   <button class="todo__button" onclick=todoStatus(${i})>вычеркнуть</button>
                   <button class="todo__button" onclick=todoDelete(${i})>Удалить</button>
               </div>
            </li>
          `
    }
    document.getElementById('todoListItem').innerHTML = text
}

function todoStatus (index) {
    todoItems[index] = {
        id: todoItems[index].id,
        text: todoItems[index].text,
        status: todoItems[index].status === true ? false : true,
    }
    todoShowTasks()
}

function todoDelete (index) {
    todoItems = todoItems.filter(i => i.id !== todoItems[index].id)
    todoShowTasks()
}

function todoAll () {
    todo
}

function todoActive () {

}

function todoCompleted () {

}
