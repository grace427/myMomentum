const API_KEY = "5cb7b09b3d672739bcde95fd87a1fc75";
const COORDS = "coords";
const weather = document.querySelector('.weather');


const getWeather = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(res => {
        const city = res.name;
        const temp = res.main.temp;
        weather.innerText = ` ${Math.round(temp)}° \n${city}`;
    })
}

const saveCoords = (geoObj) => {
    localStorage.setItem(COORDS, JSON.stringify(geoObj));
}

const handleGeoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const geoObj = {
        latitude,
        longitude
    };
    saveCoords(geoObj);
    getWeather(latitude, longitude);
}

const handleGeoError = () => {
    console.log("Can't access geo location");
}

const askCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

const loadCoords = () => {
    const storedCoords = localStorage.getItem(COORDS);
    if(storedCoords) {
        const parseCoords = JSON.parse(storedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }else {
        askCoords();
    }
} 

const weatherInit = () => {
    loadCoords();
}

weatherInit();