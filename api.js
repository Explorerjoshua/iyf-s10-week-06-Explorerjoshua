const API_KEY = "a348afab7f6f3274d04e55f7554f8813";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeather(city) {
    const res = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);

    if (!res.ok) {
        if (res.status === 404) {
            throw new Error("City not found");
        }
        throw new Error("Failed to fetch weather");
    }

    return res.json();
}
