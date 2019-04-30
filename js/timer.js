
// grab necessary elements
const hour = document.querySelector('div#timeHour h2');
const min = document.querySelector('div#timeMin h2');
const sec = document.querySelector('div#timeSec h2');
let month = document.querySelector('div#month h2');
const day = document.querySelector('div#day h2');
const year = document.querySelector('div#year h2');
const seconds = document.querySelector('h2.effect');
let meridiem = document.querySelector('div#am-pm h2');


let updatedMin;
//array of months
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//update meridiem
let updateMeridiem = currentHour => {
  if (currentHour >= 12) {
    meridiem.innerHTML = 'PM';
  }
  else {
    meridiem.innerHTML = 'AM';
  }
  if (currentHour % 12 === 0) {
    hour.innerHTML = currentHour;

  }
  else {
    hour.innerHTML = currentHour % 12;
  }

}

//update minutes
let updateMin = (minutes) => {
  if (minutes <= 9) {
    min.innerHTML = `0${minutes}`;
  }
  else {
    min.innerHTML = `${minutes}`;
  }
}

// function to update Date object
let updateClock = () => {
  const d = new Date();
  updateMeridiem(d.getHours());
  sec.innerHTML = d.getSeconds();
  updatedMin = d.getMinutes();
  updateMin(updatedMin);
  let monthTrack = months[d.getMonth()];
  month.innerHTML = monthTrack;
  day.innerHTML = d.getDate();
  year.innerHTML = d.getFullYear();
  seconds.classList.toggle('effect');

  setTimeout(updateClock, 1000);
}

updateClock();



