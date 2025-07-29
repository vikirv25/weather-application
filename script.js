async function getweather() {
    const city =document.getElementById("cityinput").value;
    const apiKey = "4d526d2a15a4871f1af22d20ccdb9e54"; 
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        const response = await fetch(url);
        if (!response.ok) throw new Error("city not found")

        const data = await response.json();
        console.log(data)
        document.getElementById("cityname").textContent=data.name;
        document.getElementById("temp").textContent=data.main.temp
        document.getElementById("descriipition").textContent=data.weather[0].descripition;
        document.getElementById("humidity").textContent=data.main.humidity;
        document.getElementById("wind").textContent=data.wind.speed;
        document.getElementById("weatherIcon").scr=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

        document.getElementById("weatherResult").classList.remove("hidden");

   }   catch (error) {
            alert("could not fetch weather data. please check name.")
        }
    }
