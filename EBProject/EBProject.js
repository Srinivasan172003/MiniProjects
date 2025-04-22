let urls=['images/fan.png',['images/bulbOff.png','images/bulbOn.png'],['images/tvOff.png','images/tvOn.png'],['images/fridgeOff.png','images/fridgeOn.png'],['images/washingMachineOff.png','images/washingMachineOn.png']];
let unitsArr=[0.5,0.25,1,2,2];
let unitsItems=[];
let unitsVals=[];
let index=0;
let totalUnit=0;
let price=0;

function addRoom(item){
if(item==0){
    document.getElementById("room").innerHTML+=`<div class="roomItem"><img src=${urls[item]} class="equipmentImg fan"><div class="switch off" onclick="toggle(${item},${index})"><div class="switchCircle"></div></div><p class="divTime">0 sec</p><p class="divUnit">0 units</p></div>`;
}else{
    document.getElementById("room").innerHTML+=`<div class="roomItem"><img src=${urls[item][0]} class="equipmentImg"><div class="switch off" onclick="toggle(${item},${index})"><div class="switchCircle"></div></div><p class="divTime">0 sec</p><p class="divUnit">0 units</p></div>`;
}
unitsVals.push([0,unitsArr[item]]);
index++;
}

function toggle(val,i){
    let equipmentImg=document.getElementsByClassName('equipmentImg')[i];
    let switchCircleElement=document.getElementsByClassName('switchCircle')[i];
    let switchElement=document.getElementsByClassName('switch')[i];

    if(switchElement.classList.contains("off")){
        switchCircleElement.style.left="20px";
        switchElement.style.backgroundColor="greenyellow";
        switchElement.classList.remove("off");
        unitsItems.push(i);
        if(equipmentImg.classList.contains("fan")){
            equipmentImg.classList.add("animate");
        }else{
            equipmentImg.src=urls[val][1];
        }
    }else{
        switchCircleElement.style.left="0px";
        switchElement.style.backgroundColor="red";
        switchElement.classList.add("off");
        unitsItems.splice(unitsItems.lastIndexOf(i),1);
        if(equipmentImg.classList.contains("fan")){
            equipmentImg.classList.remove("animate");
        }else{
            equipmentImg.src=urls[val][0];
        }
    }
}

setInterval(()=>{
    unitsItems.forEach((i)=>{
        unitsVals[i][0]++;
        totalUnit+=unitsVals[i][1];
        document.getElementsByClassName("divTime")[i].innerHTML=`${unitsVals[i][0]} sec`;
        document.getElementsByClassName("divUnit")[i].innerHTML=`${unitsVals[i][0]*unitsVals[i][1]} units`;
    });
    price=(totalUnit>500)?totalUnit*5:(totalUnit>400)?totalUnit*3.5:(totalUnit>300)?totalUnit*2:(totalUnit>200)?totalUnit*1.5:0;
    document.getElementById("unit").innerHTML=totalUnit;
    document.getElementById("cost").innerHTML=price;
},1000)
