/**
 * Created by bhavyaagg on 16/9/17.
 */
  let list= null;
  let listElements = [];

window.onload = function () {
  list = document.getElementById('list');
  let addNewTodo = document.getElementById('add-new-todo');
  let addBtn = document.getElementById('add-btn');
  let delBtn = document.getElementById('del-btn');


  addBtn.onclick = function () {
    let todoValue = addNewTodo.value;
    addTodo(todoValue);
    showTodos();
    
  }
  
  function showTodos() {
    list.innerHTML="";
    for(i in listElements){
      addListItem(listElements[i].task,listElements[i].done,i);
    }
  }

  function addListItem(todoValue,done,id){
    let newListItem = document.createElement('li');
    newListItem.setAttribute('data-id',id);
    newListItem.className = 'list-group-item';

    let checkBox = document.createElement('input');
    checkBox.className = 'col-1'
    checkBox.setAttribute('type','checkbox');
    checkBox.onchange = strikeSpan;

    let span = document.createElement('span');
    span.className = 'col-8'
    span.innerText = todoValue;
    if(done){
      checkBox.setAttribute('checked',true);
      span.style.textDecoration = 'line-through';
    }


    let deleteBtn = document.createElement('i');
    deleteBtn.className = 'col-1 fa fa-times'
    deleteBtn.onclick = deleteTodo;

    let moveUpBtn = document.createElement('i');
    moveUpBtn.className = 'col-1 fa fa-chevron-up'

    let moveDownBtn = document.createElement('i');
    moveDownBtn.className = 'col-1 fa fa-chevron-down'

    newListItem.appendChild(checkBox);
    newListItem.appendChild(span);
    newListItem.appendChild(deleteBtn);
    newListItem.appendChild(moveUpBtn)
    newListItem.appendChild(moveDownBtn);

    list.appendChild(newListItem);

  }

  function addTodo(todoTask) {
    let newTask = {
      task: todoTask,
      done: false
    }

    listElements.push(newTask);
  }

  function deleteTodo(event) {
    let index = event.target.parentElement.getAttribute('data-id');
    listElements.splice(index,1);
    showTodos();
  }
  
  function strikeSpan(event) {
    let index = event.target.parentElement.getAttribute('data-id');
    listElements[index].done = event.target.checked;
    showTodos();
  }
}