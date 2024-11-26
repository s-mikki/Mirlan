
let todoItems = [];
let todoAmount = 0;

function todoTasks () {
    let todoValueTitle = document.getElementById("todoInputTitle").value;
    let todoValueSubtitle = document.getElementById("todoInputSubtitle").value;
    todoItems.push({
        id: todoAmount,
        textTitle: todoValueTitle,
        textSubtitle: todoValueSubtitle,
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
                    <div class="todo-list__texts">
                      <p class="todo-list__title">${todoItems[i].status ? `${todoItems[i].textTitle}` : `<del>${todoItems[i].textTitle}</del>`}</p>
                      <p class="todo-list__subtitle">${todoItems[i].status ? `${todoItems[i].textSubtitle}` : `<del>${todoItems[i].textSubtitle}</del>`}</p>
                    </div>
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
        textTitle: todoItems[index].textTitle,
        textSubtitle: todoItems[index].textSubtitle,
        status: todoItems[index].status === true ? false : true,
    }
    todoShowTasks()
}

function todoDelete (index) {
    todoItems = todoItems.filter(i => i.id !== todoItems[index].id)
    todoShowTasks()
}

function todoAll () {
    todoShowTasks()
}

function todoActive () {
    let data = todoItems.filter(i => i.status == true);
    if(data.length > 0){
        let text = ""
        for (let i = 0; i<data.length; i++){
            text = text +
          `
            <li class="todo-list__item">
               <div class="todo__block">
                    <div class="todo-list__texts">
                      <p class="todo-list__title">${data[i].status ? `${data[i].textTitle}` : `<del>${data[i].textTitle}</del>`}</p>
                      <p class="todo-list__subtitle">${data[i].status ? `${data[i].textSubtitle}` : `<del>${data[i].textSubtitle}</del>`}</p>
                    </div>
                   <button class="todo__button" onclick=todoStatus(${i})>вычеркнуть</button>
                   <button class="todo__button" onclick=todoDelete(${i})>Удалить</button>
               </div>
            </li>
          `
        }
        document.getElementById('todoListItem').innerHTML = text
    }else{
        document.getElementById('todoListItem').innerHTML = 'No active'
    }
}

function todoCompleted () {
    let data = todoItems.filter(i => i.status == false);
    if(data.length > 0){
        let text = ""
        for (let i = 0; i<data.length; i++){
            text = text +
          `
            <li class="todo-list__item">
               <div class="todo__block">
                    <div class="todo-list__texts">
                      <p class="todo-list__title">${data[i].status ? `${data[i].textTitle}` : `<del>${data[i].textTitle}</del>`}</p>
                      <p class="todo-list__subtitle">${data[i].status ? `${data[i].textSubtitle}` : `<del>${data[i].textSubtitle}</del>`}</p>
                    </div>
                   <button class="todo__button" onclick=todoStatus(${i})>вычеркнуть</button>
                   <button class="todo__button" onclick=todoDelete(${i})>Удалить</button>
               </div>
            </li>
          `
        }
        document.getElementById('todoListItem').innerHTML = text
    } else {
        document.getElementById('todoListItem').innerHTML = 'No active'
    }
}


let box = [
    {
        id:1,
        country:'Germany',
        code:'+49',
        short_name:'DE'
    },
    {

    }
]