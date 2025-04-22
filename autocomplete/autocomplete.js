let list=['anash','clitus','manoj','prakash','ashwin','martin','sathya','periyathambi','akash','shiva'];

let inputElement=document.getElementById('inputBox');
let checkbox=document.getElementById('checkBox');

list.forEach(i=>{
    document.getElementById('list').innerHTML+=`<li>${i}</li>`
})

function displayList(){
    let li="";
    let tmpArr;
    if(checkbox.checked){
        tmpArr=list.filter((item)=>item.startsWith(inputElement.value.toLowerCase()));
    }else{
        tmpArr=list.filter((item)=>item.includes(inputElement.value.toLowerCase()));
    }
    for(let i of tmpArr){
        li+="<li>"+i+"</li>";
    }
    document.getElementById('list').innerHTML=li;
}

inputElement.addEventListener('input',displayList)
checkbox.addEventListener('change',displayList)