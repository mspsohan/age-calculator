document.addEventListener('DOMContentLoaded', function () {
   const button = document.getElementById('button');
   const input = document.getElementById('input');
   const span = document.querySelectorAll('span');

   function calc() {
      const date = new Date()

      const days = date.getDate()
      const month = date.getMonth()
      const year = date.getFullYear()
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()
   
      const inputDate = input.value
      const arr = inputDate.split("-");

      const inputYear = parseInt(arr[0])
      const inputMonth = parseInt(arr[1]) - 1
      const inputDays = parseInt(arr[2])
   
      const inputTime = arr[2].split('T')
      const inputTimes = inputTime[1].split(":") 

      const inputHours = parseInt(inputTimes[0])
      const inputMinutes = parseInt(inputTimes[1])
   
      const userYear = year - inputYear;
      const userMonth = month - inputMonth;
      const userDay = days - inputDays;
   
      const userHours = hours - inputHours;
      const userMinutes = minutes - inputMinutes;
   
      // const userHours = userHour < 10 ? "0" + userHour : userHour;
      // const userMinutes = userMinute < 10 ? "0" + userMinute : userMinute;
      const userSeconds = seconds < 10 ? "0" + seconds : seconds;

      span[0].textContent = userYear;
      span[1].textContent = userMonth;
      span[2].textContent = userDay;
      span[3].textContent = userHours;
      span[4].textContent = userMinutes;
      span[5].textContent = userSeconds;
   }

   button.addEventListener('click', function () {
      calc();
      setInterval(calc, 1000);
   });
});