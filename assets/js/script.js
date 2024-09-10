// fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Houston&limit=5&appid=ab9a4618f4fd7b68e0f4639526fc2fbe`, {
//     method: 'GET',
//     credentials: 'same-origin',
//     redirect: 'follow',
// })
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     console.log(data);
// })
    
const cityForm = document.getElementById("cityForm")
const cityInput = document.getElementById("cityInput")


function handleSubmit(event) {
    event.preventDefault()
    const cityName = cityInput.value.trim();

    if(cityName) {
        getCityApi(cityName);
    }
    else {
        alert('Please enter a city')
    }
    
}

function getCityApi(cityName) {
    const weatherApiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&limit=5&appid=ab9a4618f4fd7b68e0f4639526fc2fbe&units=imperial`

    fetch(weatherApiUrl)
        .then(function(response) {
            if(response.ok) {
                return response.json()
                .then(function (data) {
                    displayWeather(data,cityName)
                })
            }
            else {
                alert('connection not available')
            }
        })
}

function displayWeather(data, cityName) {
    console.log(data, cityName)
}

cityForm.addEventListener('submit', handleSubmit)