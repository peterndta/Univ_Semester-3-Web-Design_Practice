document.addEventListener("DOMContentLoaded",function(){
    const input = document.querySelector("#txtsearch");
    input.addEventListener("keyup",function(e){
        if(e.keyCode === 13){
            if(input.value.length === 0){
                alert("Trong");
                input.style.backgroundColor ="red";
            }else{
                window.open("./index.html","_self");
            }
        }
    })
})
