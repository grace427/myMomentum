const body = document.querySelector('body');
const contents = document.querySelector('.contents');
const greeting = document.querySelector('.greeting');
const hello = document.querySelector('#hello');
const userName = document.querySelector('#userName');
 


const renderUserName = () => {
    const userNameLS = localStorage.getItem("userName");
    if(userNameLS) {
        userName.innerText = userNameLS;
    }else {
        askUserName();
    }
}

const askUserName = () => {
    const wrapper = document.createElement('div');
    const inner = document.createElement('div');
    const input = document.createElement('input');
    
    contents.style.display = 'none';
    input.className = 'underline userName';
    inner.innerText = "Hello, What's Your Name?";
    wrapper.classList.add('css-center');
    wrapper.appendChild(inner);
    wrapper.appendChild(input);
    body.appendChild(wrapper);  
}

const handleSubmitUserName = (event) => {
    if(event.code !== 'Enter') {
        return;
    }
    const name = event.target.value;
    console.log(name);
}

const renderGreeting = () => {

}

document.addEventListener('keydown', handleSubmitUserName);


const init = () => {
    renderUserName();
}

init();