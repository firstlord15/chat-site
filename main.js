const chat = document.querySelector(".chat")
const text = document.querySelector("input")
const Clear = document.querySelector('#Clear')

const func = function() {
    if (text.value.trim() != "") {
        if (text.value.length >= 20 && text.value.length < 40) {
            let long = (text.value.length / 2)
            chat.innerHTML += '<div class="body-message" style="width: ' + long + 'rem' + '!important"><div class="body-ch"><p class="message-text">' + text.value + '</p></div></div>'
        } else if (text.value.length >= 40) {
            let pad = 0
            if (text.value.length % 2 == 0) {
                pad = Math.floor(text.value.length / 40) + 1
            } else {
                pad = Math.floor(text.value.length / 40) + 2
            }
            chat.innerHTML += '<div class="body-message" style="height: ' + pad + 'rem' + '!important"><div class="body-ch"><p class="message-text">' + text.value + '</p></div></div>'
        } else {
            chat.innerHTML += '<div class="body-message" style="width: 10rem!important"><div class="body-ch"><p class="message-text">' + text.value + '</p></div></div>'
        }
        if (text.value.trim() == "Привет" || text.value.trim() == "привет") {
            chat.innerHTML += '<div class="body-bot-message"><div class="body-ch"><p class="message-text"> Привет </p></div></div>'
        };
        text.value = ""
    }
}

function clickPress(event) {
    if (event.keyCode === 13) {
        func()
    }
}

Clear.onclick = () => {
    chat.innerHTML = ""
}