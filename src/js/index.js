let load = document.getElementById('load');
let container = document.getElementById('container');
let handleTemp = document.getElementById('handleTemp');
let handleWeather = document.getElementById('handleWeather');
let handleWc = document.getElementById('handleWc');
let handleHum = document.getElementById('handleHum');
let handleLat = document.getElementById('handleLat');
let handleLon = document.getElementById('handleLon');
let wc2 = document.querySelector('#wcToggle');
let temp2 = document.querySelector('#tempToggle');
let hum2 = document.querySelector('#humToggle');
let ws2 = document.querySelector('#wsToggle');
let lat2 = document.querySelector('#latToggle');
let lon2 = document.querySelector('#lonToggle');



document.onreadystatechange = () => {
    setTimeout(() => {
        if(document.readyState == 'interactive') {
            load.style.visibility = 'block';
            container.style.display = 'none';
        }else if(document.readyState == 'complete') {
            load.style.display = 'none';
            container.style.display = 'flex';
        }
    },2000);
};

handleTemp.addEventListener('click', ($event) => {
    $event.preventDefault();
    temp2.classList.toggle('display-toggle');
});

handleWeather.addEventListener('click', ($event) => {
    $event.preventDefault();
    wc2.classList.toggle('display-toggle');

});

handleWc.addEventListener('click', ($event) => {
    $event.preventDefault();
    ws2.classList.toggle('display-toggle');

});

handleHum.addEventListener('click', ($event) => {
    $event.preventDefault();
    hum2.classList.toggle('display-toggle');

});

handleLat.addEventListener('click', ($event) => {
    $event.preventDefault();
    lat2.classList.toggle('display-toggle');

});

handleLon.addEventListener('click', ($event) => {
    $event.preventDefault();
    lon2.classList.toggle('display-toggle');

});