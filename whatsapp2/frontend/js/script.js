//login elementos
const login = document.querySelector(".login")
const loginForm = login.querySelector(".login_form")
const loginInput = login.querySelector(".login_input")

//chat elementos
const chat = document.querySelector(".chat")
const chatForm = chat.querySelector(".chat_form")
const chatInput = chat.querySelector(".chat_input")
const chatMessages = chat.querySelector(".chat_menssagens")





const colors = [
    "#1abc9c", "#3498db", "#9b59b6", "#e74c3c", "#f1c40f", "#2ecc71", "#e67e22", "#16a085",
    "#ff5733", "#ffbd33", "#75ff33", "#33ff57", "#33ffbd", "#3375ff", "#7533ff", "#bd33ff",
    "#ff33bd", "#ff3375", "#ff3366", "#66ff33", "#33ff66", "#33ccff", "#ff9933", "#ff6699"
];


const user = { id: "", name: "", color: "" }

let websocket

const createMessageSelfElement = (content) => {
    const div = document.createElement("div")

    div.classList.add("message_self")
    div.innerHTML = content

    return div
}
const createMessageOtherElement = (content, sender, senderColor) => {
    const div = document.createElement("div")
    const span = document.createElement("span")

    div.classList.add("message_other")
    span.classList.add("massage_sender")
    span.style.color = senderColor

    div.appendChild(span)
    
    span.innerHTML = sender
    div.innerHTML += content  

    return div
}

const scrollScreen = () => {
    window.scrollTo({
        top: document.body.scrollHeight
    ,behavior:"smooth"
    })
}

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

const processMessage = ({data}) => {
    const { userId, userName, userColor, content } = JSON.parse(data)

    const message =
        userId == user.id 
        ? createMessageSelfElement (content)
        : createMessageOtherElement(content,userName,userColor)

        chatMessages.appendChild(message)

        scrollScreen()
}



const handleLogin = (event) => {
    event.preventDefault();
    user.color = getRandomColor()
    user.id = crypto.randomUUID()
    user.name = loginInput.value;

    login.style.display = "none"
    chat.style.display = "flex"

    websocket = new WebSocket("ws://localhost:8080")
    websocket.onmessage = processMessage

    console.log(user);
}

const sendMenssage = (event) => {
    event.preventDefault()

    const message = {
        userId: user.id,
        userName: user.name,
        userColor: user.color,
        content: chatInput.value
    }

    websocket.send(JSON.stringify(message))

    chatInput.value = ""
}

loginForm.addEventListener("submit", handleLogin)
chatForm.addEventListener("submit", sendMenssage)