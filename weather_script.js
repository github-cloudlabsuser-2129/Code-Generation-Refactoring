const axios = require('axios');
const { formatWeatherData, displayError } = require('./weather-app/src/utils/helpers');
const { fetchWeatherData } = require('./weather-app/src/api/weather');

const apiKey = process.env.OPENWEATHERMAP_API_KEY;

async function init() {
    const city = 'London'; // You can change this to any city you want to fetch weather data for
    try {
        const weatherData = await fetchWeatherData(city, apiKey);
        const formattedData = formatWeatherData(weatherData);
        updateUI(formattedData);
    } catch (error) {
        displayError(error.message);
    }
}

function updateUI(data) {
    const weatherContainer = document.getElementById('weather');
    weatherContainer.innerHTML = data;
}

document.addEventListener('DOMContentLoaded', init);