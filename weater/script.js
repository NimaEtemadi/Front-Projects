const searchInput = document.querySelector('.search-input')
const search = document.querySelector('.fa-search')

 

search.addEventListener('click', async() => {
  
    const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=0dd4f5dae38f8099b780f8bb28de2d39` )
    const data=  await res.json()
    console.log(data.cod);
        if (data.cod === 200) {
                 const today = document.querySelector('.date')
            today.innerHTML = getDate()
            const cityName = document.querySelector('.city-name')
            cityName.innerHTML = data.name;
            const temp = document.querySelector('.temp')
            temp.innerHTML = `temp:${data.main.temp} °C`
            const windspeed = document.querySelector('.wind-speed')
            windspeed.innerHTML = `wind speed : ${data.wind.speed} km/h`
        }else(
            alert('city not found')
        )
       
    })

function getDate(){
    let date = new Date()
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    return day,month,year; 
}


 