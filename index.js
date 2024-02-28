const btn = document.getElementById("btn");
const hexVal = document.getElementById("hexVal");
const wrap = document.getElementById("wrap")
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener('click',() => {
    let hexclr = '#';
    for(let i=1;i<=6;i++){
        hexclr += randomHexValue()
    }
    wrap.style.backgroundColor = hexclr;
    hexVal.innerHTML=hexclr;
});

function randomHexValue(){
    let random = Math.floor(Math.random()*16);
    return hex[random];
}
