"use strict";

const daysLabel = document.querySelector(".days");
const hoursLabel = document.querySelector(".hours");
const minsLabel = document.querySelector(".minutes");
const secsLabel = document.querySelector(".seconds");

let futureDate = new Date(2021, 9, 2, 11, 59, 60);
//getTime() - is used to get the miliseconds
const futureTime = futureDate.getTime();

function getRemaingTime() {
  const today = new Date().getTime();
  //rt - Remaining time
  const rt = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = String(Math.floor(rt / oneDay)).padStart(2, 0);
  let hours = String(Math.floor((rt % oneDay) / oneHour)).padStart(2, 0);
  let mins = String(Math.floor((rt % oneHour) / oneMinute)).padStart(2, 0);
  let secs = String(Math.floor((rt % oneMinute) / 1000)).padStart(2, 0);

  daysLabel.textContent = `${days}`;
  hoursLabel.textContent = `${hours}`;
  minsLabel.textContent = `${mins}`;
  secsLabel.textContent = `${secs}`;

  if (rt <= 0) {
    daysLabel.textContent = `${0}`;
    hoursLabel.textContent = `${0}`;
    minsLabel.textContent = `${0}`;
    secsLabel.textContent = `${0}`;
  }
}

getRemaingTime();
let countdown = setInterval(getRemaingTime, 1000);
