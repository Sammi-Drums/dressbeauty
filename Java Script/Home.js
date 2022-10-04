let butn = document.querySelector(".btn");
let mobil = document.querySelector(".mobile");

let menu1 = document.querySelector(".Hm");
let menu2 = document.querySelector(".Sv");
let menu3 = document.querySelector(".Cu");
let menu4 = document.querySelector(".Bk");





butn.addEventListener("click", function(){
    if (mobil.classList.contains("disappear")) {
        mobil.classList.remove("disappear");
    }
    else{
        mobil.classList.add("disappear")
    }
});

menu1.addEventListener("click", function(){
    if (mobil.classList.contains("disappear")) {
        mobil.classList.remove("disappear");
    }
    else{
        mobil.classList.add("disappear");
    }
});


// menu1.addEventListener("click", function(){
//     if(menu1.classList.contains("active")){
//         menu1.classList.add("active")
//     }
// });


