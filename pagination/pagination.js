let space = 0;
let page = 1;

function updatePage() {
    document.getElementById("pageBody").style.left = `${space}px`;
    document.getElementById("currentPage").innerText = page;
    (page - 1 < 1) ? document.getElementById("prevPage").style.visibility = "hidden" : 
        document.getElementById("prevPage").style.visibility = "visible";
        document.getElementById("prevPage").innerText = page - 1;
    (page - 2 < 1) ? document.getElementById("prevPrevPage").style.visibility = "hidden" :
        document.getElementById("prevPrevPage").style.visibility = "visible";
        document.getElementById("prevPrevPage").innerText = page - 2;
    (page + 1 > 10) ? document.getElementById("nextPage").style.visibility = "hidden" : 
    document.getElementById("nextPage").style.visibility = "visible";
    document.getElementById("nextPage").innerText = page + 1;
    (page + 2 > 10) ? document.getElementById("nextNextPage").style.visibility = "hidden" :
     document.getElementById("nextNextPage").style.visibility = "visible";
    document.getElementById("nextNextPage").innerText = page + 2;
}

updatePage()

fetch("https://jsonplaceholder.typicode.com/posts").then(res => {
    res.json().then(resp => {
        for (let i = 1; i <= resp.length / 10; i++) {
            document.getElementById("pageBody").innerHTML += `<div class="page"><h2 class="title"></h2><div class="content"></div></div>`;
            resp.filter(j => j.userId === i).map((k, t) => {
                let category = ((t + 1) % 2 == 0) ? "evenDiv" : "oddDiv";
                document.getElementsByClassName("title")[i - 1].innerHTML = `UserID : ${k.userId}`

                document.getElementsByClassName("content")[i - 1].innerHTML += `<div class="${category}"><h4>${(k.id % 10 == 0) ? 10 : k.id % 10}) ${k.title}</h4><p>${k.body}</p></div>`
            })
        }
    }).catch(err => console.log(err))
}).catch(err => console.log(err))

function changePage(val) {
    if (val === "prev") {
        if (space != 0) {
            page--;
            space += 500;
            
        }
    } else if (val === "next") {
        if (space != -4500) {
            page++;
            space -= 500
            
        }
    } else if (val === "prevPrev") {
        page -= 2;
        space += 1000;
        
    }else{
        page += 2;
        space -= 1000;
         
    }
    updatePage()
}
