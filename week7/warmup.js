//get the button, then add the event for the button
const button = document.querySelector('#add')
button.addEventListener('click', (event) => {
  // 1. find the div
  const div = document.querySelector("#total")
  // 2. change the # in the div (first save the old value, then add one)
  const oldValue = parseInt(div.innerText, 10)
  div.innerText = oldValue + 1
} )

//same thing for minus button
const subtractButton = document.querySelector('#subtract')

subtractButton.addEventListener('click', (event) => {
  const div = document.querySelector("#total")
  const oldValue = parseInt(div.innerText, 10)
  div.innerText = oldValue - 1
  //make sure you can't go below 0
  if (div.innterText === '0') {
  return
}
} )
