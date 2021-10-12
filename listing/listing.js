
const route ='https://jsonplaceholder.typicode.com/'
const db = {
    users:[],
    passwords:[],
}

const service = {
    getCategory : (category) => {
       return fetch(category)
    },
    test : () => {
        return "hello"
    }
}

const inputs = document.querySelectorAll("input")
const message = document.querySelector('.message')


const register = () => {
    const wrapper = document.querySelector(".wrapper")
  
    if (inputs[1].value !== inputs[2].value) {
        message.innerText = "Passwords do not match!"
        message.style.color = "red"
        return
    }
   
    db.users.push(inputs[0].value)
    db.passwords.push(inputs[1].value)
    message.innerText = "Registered successfully"
    message.style.color = "green"

    setTimeout(() =>{
        changeView()
    }, 500)

}


const changeView = () => {
   inputs[0].value = "";
   inputs[1].value = ""
   inputs[2].style.display = "none"
}

const login = () => {
    const { users, passwords } = db;
    let isExisting = false;

    for (let i = 0; i<users.length; i++) {
        if (users[i] === inputs[0].value && passwords[i] === inputs[1].value) {
            isExisting = true;
            break;
        }
   }

   if (isExisting) {
       relocate();
       return
   }

   message.innerText = "Wrong credentials"
   message.style.color = "red"
}


const relocate = () => {
    const body = document.querySelector("body")
    body.innerHTML = `
    ${navbar}
    ${hero}
    ${select}
    `
}

const mapResponseToHTML = (object) => {
    let node = '';
    for(const key in object){
        node+=`<p>${key} is ${object[key]}</p>`
    }

    console.log(node)

    return `<div>${node}</div>`;
}


const handleCategoryChange = (node) => {
    const newRoute = route+node.value;
    const body = document.querySelector("body")
    let container = "";

    const currentPage = 1;
    const size = 5;
    service.getCategory(newRoute)
    .then(response => response.json())
    .then(json => {
        const paginatedJson = json.slice(currentPage * size - 5, currentPage * size);
      for (const element of json){
        container+=mapResponseToHTML(element)
      }
      body.innerHTML+= container + pagination;
      const paginationWrapper = document.querySelector(".pages")
      for(const index in json){
          paginationWrapper.innerHTML +=`<div>${index}</div> `
      }
    })
}