const body = document.querySelector('body');
const contents = document.querySelector('.contents');
const greeting = document.querySelector('.greeting');
const userName = document.querySelector('#userName');
 


const renderUserName = () => {
    const userNameLS = localStorage.getItem("userName");
    if(userNameLS) {
        const now = new Date(); 
        const hours = now.getHours();
        const helloByHour = hours >= 12 && hours < 17 ? 'afternoon' : hours >= 17 && hours < 21 ? 'evening' : 'morning'; 
        greeting.innerText = `Good ${helloByHour}, ${userNameLS}.`;
    }else {
        askUserName();
    }
}

const askUserName = () => {
    const container = document.createElement('div');
    const inner = document.createElement('div');
    const input = document.createElement('input');
    
    contents.style.display = 'none';
    input.className = 'underline';
    inner.innerText = "Hello, What's Your Name?";
    container.className = 'css-center userNameContainer';
    container.appendChild(inner);
    container.appendChild(input);
    body.appendChild(container);  
}

const handleSubmitUserName = (event) => {
    if(event.code !== 'Enter') {
        return;
    }
    const name = event.target.value;
    const userNameContainer = document.querySelector('.userNameContainer');
    localStorage.setItem("userName", name);
    userNameContainer.style.display = 'none';
    contents.style.display = 'block';
}

const renderGreeting = () => {

}

document.addEventListener('keydown', handleSubmitUserName);


const init = () => {
    renderUserName();
}

init();