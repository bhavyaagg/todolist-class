/**
 * Created by bhavyaagg on 16/9/17.
 */
  let list= null;

window.onload = function () {
  list = document.getElementById('list');
  let addNewTodo = document.getElementById('add-new-todo');
  let addBtn = document.getElementById('add-btn');
  let delBtn = document.getElementById('del-btn');

  addBtn.onclick = function () {
    let todoValue = addNewTodo.value;

    let newListItem = document.createElement('li');
    newListItem.className = 'list-group-item';
    newListItem.innerText = todoValue;

    list.appendChild(newListItem);

  }



}