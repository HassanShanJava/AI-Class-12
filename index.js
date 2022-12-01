var inputval = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var btn1 = document.querySelector(".submit");
var city = document.querySelector("#cityoutput");
var descrip = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");

apik = "cea09a26775879b9f3185dceb4e801e9";

function convertion(val) {
  return (val - 273).toFixed(2);
}

function click() {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        inputval.value +
        "&appid=" +
        apik
    )
      .then((res) => res.json())
      .then((data) => {
        var nameval = data["name"];
        var descrip = data["weather"]["0"]["description"];
        var tempature = data["main"]["temp"];
        var wndspd = data["wind"]["speed"];
  
        city.innerHTML = `Weather of <span>${nameval}<span>`;
        temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`;
        description.innerHTML = `Sky Conditions: <span>${descrip}<span>`;
        wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`;
        document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + inputval.value + "')";
      })
      .catch((err) => alert("Wrong City"));
  }
btn1.addEventListener("keypress", (e)=> {
    if(e.key === 'enter'){
        e.preventDefault()
        click()
    }
});

btn.addEventListener("click", click);

