let input = document.getElementById("input");
let imgCard = Array.from(document.querySelectorAll(".img-card"))
let outlineArea = document.getElementsByClassName("outline-img")[0]
let btnText = Array.from(document.getElementsByClassName("btn-1"))

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


input.addEventListener("keyup", () =>{
 let inputValue = input.value.toUpperCase();
 
// iterate through all image 
for( let i = 0; i < imgCard.length; i++){
 let initialCard = imgCard[i];
 let title = initialCard.querySelector(".title")

 let textToBeMatched = title.innerHTML.toUpperCase();

//  check if the text matches with the user input value
 if(textToBeMatched.indexOf(inputValue) > -1){
    initialCard.style.display = "initial"
 }
 else {
    initialCard.style.display = "none"
 }

}
})

//    iterate through all buttons tag
let btnArray = btnText.forEach(button =>{
    button.addEventListener("click", ()=>{

    for(let i = 0; i < imgCard.length; i++){
    let result = imgCard[i]

    if(button.innerText === "ALL"){
      result.style.display = "block"
    }
    else if(button.innerText === "CAKES" &&
            result.innerHTML.includes("Cake item") === false){
            result.style.display = "none"
    }
    else if(button.innerText === "CUPCAKES" &&
            result.innerHTML.includes("Cupcake item") === false){
            result.style.display = "none"
    }
    else if(button.innerText === "SWEETS" &&
            result.innerHTML.includes("Sweet item") === false){
            result.style.display = "none"
    }
    else if(button.innerText === "DOUGHNUTS" &&
            result.innerHTML.includes("Doughnut item") === false){
            result.style.display = "none"
    }
    else{
        result.style.display = "block"
    }
    
    }
    })

})

