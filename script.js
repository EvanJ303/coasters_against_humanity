let act_array = [];
let playstop = 0;
let gridcon = document.getElementById("container_grid");
let c_num = 0;

for (let i =0; i < 64; i++){
    act_array.push(0);
}

function createClickHandler(slot_count){
    return function(){
        act_array[slot_count]++
    }
}

for (let i = 0; i < 64; i++) {
    let newslot = document.createElement("div");
    newslot.classList.add("gridimage");
    newslot.setAttribute("id", c_num);

    let emptyimg = document.createElement("img");
    emptyimg.src = "img/nocoaster.jpg";
    emptyimg.style.width = "75px"; // Set the width directly
    emptyimg.style.height = "auto"; // Maintain aspect ratio

    newslot.appendChild(emptyimg);
    gridcon.appendChild(newslot);

    emptyimg.onclick=createClickHandler(c_num);

    c_num++;
}

