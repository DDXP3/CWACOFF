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
// var btn = $(`.btn`)

//Starting Sequence
searchBTN.on('click',funky1)

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
            );
            redo.append(
                `<button type="button" class='btn' id='btn${i}'>
                    ${place}
                </button>
                `
            );

            localStorage.setItem(`btn${i}`, `${place}`)

            i++;
    });
}

//press button

$(`.btn`).on("click", funky2);

//function to get Item
function funky2 (event){
    console.log("clicked")
    event.preventDefault();
var key = $(this).id;
console.log(key)
city = localStorage.getItem(key)
// sunshine = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

//     infoCard.children().remove();

//     fetch(sunshine)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data)
//         place = data.name;
//         descrip = data.weather[0].description;
//         ic = data.weather[0].icon;
//         tp = data.main.temp;
//         maxtemp = data.main.temp_max;
//         mintemp = data.main.temp_min;
//         hum = data.main.humidity;
//         winspe = data.wind.speed;

//         infoCard.append(
//             `<div class="row align-items-start">
//                 <div class="col">
//                     <h2>${place}</h2>
//                     <h2>${ic}</h2>
//                 </div>
//             </div>
//             <div class="row align-items-start">
//                 <div class="col">
//                     <h2>${descrip}</h2>
//                 </div>
//             </div>
//             <div class="row align-items-start">
//                 <div class="col">
//                     <h2>Temp: ${tp}</h2>
//                     <h2>MaxTemp: ${maxtemp}</h2>
//                     <h2>MinTemp: ${mintemp}</h2>
//                     <h2>Humidity: ${hum}</h2>
//                 </div>
//             </div>
//             <div class="row align-items-start">
//                 <div class="col">
//                     <h2>WindSpeed: ${winspe}</h2>
//                 </div>
//             </div>
//             `
//             );
//         });
}
