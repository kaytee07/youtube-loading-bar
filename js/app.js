const loadingBarEl = document.querySelector(".loading-bar__item");
const buttonEl = document.querySelectorAll("button")

// let width = 1;
// let loadingBar = setInterval(function(){
//     if(width >= 100){
//       clearInterval(loadingBar);
//     }else{
//          width++;
//          loadingBarEl.style.width = width + "%";
//     }
// }, 9);


function loadingPoint(){
    for (let button of buttonEl){
        console.log(button)
         if(button.classList.contains("btn-30")){
             button.addEventListener("click",function(){
                 loadingBarEl.style.width = "30%";
             })
         }else if(button.classList.contains("btn-60")){
               button.addEventListener("click",function(){
                 loadingBarEl.style.width = "60%";
             })
         }else if(button.classList.contains("btn-90")){
               button.addEventListener("click",function(){
                 loadingBarEl.style.width = "90%";
               })
         }else{
               loadingBarEl.style.width = "10%";
         }
    }
}

loadingPoint()
