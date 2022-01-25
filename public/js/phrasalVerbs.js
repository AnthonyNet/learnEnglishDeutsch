//Text from search input
const filters = {
    searchingText: ""
}

let renderToDos = function(ourToDos, weSearching){
    let ourResults = ourTodos.filter(function(oneToDo){
        return oneToDo.text.toLowerCase().includes(
            weSearching.searchingText.toLowerCase()
        )
    })
}

// Loading text from input
let searchText = document.querySelector('#search-text')
searchText.addEventListener('input', function(event){
  filters.searchingText =  event.target.value
  console.log(filters)
})

// How the f save data to variable?

/*
var obj;
console.log(obj)
fetch("../json/phrasal_verbs.json")
  .then(response => response.json())
  .then(json => obj = json)
  .then(obj => console.log(obj));



  async function githubUsers() {
    let response = await fetch('../json/phrasal_verbs.json')
    var users = await response.json()
    
    console.log(users)
    
}

githubUsers()


var promise = get('https://catfact.ninja/fact')

promise.then(
    res => console.log( JSON.parse(res) )
). catch(
    err => console.error(err, 'OH NO!')
);
*/