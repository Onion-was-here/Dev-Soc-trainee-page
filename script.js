function makeTimer() {
  var endTime = new Date("May 29,2027 12:00:00 PST");
  endTime.setHours(endTime.getHours() + 19);
  var endTime = Date.parse(endTime) / 1000;

  var now = new Date();
  var now = Date.parse(now) / 1000;

  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }

  document.getElementById("days").innerHTML = days + "<span>Days</span>";
  document.getElementById("hours").innerHTML = hours + "<span>Hours</span>";
  document.getElementById("minutes").innerHTML = minutes + "<span>Minutes</span>";
  document.getElementById("seconds").innerHTML = seconds + "<span>Seconds</span>";
}

setInterval(function () {
  makeTimer();
}, 1000);
