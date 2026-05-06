# Weather Dashboard App 🌦️

## 📌 Overview

This Weather Dashboard is a JavaScript-based web application that fetches and displays real-time weather data using the OpenWeatherMap API.

It demonstrates practical use of **asynchronous programming (Promises, async/await)**, **API integration**, and **dynamic DOM updates** to build a responsive user interface.

---

## 🚀 Live Preview (Optional but Powerful)

> Add a screenshot or deployed link here

```
Example:
https://your-live-link.com
```

---

## 🎯 How It Works

1. User enters a city name
2. Application sends a request to the OpenWeatherMap API
3. Weather data is fetched asynchronously
4. UI updates dynamically with the results
5. Search is saved to history for quick reuse

---

## 🚀 Features

* Search weather by city name
* Real-time API data fetching
* Displays:

  * City & country
  * Temperature (°C)
  * Weather condition
  * Feels-like temperature
  * Humidity
  * Wind speed
  * Pressure
* Weather icon rendering
* Loading state during API calls
* Error handling:

  * Invalid city
  * Network failure
* Persistent search history (localStorage)

---

## 🧠 Concepts Applied

* Asynchronous JavaScript:

  * Callbacks
  * Promises
  * Async/Await
* Fetch API
* Error handling with try/catch
* DOM manipulation
* Event-driven programming
* LocalStorage (data persistence)

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)

---

## 📂 Project Structure

```
iyf-s10-week-06-Explorerjoshua/
│
├── index.html        # UI structure
├── styles.css        # Styling
├── app.js            # Main controller
│
├── src/
│   ├── api.js        # API calls & data fetching
│   ├── ui.js         # DOM updates & rendering
│   ├── storage.js    # localStorage (search history)
│   └── utils.js      # Helper functions
│
├── exercises/        # Week 6 practice tasks
│   ├── async-basics.js
│   ├── promises.js
│   ├── async-await.js
│   └── fetch-practice.js
│
└── README.md
```

---

## ⚙️ Setup Instructions

1. Clone the repository:

```
git clone https://github.com/Explorerjoshua/iyf-s10-week-06-Explorerjoshua.git
```

2. Navigate into the project:

```
cd iyf-s10-week-06-Explorerjoshua
```

3. Open `index.html` in your browser

---

## 🔑 API Configuration

1. Create an account at:
   https://openweathermap.org/

2. Generate your API key

3. Replace in your code:

```js
const API_KEY = "your_api_key_here";
```

---

## ⚠️ Error Handling Strategy

The application explicitly handles:

* 404 (city not found)
* Network failures
* Empty input validation

Errors are displayed in the UI without breaking the application flow.

---

## 🧪 Exercises Completed

* Callback-based async operations
* Promise creation and chaining
* Async/Await refactoring
* Fetch API integration
* Parallel execution with Promise.all

---

## 📈 Future Improvements

* 5-day weather forecast
* Temperature unit toggle (°C / °F)
* Geolocation-based weather detection
* Dynamic UI themes based on weather

---

## 👤 Author

**Explorerjoshua**

---

## 📄 License

Educational project for IYF Weekend Academy
