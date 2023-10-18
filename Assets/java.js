const apiKey = "7a27598412040064943e95cd725be026";
var present = dayjs();
var searchBTN = document.querySelector('.searchBTN');
var input = document.querySelector('#input')
var city = input.value
var sunshine = "https://api.openweathermap.org/data/2.5/weather?q= + city + &appid= + apiKey"
var descrip;
var icon;
var temp;
var maxtemp;
var mintemp;
var hum;
var winspe;

//Starting Sequence
searchBTN.addEventListener('click',funky1)

function funky1(){
    city = input.value
    fetch(sunshine)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      City = data.name
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
    console.log("funky")
    
}