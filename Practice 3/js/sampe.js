document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#myform").classList.add("asd");
})
function Show(){
    const form = document.querySelector("#myform");
    const text = document.querySelector("#mytext");
    form.classList.toggle("asd");
    if(form.classList.contains("asd")){
        text.innerHTML = "Open";
    }else{
        text.innerHTML ="Close";
    }
}
function checkForm(){
    const name = document.querySelector("#t1").value;
    const email = document.querySelector("#t2").value;
    if(name.length == 0 || email.length==0){
        alert("Should not empty");
    }
}
