function displaytime()
{
   let datet= new Date();
   let ampm=document.querySelector("#ampm");
   let hr=datet.getHours();
   let min=datet.getMinutes();
   let sec=datet.getSeconds();
   if(hr>12)
   {
     hr=hr-12;
     ampm.textContent="PM";
   }

   if(min<10)
   {
    min="0"+min;
   }

   if(sec<10)
   {
    sec="0"+sec;
   }
   document.querySelector("#hour").innerHTML = hr;
   document.querySelector("#miniutes").innerHTML = min
   document.querySelector("#seconds").innerHTML = sec
}



setInterval(displaytime,300);