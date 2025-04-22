let target = (!sessionStorage.getItem('target'))?1
             :parseInt(sessionStorage.getItem('target'));
let images = ['lion.jpg', 'tiger.jpg', 'cheetah.jpg', 'leopard.jpg', 'panther.jpg'];

change('current');

function change(opt) {
    target=(target !== 0 && opt==="prev") ? target-1:(target !== images.length - 1 && opt==="next") ? target+1 :target;
    sessionStorage.setItem('target',target);
    document.getElementById('prev').setAttribute("style", (target === 0) ? "display:none" : "display:inline");
    document.getElementById('prevbtn').setAttribute("style", (target === 0) ? "visibility: hidden" : "visibility: visible");
    document.getElementById('next').setAttribute("style", (target === images.length - 1) ? "display:none" : "display:inline");
    document.getElementById('nextbtn').setAttribute("style", (target === images.length - 1) ? "visibility: hidden" : "visibility: visible");
    document.getElementById('prev').setAttribute("src", "images/" + images[target - 1]);
    document.getElementById('current').setAttribute("src", "images/" + images[target]);
    document.getElementById('next').setAttribute("src", "images/" + images[target + 1]);
}