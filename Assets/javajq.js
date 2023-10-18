const apiKey = "7a27598412040064943e95cd725be026";
var present = dayjs();
var searchBTN = $(`.searchBTN`)
var infoCard = $(`#infoCard`)
var city = "Minneapolis";
var sunshine = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
var descrip;
var icon;
var temp;
var maxtemp;
var mintemp;
var hum;
var winspe;

//Starting Sequence
searchBTN.on('click',funky1)

function funky1(){
city = $(`#input`).val()
    fetch(sunshine)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      var City = data.name
        descrip = data.weather.discription
        icon = data.weather.icon
        temp = data.main.temp
        maxtemp = data.main.temp_max
        mintemp = data.main.temp_min
        hum = data.main.humidity
        winspe = data.wind.speed
    });

    funky2();
}

function funky2(){
    infoCard.append.$(
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
    
}