const apiKey = "7a27598412040064943e95cd725be026";
var present = dayjs();
var searchBTN = $(`.searchBTN`)
var infoCard = $(`#infoCard`)
var city = "Minneapolis";
var sunshine = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
var descrip = '';
var ic;
var tp = 0;
var maxtemp = 0;
var mintemp = 0;
var hum = 0;
var winspe = 0;
var place = '';

//Starting Sequence
searchBTN.on('click',funky1)

function funky1(){
place = $(`#input`).val()
sunshine = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    fetch(sunshine)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
        place = data.name;
        descrip = data.weather[0].description;
        ic = data.weather[0].icon;
        tp = data.main.temp;
        maxtemp = data.main.temp_max;
        mintemp = data.main.temp_min;
        hum = data.main.humidity;
        winspe = data.wind.speed;

        infoCard.append(
            `<div class="row align-items-start">
                <div class="col">
                    <h2>${place}</h2>
                    <h2>${ic}</h2>
                </div>
            </div>
            <div class="row align-items-start">
                <div class="col">
                    <h2>${descrip}</h2>
                </div>
            </div>
            <div class="row align-items-start">
                <div class="col">
                    <h2>Temp: ${tp}</h2>
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