fetch(`http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19`)
    .then(response => response.json())
    .then(data => {
            console.log(data)
            const city = data.name;
            const temp = data.main.temp;
            const pressure = data.main.pressure;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const speed = data.wind.speed;
            const deg = data.wind.deg;
            const icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            document.getElementById("weather-info").innerHTML = `
                <h2>${city}</h2>
                <p>Temperature: ${temp} &deg;C</p>
                <p>Pressure: ${pressure} hPa</p>
                <p>Description: ${description}</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${speed} m/s</p>
                <p>Wind Direction: ${deg} &deg;</p>
                <img src="${icon}" alt="${description}">
            `;
    })
    .catch(error => console.log(error));

