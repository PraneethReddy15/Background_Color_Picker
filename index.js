const valueArr=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn=document.getElementById("btn");
const value=document.querySelector(".value");

btn.addEventListener("click",function()
{
    let hexColor="#";
    for(let i=0;i<6;i++)
    {
        hexColor+=valueArr[getRandom()];
    }
    value.textContent=hexColor;
    document.body.style.backgroundColor=hexColor;
});

function getRandom(){
    return Math.floor(Math.random()*valueArr.length);
}