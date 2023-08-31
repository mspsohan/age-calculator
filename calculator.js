const button = document.getElementById('button');
const input = document.getElementById('input');
const spans = document.querySelectorAll('span');

button.addEventListener('click', function () {
   calc();
   setInterval(calc, 1000);
});

function formatValue(value) {
   return value < 10 ? `0${value}` : `${value}`;
}

function calc() {
   const userDate = new Date(input.value);
   if (isNaN(userDate)) {
      return; 
   }
   const currentDate = new Date();

   const millisecondsDiff = currentDate - userDate;
   const secondsDiff = Math.floor(millisecondsDiff / 1000);
   const minutesDiff = Math.floor(secondsDiff / 60);
   const hoursDiff = Math.floor(minutesDiff / 60);
   const daysDiff = Math.floor(hoursDiff / 24);

   const years = Math.floor(daysDiff / 365);
   const months = Math.floor((daysDiff % 365) / 30);
   const remainingDays = daysDiff % 30;
   const remainingHours = hoursDiff % 24;
   const remainingMinutes = minutesDiff % 60;
   const remainingSeconds = secondsDiff % 60;

   spans[0].textContent = formatValue(years);
   spans[1].textContent = formatValue(months);
   spans[2].textContent = formatValue(remainingDays);
   spans[3].textContent = formatValue(remainingHours);
   spans[4].textContent = formatValue(remainingMinutes);
   spans[5].textContent = formatValue(remainingSeconds);
}