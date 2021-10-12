const route = "https://jsonplaceholder.typicode.com/users"

const getUsers = () => {
    const body = document.querySelector("body")
    fetch(route)
    .then(response => response.json())
    .then(json => {
        const data =json.map(object => {
            let node = ""
            const flattenedObject = flatten(object);
            for (const key in flattenedObject){
                node += `<p>${key} is ${flattenedObject[key]}</p>`
            }
            node = `<div>${node}</div>`
            return node;
        })
        body.innerHTML = data.join("");
        const divs = document.querySelectorAll("div");
        for (const div  of  divs) {
            div.style.border = "5px solid red"
            div.style.margin = "5px"
            div.style.padding = "5px"
        }
    })

}



const flattenedObject = {};

const flatten = (object) => {
   
    for (const key in object){
        if (key === "company") {
            object[key] = {
                ...object[key],
               companyName: object[key].name
            }
            delete object[key].name
        }
        if (typeof object[key] !== 'object') {
            flattenedObject[key] = object[key]
        } else {
           flatten(object[key])
        }
    }
    return flattenedObject;
}

// console.log(flatten({
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }))