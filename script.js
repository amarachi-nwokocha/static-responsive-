let dailly = document.getElementById("daily-btn");
let monthly = document.getElementById("monthly-btn");
let weekly = document.getElementById("weekly-btn");
let hours = document.getElementsByClassName("hours");
console.log(hours);
let lastTime = document.getElementsByClassName("last-time");
//fetch
function dailyData() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((e, i) => {
        console.log(e.timeframes.daily.current);
        hours[i].innerHTML = e.timeframes.daily.current;
        lastTime[i].innerHTML = e.timeframes.daily.previous;
      });
    });
}
dailly.addEventListener("click", () => {
  dailyData();
});

function weeklyData() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((e, i) => {
        console.log(e.timeframes.weekly.current);
        hours[i].innerHTML = e.timeframes.weekly.current;
        lastTime[i].innerHTML = e.timeframes.weekly.previous;
      });
    });
}
weeklyData();

weekly.addEventListener("click", (e) => {
  weeklyData();
});

//monthly data
function monthlyData() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((e, i) => {
        console.log(e.timeframes.monthly.current);
        hours[i].innerHTML = e.timeframes.monthly.current;
        lastTime[i].innerHTML = e.timeframes.monthly.previous;
      });
    });
}
monthlyData();
monthly.addEventListener("click", (e) => {
  monthlyData();
});
