const endDate = "20 May 2022 03:18 PM";
document.getElementById("time").innerText = endDate;
const inputs = document.querySelectorAll("input");
const clock = () =>{
    const end = new Date(endDate);
    const curr = new Date();
    const milisecond =(end-curr);
    if(milisecond<0)
    {
        document.getElementById("time").innerText = "Welcome";
        return
    }
    const second = milisecond/1000;
    const days = second/60/60/24;
    inputs[0].value = Math.floor(days);
    const hours = second/60/60 %24;
    inputs[1].value = Math.floor(hours);
    const minutes = second/60 % 60;
    inputs[2].value = Math.floor(minutes);
    const sec = second%60;
    inputs[3].value = Math.floor(sec);
    
}
clock();

setInterval(() => {
    clock();
}, 1000);