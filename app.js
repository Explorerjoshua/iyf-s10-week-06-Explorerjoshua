import { getWeather } from "./src/api.js";
import { displayWeather, showLoading, hideLoading, showError, clearError } from "./src/ui.js";
import { saveToHistory, loadHistory } from "./src/storage.js";

const form = document.getElementById("search-form");
const input = document.getElementById("city-input");
const historyList = document.getElementById("search-history");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const city = input.value.trim();
    if (!city) return;

    try {
        showLoading();
        clearError();

        const data = await getWeather(city);

        displayWeather(data);
        saveToHistory(city);
        renderHistory();

    } catch (err) {
        showError(err.message);
    } finally {
        hideLoading();
    }
});

function renderHistory() {
    const history = loadHistory();

    historyList.innerHTML = history.map(city =>
        `<li onclick="searchAgain('${city}')">${city}</li>`
    ).join("");
}

window.searchAgain = async function(city) {
    input.value = city;
    form.dispatchEvent(new Event("submit"));
};

// Initialize
renderHistory();
