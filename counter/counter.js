let count=0;

document.getElementById("increement").addEventListener('click',()=>{
    count++;
    document.getElementById("valueBox").innerText=count;
})

document.getElementById("decreement").addEventListener('click',()=>{
    count--;
    document.getElementById("valueBox").innerText=count;
})

document.getElementById("resetButton").addEventListener('click',()=>{
    count=0;
    document.getElementById("valueBox").innerText=count;
})