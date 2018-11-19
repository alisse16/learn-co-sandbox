// to build your URL: server, ? to add options, apikey, & then options 
//fetch("http://www.omdbapi.com/?apikey=c87ebb66&t=iron+man")
//then tell it to do something after the fetch finishes
//.then((movieResponse) => movieResponse.json()) //converting it to Json makes it readable -->makes it an Object 
//.then((movieJson) => {
 // const title = document.querySelector("#title")
 // const rating = document.querySelector("#rating")
 // const year = document.querySelector("#year")
  
 // title.innerText = movieJson['Title']
 // rating.innerText = movieJson['Rating']
//  year.innerText = movieJson['Year']
//})

//console.log(1 + 2)

const submitButton = document.querySelector('#submit')
submitButton.addEventListener('click', (event) => {
  const input = document.querySelector('input')
  const movieName = input.value
  fetch("http://www.omdbapi.com/?apikey=c87ebb66&t=" + movieName)
    .then((resp) => resp.json())
    .then((movieJson) => {
      const title = document.querySelector("#title")
      const rating = document.querySelector("#rated")
      const year = document.querySelector("#year")
  
      title.innerText = movieJson['Title']
      rated.innerText = movieJson['Rated']
      year.innerText = movieJson['Year']
      
      const poster = document.querySelector('#movie-poster')
      poster.src = movieJson['Poster']
    })
})



