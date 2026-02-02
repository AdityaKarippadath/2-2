function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("result");

    const apiKey = "b7741ddd7505f36cac84b1c5c9736ab4"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                result.innerHTML = "City not found!";
            } else {
                result.innerHTML = `
                    <p><strong>City:</strong> ${data.name}</p>
                    <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                `;
            }
        })
        .catch(() => {
            result.innerHTML = "Error fetching data!";
        });
}
