const analogClock = document.querySelector(".analog-clock"); 
const hourHand = document.querySelector(".hour-hand"); 
const minuteHand = document.querySelector(".minute-hand"); 
const secondHand = document.querySelector(".second-hand"); 
const digitalClock = document.querySelector(".digital-clock"); 
const digitalDate = document.querySelector(".digital-clock .date"); 
const digitalHour = document.querySelector(".time .hour"); 
const digitalMinute = document.querySelector(".time .minute"); 
const digitalSecond = document.querySelector(".time .second"); 
const switchBtn = document.querySelector(".switch-btn");
const nextFormat = document.querySelector(".next-format"); 

// UPDATING ANALOG CLOCK 
setInterval(() => {
    const now = new Date(); 
    const hour = now.getHours(); 
    const minute = now.getMinutes(); 
    const second = now.getSeconds(); 
    
    const minuteDeg = minute * 6;
    const hourDeg = (hour * 30) + Math.round(minuteDeg / 12); 
    const secondDeg = second * 6; 
    
    hourHand.style.transform = `rotate(${hourDeg}deg)`; 
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`; 
    secondHand.style.transform = `rotate(${secondDeg}deg)`; 
}, 1000)

// UPDATING DIGITAL CLOCK 
setInterval(() => {
    const now = new Date(); 
    const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 

    const day = days[now.getDay()]; 
    const dayofMonth = now.getDate(); 
    const month = months[now.getMonth()]; 
    const year = now.getFullYear(); 
    const hour = now.getHours(); 
    const minute = now.getMinutes(); 
    const second = now.getSeconds(); 

    digitalDate.textContent =  `${day}, ${dayofMonth} ${month} ${year}`; 
    digitalHour.textContent = hour < 10 ? `0${hour}` : hour; 
    digitalMinute.textContent = minute < 10 ? `0${minute}` : minute; 
    digitalSecond.textContent = second < 10 ? `0${second}` : second; 
}, 1000)

switchBtn.addEventListener("click", ()=>{
    if(nextFormat.innerText === "Digital") {
        analogClock.style.opacity = "0"; 
        digitalClock.style.opacity = "1";
        nextFormat.innerText = "Analog";  
    } else {
        digitalClock.style.opacity = "0"; 
        analogClock.style.opacity = "1";
        nextFormat.innerText = "Digital"; 
    }
}); 