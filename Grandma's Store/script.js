let input = document.getElementById("input");
let outlineArea = document.getElementsByClassName("outline-img")[0]
let imagesSection = document.getElementsByClassName("store-images")[0]
let cardArea = Array.from(document.querySelectorAll(".img-card"));

let text;

outlineArea.addEventListener("mouseenter",() =>{
    if(outlineArea.classList.contains("outline-img")){
        outlineArea.classList.add("hover-state")
    }
})


outlineArea.addEventListener("mouseleave",() =>{
    if(outlineArea.classList.contains("hover-state")){
        outlineArea.classList.remove("hover-state")
    }
})



input.addEventListener("keyup",()=>{

     let inputValue = input.value;
     let upperCaseValue = inputValue.toUpperCase()

   
})


