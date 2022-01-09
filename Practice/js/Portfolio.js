/*const iframe = document.querySelector("#frame");
const firstPic = document.querySelector(".row img:first-child");

iframe.innerHTML = `<img src="${firstPic.src}" alt="image" id="present"/>`

function zoomout(element){
    const image = document.querySelector('#present');
    image.src = element.src
}
function warning(){
    const text1 = document.querySelector("#yourname");
    const text2 = document.querySelector("#email");
    const text3 = document.querySelector("#content");
    if(text1.value.length == 0 || text2.value.length == 0 || text3.value.length == 0){
        alert("please fill out all fields");
		if(text1.value.length == 0 ){
			text1.style.backgroundColor = "red";
		}else{
			text1.style.backgroundColor = "white";
		
		}
		if(text2.value.length == 0 ){
			text2.style.backgroundColor = "red";
		}else{
			text2.style.backgroundColor = "white";
		
		}
		if(text3.value.length == 0 ){
			text3.style.backgroundColor = "red";
		}else{
			text3.style.backgroundColor = "white";
		}			

    }else{
        alert("Are you sure your information");
		text1.style.backgroundColor = "white";
		text2.style.backgroundColor = "white";
		text3.style.backgroundColor = "white";
    }

}
*/
document.addEventListener("DOMContentLoaded",function(){

    const iframe = document.querySelector("#frame");
    const firstPic = document.querySelector(".row img:first-child");
    const yourName = document.querySelector("#yourname");
    const email = document.querySelector("#email");
    const content = document.querySelector("#content");
    
    iframe.innerHTML = `<img src="${firstPic.src}" alt="image" id="present"/>`
    
})
function zoomout(element){
    const image = document.querySelector('#present');
    image.src = element.src
}


function warning(){
    if(yourName.value.length === 0 || email.value.length === 0 || content.value=== 0 ){
        alert("Please fill out all fields");
    }else{
        const flag = confirm("Are you sure about your information?");
        if(flag === true) alert("Message sent");
    }
}