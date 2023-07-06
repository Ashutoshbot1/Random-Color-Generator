
let randomNumber;
let randomCode;

const getColor = ()=>{

    randomNumber=Math.floor(Math.random()*16777215);
    randomCode="#" + randomNumber.toString(16);
    
    document.body.style.backgroundColor=randomCode;
    document.getElementById("code").innerText=randomCode;

    
}
document.getElementById("btn").addEventListener("click",getColor);

const copyBtn= document.getElementById("copy");

const copyCode = () => {

    navigator.clipboard.writeText(randomCode);

}
copyBtn.addEventListener("click",copyCode);

getColor();


