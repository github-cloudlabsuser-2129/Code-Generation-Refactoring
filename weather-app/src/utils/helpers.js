const formatWeatherData = (data) => {
    if (!data || !data.main) {
        throw new Error('Invalid weather data');
    }

    const { temp, humidity } = data.main;
    const { description } = data.weather[0];

    return `
        <h2>Weather Information</h2>
        <p>Temperature: ${temp}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Description: ${description}</p>
    `;
};

const displayError = (message) => {
    const errorContainer = document.getElementById('error');
    errorContainer.innerHTML = `<p>Error: ${message}</p>`;
};

module.exports = { formatWeatherData, displayError };