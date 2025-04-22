let index = 0;
let count = 0;
const positions=[]

for(let i=0;i<500;i+=25){
    for(let j=0;j<500;j+=25){
        positions.push([i,j])
    }
}

function addircle() {
    const inputValue = document.getElementById('inputBox').value;
    if (inputValue !== "") {
        const randomValue = Math.floor(Math.random() * positions.length-1);
        document.getElementById('points').innerHTML += `<div class="circle" onclick="clicked(${index},${inputValue})" style="top:${positions[randomValue][0]}px;left:${positions[randomValue][1]}px" selected="false">${index + 1}</div>`;
        positions.splice(randomValue,1)
        document.getElementById('tbody').innerHTML += `<tr><td>${index + 1}</td><td>${inputValue}</td></tr>`
        index++;
    }
}


function clicked(i, v) {
    let element = document.getElementsByClassName('circle')[i];
    if (element.getAttribute("selected") === "true") {
        count -= v;
        document.getElementById("countBox").innerText = count;
        element.style.backgroundColor = "red";
        element.setAttribute("selected", "false");
    } else {
        count += v;
        document.getElementById("countBox").innerText = count;
        element.style.backgroundColor = "greenyellow";
        element.setAttribute("selected", "true");
    }
}