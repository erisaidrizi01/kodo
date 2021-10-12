//const myRequest = fetch("https://jsonplaceholder.typicode.com/todos/1")
//console.log(myRequest); // promise
// pending // respending





// get post put patch delete


// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(function(response){
//     return response.json();
// })
// .then(function(json){
//     console.log(json)
// })


// const getData = () => {
//     const body = document.querySelector("body")
//     let content = "";

//    fetch("https://jsonplaceholder.typicode.com/todos/1")
//    .then(response => response.json())
//    .then(json => {
//     //    content = `
//     //   <p> this is my id ${json.id}</p>
//     //    <p> this is my user id ${json.userId}</p> 
//     //    <p> this is my status ${json.completed}</p> 
//     //    <p> this is my title ${json.title}</p> 
//     //    `
//     for (const key in json){
//         content +=`<p>this is my ${key}: ${json[key]}</p>`
//     }
//        body.innerHTML = content;
//    })
  
  
 

const route = "https://jsonplaceholder.typicode.com/comments"

const getData = () =>{
    const body = document.querySelector("body")
    fetch(route)
    .then(response => response.json())
    .then(json => {
       const divs = json.map(object => {
           let description = "<div>"
           for (const key in object){
            description +=`<p>${key}: ${object[key]}</p>`
           }
           return description + '</div>'
       })

       body.innerHTML = divs.join("")

        const persons = document.querySelectorAll("div")
        //
        
        persons.forEach(person => person.style.border = ("1px solid black"))
    })

}



const getSequential = () => {
    const time = new Date()

    fetch(route)
        .then(response => response.json())
        .then(json => console.log("single done", new Date() - time))

    fetch(route)
        .then(response => response.json())
        .then(json => console.log("first done"))
        .then(() => fetch(route))
        .then(response => response.json())
        .then(json => console.log("Second done"))
        .then(() => fetch(route))
        .then(response => response.json())
        .then(json => console.log("Second done"))
        .then(() => fetch(route))
        .then(response => response.json())
        .then(json => console.log("Second done"))
        .then(() => fetch(route))
        .then(response => response.json())
        .then(json => console.log("Second done"))
        .then(() => fetch(route))
        .then(response => response.json())
        .then(json => console.log("Second done"))
        .then(() => fetch(route))
        .then(response => response.json())
        .then(json => console.log("Second done"))
        .then(() => fetch(route))
        .then(response => response.json())
        .then(json => console.log("third done: ",new Date() - time))

}

const getOne = () =>{
    const time = new Date()
    fetch(route)
        .then(response => response.json())
        .then(json => console.log("single done async", new Date() - time))

        fetch(route)
        .then(response => response.json())
        .then(json => console.log("single done async", new Date() - time))

        fetch(route)
        .then(response => response.json())
        .then(json => console.log("single done async", new Date() - time))
}

const getParalel = () =>{
    const time = new Date();
 const requests = [];
 const parsedRequests = [];

 const array = new Array(100).fill(1);

 for (let i = 0; i<array.length; i++){
     requests.push(fetch(route))
 }

 //console.log(requests);

  Promise.all(requests).then(responses => {
      for (const response of responses)
    parsedRequests.push(response.json())
  })

  console.log(parsedRequests)

  Promise.all(parsedRequests).then((resp) =>{
      console.log(new Date() - time)
  })
}

