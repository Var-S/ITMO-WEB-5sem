function showErrMsgDetails() {
    const errorDetails = document.getElementById('errorMsgDetails');
    if (errorDetails.style.display === 'none') {
        errorDetails.style.display = 'block';
    } else {
        errorDetails.style.display = 'none';
    }
}

function createErrorMsg(ern) {
    const errMsg = document.createElement("div");
    errMsg.innerText = "Что-то пошло не так";
    errMsg.innerHTML += "<div id='errorMsg'>Подробнее<div id='errorMsgDetails' class='hidden'>${err}</div></div>";
    errMsg.addEventListener("click", showErrMsgDetails);
    document.getElementsByClassName("shopping-list")[0].appendChild(errMsg);
}

async function fetchDisplayFeedbacks() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${Math.floor(Math.random() * 10) + 1}`);
        if (!response.ok) {
            throw new Error(`Что-то пошло не так: ${response.status} - ${response.statusText}`);
        }
        response.json().then(json => {
            addItemToList(json.name)
        })
    } catch (err) {
        createErrorMsg(err)
    }
}

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader')
    preloader.classList.add('preloader_hidden')
})

window.addEventListener('DOMContentLoaded', fetchDisplayFeedbacks);
