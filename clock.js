const clock = document.querySelector(".clock");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const getDday = () => {
    const xmasDay = new Date("2021-12-24:00:00:00+0900");
    const currentDay = new Date();
    const diff = xmasDay - currentDay; //ms

    const chunkSec = (diff - (diff % 1000)) / 1000;
    const sec = chunkSec % 60;
    const chunkMin = (chunkSec - (chunkSec % 60)) / 60;
    const min = chunkMin % 60;
    const chunkHour = (chunkMin - (chunkMin % 60)) / 60;
    const hour = chunkHour % 24;
    const day = (chunkHour - (chunkHour % 24)) / 24;

    span[0].innerText = day;
    span[1].innerText = `0${hour}`.slice(-2);
    span[2].innerText = `0${min}`.slice(-2);
    span[3].innerText = `0${sec}`.slice(-2);
  }

  const getCurrentTime = () => {
      const now = new Date();
      hours.innerText = `0${now.getHours()}`.slice(-2);
      minutes.innerText = `0${now.getMinutes()}`.slice(-2);
      seconds.innerText = `0${now.getSeconds()}`.slice(-2);  
  }

  const getSpecialDate = () => {
      const specialDateLS = localStorage.getItem("specialDate");
  }


  setInterval(getCurrentTime, 1000);
