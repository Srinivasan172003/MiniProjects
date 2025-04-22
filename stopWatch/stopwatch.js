let ms = 0;
let s = 0;
let m = 0;
let h = 0;
let index=1;
let msdiv = document.getElementById('milliSecond');
let seconddiv = document.getElementById('second');
let minutediv = document.getElementById('minute');
let hourdiv = document.getElementById('hour');
let lapdiv = document.getElementById('lapPoints');
let startInterval;


let count = () => {
    ms++;
    
    
    if (ms > 99) {
        s++;
        ms = 0;
    }
    if (s > 59) {
        m++;
        s = 0;
    }
    if (m > 59) {
        h++;
        m = 0;
    }
    
    msdiv.innerHTML = (ms < 10) ? '0' + ms : ms;
    seconddiv.innerHTML = (s < 10) ? '0' + s : s;
    minutediv.innerHTML = (m < 10) ? '0' + m : m;
    hourdiv.innerHTML = (h < 10) ? '0' + h : h;
    
    if (h === 23 && m===59 && s===59 && ms===99) {
        clearInterval(startInterval)
    }
}


function start(){
    startInterval=setInterval(count,10)
}

function lap(){
    lapdiv.innerHTML+=`<li>
                       ${index}) 
                       ${(h < 10) ? '0' + h : h} : 
                       ${(m < 10) ? '0' + m : m} : 
                       ${(s < 10) ? '0' + s : s} : 
                       ${(ms < 10) ? '0' + ms : ms}
                       </li>`;
    index++;
}

function pause(){
    clearInterval(startInterval);
    index++;
}

function reset(){
    ms=0;
    s=0;
    m=0;
    h=0;
    index=0;
    lapdiv.innerHTML="";
    msdiv.innerHTML = (ms < 10) ? '0' + ms : ms;
    seconddiv.innerHTML = (s < 10) ? '0' + s : s;
    minutediv.innerHTML = (m < 10) ? '0' + m : m;
    hourdiv.innerHTML = (h < 10) ? '0' + h : h;
}