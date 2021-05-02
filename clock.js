const clock = document.querySelector(".clock");
const dDay = document.querySelector(".dDay");

const getDday = () => {
    const xmasDay = new Date("2021-12-25:00:00:00+0900");
    const currentDay = new Date();
    const diff = xmasDay - currentDay; //ms

    const chunkSec = (diff - (diff % 1000)) / 1000;
    const sec = chunkSec % 60;
    const chunkMin = (chunkSec - (chunkSec % 60)) / 60;
    const min = chunkMin % 60;
    const chunkHour = (chunkMin - (chunkMin % 60)) / 60;
    const hour = chunkHour % 24;
    const day = (chunkHour - (chunkHour % 24)) / 24;

    dDay.innerText = `✨ ${day} days until christmas! ✨`;
  }

  const getCurrentTime = () => {
      const now = new Date();
      const hours = `0${now.getHours()}`.slice(-2);
      const minutes = `0${now.getMinutes()}`.slice(-2);
      const seconds = `0${now.getSeconds()}`.slice(-2); 
      clock.innerText = `${hours}:${minutes}:${seconds}`;
  }

  const clockInit = () => {
    setInterval(getCurrentTime, 1000);
    getDday();
}
  

  clockInit();