# Weather App

This is a simple weather application that fetches weather data from the OpenWeatherMap API and displays it to the user. 

## Project Structure

```
weather-app
├── src
│   ├── weather_script.js      # Main script for fetching and displaying weather data
│   ├── api
│   │   └── weather.js         # API calls to OpenWeatherMap
│   ├── utils
│   │   └── helpers.js         # Utility functions for formatting data and displaying errors
│   └── index.html             # HTML structure of the application
├── package.json                # npm configuration file
└── README.md                   # Project documentation
```

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- An OpenWeatherMap API key. You can sign up for a free account at [OpenWeatherMap](https://openweathermap.org/).

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd weather-app
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   OPENWEATHERMAP_API_KEY=your_api_key_here
   ```

### Running the Application

1. Open `index.html` in your web browser.
2. The application will automatically fetch and display the weather data for London. You can modify the city in the `weather_script.js` file to fetch data for a different location.

### Usage

- The application fetches weather data and formats it for display.
- In case of an error (e.g., invalid city name or network issues), an error message will be displayed to the user.

### Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project. 

### License

This project is open-source and available under the MIT License.