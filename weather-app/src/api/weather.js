const axios = require('axios');

async function fetchWeatherData(city, apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch weather data: ' + error.message);
    }
}

module.exports = { fetchWeatherData };