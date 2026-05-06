const KEY = "weather_history";

export function saveToHistory(city) {
    let history = JSON.parse(localStorage.getItem(KEY)) || [];

    history = [city, ...history.filter(c => c !== city)].slice(0, 5);

    localStorage.setItem(KEY, JSON.stringify(history));
}

export function loadHistory() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}
