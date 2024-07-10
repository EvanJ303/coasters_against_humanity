let board=Array.from(document.getElementsByClassName("gridimage"));
let act_array=[];
let playstop=0;
let gridcon=document.getElementById("container_grid");
let newslot=document.createElement("div");
let emptyimg=document.createElement("img");
emptyimg.src="img/nocoaster.jpg";

newslot.classList.add("gridimage");
newslot.setAttribute("id","b0");
newslot.appendChild(emptyimg);

gridcon.appendChild(newslot);

for(let i=0;i<64;i++){
    act_array.push(0);
}
