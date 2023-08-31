document.addEventListener('DOMContentLoaded', function () {
   const button = document.getElementById('button');
   const input = document.getElementById('input');
   const span = document.querySelectorAll('span');

   function calc() {
      const currentDate = new Date();

      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const currentDay = currentDate.getDate();
      const currentHours = currentDate.getHours();
      const currentMinutes = currentDate.getMinutes();
      const currentSeconds = currentDate.getSeconds();
   
      const inputDate = input.value;

      const arr = inputDate.split("-");
      const inputYear = parseInt(arr[0]);
      const inputMonth = parseInt(arr[1]) - 1;
      const inputDay = parseInt(arr[2]);
      
      const userYear = currentYear - inputYear;
      const userMonth = currentMonth - inputMonth;
      const userDay = currentDay - inputDay;
   
      const userHours = currentHours < 10 ? "0" + currentHours : currentHours;
      const userMinutes = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
      const userSeconds = currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;
   
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