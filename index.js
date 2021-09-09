const apiKey = '60254d87cb0ab62b7507eff1994021f7';
const temp = document.getElementById('temp');
const description = document.getElementById('description');
const cityName = document.getElementById('city');
let city = cityName.innerText;
function loadApi() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => displayDate(data));
}

function displayDate(data) {
    console.log(data)

    if (data.cod == 200) {
        document.getElementById('validation').innerText = '';
        temp.innerText = data.main.feels_like;
        description.innerText = data.weather[0].description;
        const icon = data.weather[0].icon;
        cityName.innerText = data.name;
        document.getElementById("icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    }
    else {
        document.getElementById('validation').innerText = 'please enter a valid city';
    }
}

function searchBtn() {
    const searchInput = document.getElementById('searchInput');
    city = searchInput.value;
    loadApi();
}
loadApi();