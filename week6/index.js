//create it 
const paragraphOne = document.createElement('p')
//fill it
paragraphOne.innerText = 'Hi I am a paragraph '
//connect it (1. find a place 2.append child)
document.querySelector('#container')
const ourDiv = document.querySelector('#container')
ourDiv.appendChild(paragraphOne)


function addParagraphToHTML(message) {
  if (message !== undefined) {
    //if the message is not undefined 
  const paragraphOne = document.createElement('p')
  paragraphOne.innerText = message 
  const ourDiv = document.querySelector('#container')
  ourDiv.appendChild(paragraphOne)}
  else {
    console.log ("you must give a message")
  }
}
addParagraphToHTML("the first")
addParagraphToHTML("the second")
addParagraphToHTML("the third")
addParagraphToHTML()

//DATA STRUCTURES: Arrays & Objects  

//Arrays are lists. They use []. Order matters. 
const myFirstArray = []
const students = ['jesse', 'yana', 'julie']
       //  indexes: 0        1       2
console.log(students[1])
// mutative/destructive command (push/unshift)
students.push('Grace') //add to end
students.unshift('Melissa') //add to beginning
//OR copy the array and then change it--non-destructive 
const studentCopy = students.slice() //copies the whole thing, unless you put #s in the slice part. 
studentCopy.push('stuffff')

//How to remove
const states = ['NY', 'NJ', 'CT', 'CA']
states.pop() //the opposite of push, always takes off the end
states.shift() //takes off the beginning 
//non-destructive way 
const statesCopy = states.slice()
statesCopy.pop()

//OBJECTS 
const person = {
  name: "Alisse", //key and value
  location: 'New York',
  occupation: "cool"
}

console.log(person.name) //this will print Alisse
person.name = "Not Alisse" //this will change it
person.phone = "55555" //this will add it
person.email = "test@test.com"

//a way to do it without changing the original
const personCopy = Object.assign({}, person) //starting point, what you put in it OR below does the same thing: 
const personCopy = {...person}
delete personCopy.email


// Iteration (over and over, in a loop)
for (let i = 0; i < 10; i += 1) {
  console.log ('hi') //this will print 10 times
}

const messages = ["hey", "hi", "bye"]
for (let i=0; i<3; i +=1) {
  const currentMessage = messages [i]
  console.log(currentMessage + "!") //adds ! to the end of each
}
//another way: 
for (let currentMessage of messages) {
  console.log(currentMessage + "!")
}

//AND FOR OBJECTS
const person = {
  name: "Alisse", //key and value
  location: 'New York',
  occupation: "cool"
}
for (let details in person) {
  console.log(person[details])
}







