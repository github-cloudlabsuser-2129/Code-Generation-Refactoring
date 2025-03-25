const axios = require('axios');

// Obtén tu clave de API desde la variable de entorno
const apiKey = process.env.OPENWEATHERMAP_API_KEY;

// URL base de la API de OpenWeatherMap
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

/**
 * Obtiene los datos meteorológicos de una ciudad específica.
 * @param {string} city - Nombre de la ciudad.
 */
async function getWeather(city) {
    try {
        // Construir la URL con los parámetros necesarios
        const url = `${baseUrl}?q=${encodeURIComponent(city)}&appid=9c556efa6a4399f47329b0e0e8684bb7
&units=metric`;

        // Realizar la solicitud a la API
        const response = await axios.get(url);

        // Extraer y mostrar los datos relevantes
        const data = response.data;
        console.log(`Weather in ${data.name}, ${data.sys.country}:`);
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Feels like: ${data.main.feels_like}°C`);
        console.log(`Humidity: ${data.main.humidity}%`);
        console.log(`Condition: ${data.weather[0].description}`);
    } catch (error) {
        // Manejar errores
        if (error.response) {
            console.error(`Error: ${error.response.data.message}`);
        } else {
            console.error(`Error: ${error.message}`);
        }
    }
}

/**
 * Función principal para ejecutar el script.
 */
async function main() {
    const city = process.argv[2]; // Obtener la ciudad desde los argumentos de la línea de comandos
    if (!city) {
        console.error('Please provide a city name as an argument.');
        console.error('Usage: node weather_script.js <city>');
        return;
    }

    await getWeather(city);
}

// Ejecutar el script
main();