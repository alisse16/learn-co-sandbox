console.log('hi this is working')
console.log(document.querySelector('#third-div'))
console.log(document.querySelectorAll('div p'))

// 1. Create Elemnt 
let pTag = document.createElement('p')
// 2. Add text
pTag.innerText = "Some Text"
// 3. put it on the page 
let thrirdDiv = document.querySelector('#third-div')
thrirdDiv.appendChild(pTag)

//method chaining (putting two methods together so it's all at once)
document.querySelector('div p').remove()


// Data Types (Take all this out if you want to run the create element above)
Number: 1, 2, 3, 4, 3.4, 4/3
Boolean true false (3>4) -> false 
String: 'p' "tag"

'true' true //these are not the same! Types vs. Values 



//variable, named something with a value of 'another thing'
let something = "another thing"
//you have to do that BEFORE you run a command 

const constantVariable = 'unchangable'
constantVariable = 'changable?' //this will give you an error--you can't override a const 


//Data Types
Number: 1, 2, 3, 4, 3.4, 4/3
Boolean: true false (3>4) -> false 
String: 'p' "tag"
Object: 
Arrays: lists, undefined, null
Operations: 









