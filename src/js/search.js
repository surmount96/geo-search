let input = document.getElementById('input');
let locationDisp = document.getElementById('location');
let city = document.getElementById('city');
let locationData = document.getElementById('content-sub');
let temp = document.querySelector('#temp');
let hum = document.querySelector('#hum');
let lat = document.querySelector('#lat');
let lon = document.querySelector('#lon');
let ws = document.querySelector('#ws');
let wc = document.querySelector('#wc');



input.addEventListener('change', ($event) => {
    let location = $event.target.value;
    city.textContent = location.toUpperCase();

    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' +location +'&APPID=55fc66345d068a63d89057b952678e82';

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        locationDisp.textContent = ' ' + data.sys.country;
        temp.innerHTML = convertKelvin(data.main.temp) + ' <sup>o</sup>C';
        hum.textContent = data.main.humidity;
        wc.textContent = data.weather[0].main;
        ws.innerHTML = data.wind.speed + ` ms<sup>-1</sup>`;
        lat.textContent = data.coord.lat;
        lon.textContent = data.coord.lon;
    }).catch((err) => {
        alert('Network Error');
    });



}); 

function convertKelvin(data) {
    return Math.floor((data - 273));
}
