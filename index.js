const body = document.querySelector('body');
const contents = document.querySelector('.contents');
const greeting = document.querySelector('.greeting');
const userName = document.querySelector('#userName');

const container = document.createElement('div');
const inner = document.createElement('div');
const form = document.createElement('form');
const input = document.createElement('input');
 


const renderUserName = () => {
    const userNameLS = localStorage.getItem("userName");
    if(userNameLS) {
        const now = new Date(); 
        const hours = now.getHours();
        const helloByHour = hours >= 12 && hours < 17 ? 'afternoon' : hours >= 17 && hours < 24 ? 'evening' : 'morning'; 
        greeting.innerText = `Good ${helloByHour}, ${userNameLS}.`;
    }else {
        askUserName();
    }
}

const askUserName = () => {
    contents.style.display = 'none';
    input.className = 'underline';
    inner.innerText = "Hello, What's Your Name?";
    container.className = 'css-center userNameContainer';
    form.id = "userName";
    form.appendChild(input);
    container.appendChild(inner);
    container.appendChild(form);
    body.appendChild(container);  
}

const handleSubmitUserName = (event) => {
    event.preventDefault();
    if(event.target.id !== 'userName') {
        return;
    }
    const name = input.value;
    const userNameContainer = document.querySelector('.userNameContainer');
    localStorage.setItem("userName", name);
    userNameContainer.style.display = 'none';
    contents.style.display = 'block';
    renderUserName();
}

const renderBackground = () => {
    const img = new Image();
    const url = "https://source.unsplash.com/1600x900/?nature,water";
    fetch(url).then((response) => {
        img.src = `${response.url}`;
        body.appendChild(img);
    })
}


document.addEventListener('submit', handleSubmitUserName);


const init = () => {
    renderBackground();
    renderUserName();
}

init();