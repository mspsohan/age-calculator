
var datbtn = document.getElementById('button');
   datdiv = document.getElementById('input')

   theDate = new Date(),
   month = theDate.getMonth(); 
   days = theDate.getDate(); 
   year = theDate.getFullYear();
   span = document.querySelectorAll('span'); 

function calc() {
var date = new Date();
   hours = date.getHours()
   minutes = date.getMinutes();
   second = date.getSeconds();

   var dat = window.input.value,
      arr = dat.split("-")
      arr0 = eval(arr[2])
      arr1 = eval(arr[1])
      arr2 = eval(arr[0])

      userDay = 30+day - arr0;
      userMonth = 12 + month - arr1;
      userYear = year - 1 - arr2;

      if (arr[1] == null) {
         span.textContent.display = "none";
      }if (userDay >= 30) {
         userDay = 0 + userDay % 30;
         userMonth = userMonth + 1;
      } else {
         userDay = userDay;
         userMonth = userMonth + 1;
      }
      if (userMonth >= 12) {
         userMonth = userMonth % 12;
         userYear = userYear +1;
      }else{
         userMonth = userMonth;
         userYear = userYear;
      }

      if (hours < 10) {
         hours = "0" + hours;
      }
      if (minutes < 10) {
         minutes = "0" + minutes;
      }
      if (second < 10) {
         second = "0" + second;
      }
      if (userDay < 10) {
         userDay = "0" + userDay;
      }
      if (userMonth < 10) {
         userMonth = "0" + userMonth;
      }
      if (userYear < 10) {
         userYear = "0" + userYear;
      }

      span[0].textContent = userYear;
      span[1].textContent = userMonth;
      span[2].textContent = userDay;
      span[3].textContent = hours;
      span[4].textContent = minutes;
      span[5].textContent = second;

      setInterval(calc, 1000)
}