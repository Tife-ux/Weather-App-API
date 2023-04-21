const space = document.querySelector(".space")
const button = document.querySelector(".button")
const value = document.querySelector(".value")
const weather1 = document.querySelector(".weather1")
const input = document.querySelector(".input")
const temp = document.querySelector(".temp")
const bc = document.querySelector(".bc")
const state = document.querySelector(".state")
const wind = document.querySelector(".wind")

const weatherImage = document.querySelectorAll(".weather-image")

input.addEventListener("submit", (e)=>{
    e.preventDefault() //PREVENTS AUTO-REFRESH ON WEBPAGE(HAPPENS WITH ONLY FORMS)
})

space.addEventListener("change", (e)=>{
   cityName = e.target.value
})

button.addEventListener("click", ()=>{
    getWeather(cityName)
})

async function getWeather(cityName){
   try {
    const  response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=aad367608af9bf83d4d2020c8c37ad7d&units=metric`)

    const data = await response.json()
    console.log(data)

    temp.innerHTML = `${data.main.temp}°C`
    bc.innerHTML = `${data.weather[0].description}`
    state.innerHTML = `State Name: ${data.name}`
    wind.innerHTML = `Wind Speed: ${data.wind.speed}mph`

    weatherImage.forEach((img)=>{
        img.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    })

   } catch (error) {
       console.log(error)
   }
  
}

