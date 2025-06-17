const days    =document.querySelector("#days")  
const hours =document.querySelector("#hours")
const minutes  =document.querySelector("#minutes")
const seconds =document.querySelector("#seconds")

function updateTime(){
    const currentYear = new Date().getFullYear();
    const newYear = new Date(`january 1 ${currentYear+1} 00:00:00`);
    const currentDate = new Date();
    const diff = newYear - currentDate;
    const d =Math.floor((diff/1000/60/60/24));
    const h =Math.floor((diff/1000/60/60)%24);
    const m =Math.floor((diff/1000/60)%60);
    const s =Math.floor(diff/1000%60);

    days.innerHTML = d
    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s

}
setInterval(updateTime,1000);