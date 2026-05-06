export function showLoading() {
    document.getElementById("loading").classList.remove("hidden");
}

export function hideLoading() {
    document.getElementById("loading").classList.add("hidden");
}

export function showError(msg) {
    const error = document.getElementById("error");
    error.textContent = msg;
    error.classList.remove("hidden");
}

export function clearError() {
    document.getElementById("error").classList.add("hidden");
}

export function displayWeather(data) {
    document.getElementById("city-name").textContent =
        `${data.name}, ${data.sys.country}`;

    document.getElementById("temperature").textContent =
        `${Math.round(data.main.temp)}°C`;

    document.getElementById("description").textContent =
        data.weather[0].description;

    document.getElementById("feels-like").textContent =
        `${Math.round(data.main.feels_like)}°C`;

    document.getElementById("humidity").textContent =
        `${data.main.humidity}%`;

    document.getElementById("wind").textContent =
        `${data.wind.speed} m/s`;

    document.getElementById("pressure").textContent =
        `${data.main.pressure} hPa`;

    document.getElementById("weather-icon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById("weather-display").classList.remove("hidden");
}
