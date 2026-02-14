const URL = "https://chat2-oie2.onrender.com"

const inputBox = document.getElementById('message')
const submitBtn = document.getElementById('submit')
const divMessages = document.getElementById('messages')

submitBtn.addEventListener('click', async function(e) {
    e.preventDefault()

    await fetch( `${URL}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain"
        },
        body: `${inputBox.value}`
    })
    .then(res => res.text())
    // .then(data => console.log(data));
    
    inputBox.value = ''

    requestMessages()
})

window.addEventListener('load', function() {
    requestMessages()
})

async function requestMessages() {
    const result = await fetch(`${URL}/messages`)
    const data = await result.json()

    divMessages.innerHTML = ''

    data.forEach(el => {
        const pEl = document.createElement('p')
        
        pEl.innerHTML = el

        divMessages.appendChild(pEl)

    });

    // console.log(data)
}


const clearBtn = document.getElementById('clear').addEventListener('click', async function clearMessages() {
        await fetch(`${URL}/clearList`)
        requestMessages()
})