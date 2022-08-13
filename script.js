
var toDoItems = new Array()
if (localStorage.getItem("toDoItems") == null) {
  localStorage.setItem("toDoItems", JSON.stringify(toDoItems))
}
//toDoItems = localStorage.getItem("toDoItems")

if (JSON.parse(localStorage.getItem('toDoItems')).length > 0) {
  toDoItems = JSON.parse(localStorage.getItem('toDoItems')).map((elem => new ToDo(elem.description)))
  displayToDos()
}

function ToDo(description) {
  // Tu código acá:
  this.description = description
  this.complete = false


}



ToDo.prototype.completeToDo = function () {

  this.complete = true

}



function buildToDo(todo, index) {

  var toDoShell = document.createElement('div');
  toDoShell.setAttribute("class", 'toDoShell')
  var todoBtn = document.createElement('button');
  var toDoText = document.createElement('span');
  toDoText.innerHTML = todo.description
  todoBtn.innerHTML = 'x'
  todoBtn.style.backgroundColor = 'red'
  todoBtn.style.color = 'white'

  toDoText.setAttribute("id", index)
  if (todo.complete) {

    toDoText.setAttribute("class", "completeText")

  }
  todoBtn.setAttribute("id", index)
  todoBtn.addEventListener("click", deleteToDo)
  toDoText.addEventListener("click", completeToDo)
  toDoShell.appendChild(toDoText)
  toDoShell.appendChild(todoBtn)
  toDoShell.style.display = "flex"
  toDoShell.style.justifyContent = "space-between"
  return toDoShell


}


function buildToDos(toDos) {

  return toDos.map(function (e, i) { return buildToDo(e, i) })

}



function displayToDos() {

  var toDoContainer = document.getElementById("toDoContainer")
  toDoContainer.innerHTML = ""
  var arr = buildToDos(JSON.parse(localStorage.getItem('toDoItems')))

  for (let i = 0; i < arr.length; i++) {
    toDoContainer.appendChild(arr[i]);

  }

}


function addToDo() {
  // Tu código acá:
  if (document.getElementById("toDoInput").value == "") {
    displayToDos()

  }
  else {
    var newTodo = new ToDo(document.getElementById("toDoInput").value)
    toDoItems.push(newTodo)
    localStorage.setItem("toDoItems", JSON.stringify(toDoItems))
    localStorage.setItem("funciona", 'aja')

    document.getElementById("toDoInput").value = ""
    displayToDos()

  }


}


document.getElementById("addButton").addEventListener("click", addToDo)




function completeToDo(event) {
  const index = event.target.id;
  toDoItems[index].completeToDo()

  localStorage.setItem("toDoItems", JSON.stringify(toDoItems))

  displayToDos()

}

var span = document.getElementById("createdBy")
span.innerHTML += " Juan David Tovar Montoya"
displayToDos()

function deleteToDo(event) {
  const index = event.target.id;
  toDoItems.splice(index, 1)
  localStorage.setItem("toDoItems", JSON.stringify(toDoItems))
  displayToDos()
}



// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo
  };
}


