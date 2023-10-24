const apiKey = "7a27598412040064943e95cd725be026";
var present = dayjs();
var searchBTN = $(`.searchBTN`)
var infoCard = $(`#infoCard`)
var city = "";
var sunshine = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
var descrip = '';
var ic;
var tp = 0;
var maxtemp = 0;
var mintemp = 0;
var hum = 0;
var winspe = 0;
var place = '';
var redo = $(`#redo`)
var i=0;
var lat;
var lon;
var future = '';
var futurecard = $('#futurecard')

//Starting Sequence
searchBTN.on('click',funky1);

function conversion(ko) {
    var fo = ((ko - 273.15) * (9 / 5) + 32).toFixed(2);
    return fo;
  }

function funky1(){
city = $(`#input`).val()
sunshine = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    infoCard.children().remove();

    fetch(sunshine)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
        place = data.name;
        descrip = data.weather[0].description;
        ic = data.weather[0].icon;
        icImg = `http://openweathermap.org/img/w/`+ic+`.png`;
        tp = conversion(data.main.temp);
        maxtemp = conversion(data.main.temp_max);
        mintemp = conversion(data.main.temp_min);
        hum = data.main.humidity;
        winspe = data.wind.speed;
        lat = data.coord.lat.toFixed(2);
        lon = data.coord.lon.toFixed(2);

        infoCard.append(
            `
            <h2>${place}</h2>
            <img id="icons" src="${icImg}">
            <h2>${descrip}</h2>
            <h2>Temp: ${tp}</h2>
            <h2>MaxTemp: ${maxtemp}</h2>
            <h2>MinTemp: ${mintemp}</h2>
            <h2>Humidity: ${hum}</h2>
            <h2>WindSpeed: ${winspe}</h2>
            `
            );

            // <div class="row">
            //     <div class="col">
            //         <h2>${place}</h2>
            //         <img id="icons" src="${icImg}">
            //     </div>
            // </div>
            // <div class="row">
            //     <div class="col">
            //         <h2>${descrip}</h2>
            //     </div>
            // </div>
            // <div class="row">
            //     <div class="col">
            //         <h2>Temp: ${tp}</h2>
            //         <h2>MaxTemp: ${maxtemp}</h2>
            //         <h2>MinTemp: ${mintemp}</h2>
            //         <h2>Humidity: ${hum}</h2>
            //     </div>
            // </div>
            // <div class="row">
            //     <div class="col">
            //         <h2>WindSpeed: ${winspe}</h2>
            //     </div>
            // </div>

            redo.append(
                `
                <button class='btn' id=btn${i}>
                ${place}
                </button>
                `
            );

            localStorage.setItem(`btn${i}`, `${place}`)

            i++;

            funky3(lat, lon);
    });
}

//function to get buttons ready
$(document).ready(function(){
    $(document).on("click", "button.btn", funky2)
})

//function for when city buttons are clicked
function funky2 (){
    console.log("clicked")
    city = $(this).text()
sunshine = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    infoCard.children().remove();

    fetch(sunshine)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
        place = data.name;
        descrip = data.weather[0].description;
        ic = data.weather[0].icon;
        icImg = `http://openweathermap.org/img/w/`+ic+`.png`;
        tp = conversion(data.main.temp);
        maxtemp = conversion(data.main.temp_max);
        mintemp = conversion(data.main.temp_min);
        hum = data.main.humidity;
        winspe = data.wind.speed;
        lat = data.coord.lat.toFixed(2);
        lon = data.coord.lon.toFixed(2);

        infoCard.append(
            `<div class="row">
                <div class="col">
                    <h2>${place}</h2>
                    <img id="icons" src="${icImg}">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2>${descrip}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2>Temp: ${tp}</h2>
                    <h2>MaxTemp: ${maxtemp}</h2>
                    <h2>MinTemp: ${mintemp}</h2>
                    <h2>Humidity: ${hum}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2>WindSpeed: ${winspe}</h2>
                </div>
            </div>
            `
            );
        });
        
        funky3(lat, lon);
}

//function for the five day forcast
function funky3(lat, lon){

    // searchBlock.removeClass('container-fluid text-center col-12');
    // searchBlock.addClass('col-md-12 col-lg-3')

    $('.startBlock').removeClass('text-center')
    $('.searchBlock').removeClass('col-12');
    $('.searchBlock').addClass('col-3')
    $('.searchBlock').attr('style', 'padding-top: 1%; padding-bottom: 16%;')

    futurecard.children().remove();

    fetchFutureURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
    fetch(fetchFutureURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var dayCount = 1;
        var hourIter = 1;
        
        for (var j = 0; j < 5; j++) {
          var fut = present.add(dayCount, 'day').format("MM/DD/YYYY");
          dayCount++;
          var futIc = data.list[hourIter].weather[0].icon;
          var futIcURL = "http://openweathermap.org/img/w/" + futIc + ".png";
          var nextTemp = conversion(data.list[hourIter].main.temp);
          var nextWin = data.list[hourIter].wind.speed;
          var nextHum = data.list[hourIter].main.humidity;
          futurecard.append(
            `
            <div class="col">
                <h4>${fut}</h4>
                <img id="icons" src="${futIcURL}">
                <p>Temp: ${nextTemp}&#8457;</p>
                <p>Wind: ${nextWin} MPH</p>
                <p>Humidity: ${nextHum}%</p>
            </div>
            `
            );

          hourIter = hourIter + 8;
            }
        }
    )
}