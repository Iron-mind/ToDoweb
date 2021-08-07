
var toDoItems = new Array()


function ToDo (description) {
  // Tu código acá:
  this.description = description
  this.complete = false


}



ToDo.prototype.completeToDo= function () {
  this.complete= true

}



function buildToDo(todo, index) {

  var toDoShell = document.createElement('div');
  toDoShell.setAttribute("class", 'toDoShell')

  var toDoText = document.createElement('span');
  toDoText.innerHTML = todo.description
  toDoText.setAttribute("id" , index)

  if (todo.complete) {

    toDoText.setAttribute("class","completeText")

  }

  toDoText.addEventListener("click",completeToDo)
  toDoShell.appendChild(toDoText)
  return toDoShell


}


function buildToDos(toDos) {

  return toDos.map(function (e,i){return buildToDo(e,i)})

}



function displayToDos() {

  var toDoContainer = document.getElementById("toDoContainer")
  toDoContainer.innerHTML = ""
  var arr = buildToDos(toDoItems)

  for (let i = 0; i < arr.length; i++) {
    toDoContainer.appendChild(arr[i]) ;

  }

}


function addToDo() {
  // Tu código acá:
  var newTodo = new ToDo(document.getElementById("toDoInput").value)
  toDoItems.push(newTodo)
  document.getElementById("toDoInput").value = ""
  displayToDos()

}


document.getElementById("addButton").addEventListener("click",addToDo)




function completeToDo(event) {
  const index = event.target.id;
  toDoItems[index].completeToDo()
  displayToDos()

}

var span = document.getElementById("createdBy")
span.innerHTML += " Juan David Tovar Montoya"
displayToDos()

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
