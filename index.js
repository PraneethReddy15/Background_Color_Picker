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

// -------COPY-------
const msg = document.getElementById('message');
msg.style.visibility = 'visible';
function copyText() {
    const hexColor=document.body.style.backgroundColor;
    navigator.clipboard.writeText(hexColor).then(() => {
        const message = document.getElementById('message');
                message.style.display = 'block';
                
                setTimeout(() => {
                    message.style.display = 'none';
                }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}