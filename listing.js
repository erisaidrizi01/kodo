const db = {
    users:[],
    passwords:[],
}

const inputs = document.querySelectorAll("input")

const register = () => {
    const wrapper = document.querySelector(".wrapper")
    const message = document.querySelector('.message')
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
    }, 3000)

}


const changeView = () => {
   inputs[0].value = "";
   inputs[1].value = ""
   inputs[2].style.display = "none"
   console.log(inputs[2], db)
}