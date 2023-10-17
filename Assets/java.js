const apiKey = "7a27598412040064943e95cd725be026";
var present = dayjs();
var searchBTN = $(`.searchBTN`)
var infoCard = $(`#infoCard`)
var input = $(`#input`)
var city = input.val()
var sunshine = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

//Starting Sequence
searchBTN.on('click',funky1)

function funky1(){
    fetch(sunshine)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      var City = data.name
      var descrip = data.weather.discription
      var icon = data.weather.icon
      var temp = data.main.temp
      var maxtemp = data.main.temp_max
      var mintemp = data.main.temp_min
      var hum = data.main.humidity
      var winspe = data.visibility.wind.speed

      infoCard.append$(
        `<div class="row align-items-start">
            <div class="col">
                <h2>${city}</h2>
                <h2>${icon}</h2>
            </div>
        </div>
        <div class="row align-items-start">
            <div class="col">
                <h2>${descrip}</h2>
            </div>
        </div>
        <div class="row align-items-start">
            <div class="col">
                <h2>Temp: ${temp}</h2>
                <h2>MaxTemp: ${maxtemp}</h2>
                <h2>MinTemp: ${mintemp}</h2>
                <h2>Humidity: ${hum}</h2>
            </div>
        </div>
        <div class="row align-items-start">
            <div class="col">
                <h2>WindSpeed: ${winspe}</h2>
            </div>
        </div>
        `
      )
    });
}

