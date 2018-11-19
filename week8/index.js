function addTodo(event) {
  event.preventDefault() //this prevents the automatic refresh 
  const input = document.querySelector("#new-todo")
  const newTodo = input.value 
  console.log(newTodo)
  const div = document.querySelector("#todos")
  const listItem = document.createElement("li")
  listItem.innerText = newTodo 
  
  //cross out when clicked:
  listItem.addEventListener("click", (event) => {
    listItem.style.textDecoration = "line-through"
  })
  
  div.appendChild(listItem)
  input.value = "" //this resets the text field to blank after adding 
}

const button = document.querySelector("#submit-button")
button.addEventListener("click", addTodo)