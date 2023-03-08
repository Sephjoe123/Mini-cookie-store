let input = document.getElementById("input");
let outlineArea = document.getElementsByClassName("outline-img")[0]


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

     let imageNames = Array.from(document.getElementsByClassName("card-text"));
    //  let images = Array.from(document.getElementsByClassName("cookie-img"))

     for(let i = 0; i < imageNames.length; i++){
     
     let textToBeMatched = imageNames[i].getElementsByTagName("h1")[0]
     let cookiePrice = imageNames[i].getElementsByTagName("p")[0]
       
     if(textToBeMatched.innerHTML.toUpperCase().indexOf(upperCaseValue) == - 1){
        textToBeMatched.style.display = "";
 } 
//      else if(cookiePrice.innerHTML.toUpperCase().indexOf(upperCaseValue) == -1){
//         cookiePrice.style.display = ""
//  }
     else{
        textToBeMatched.style.display = "none"; 
        // cookiePrice.style.display = "none" 
    
 }
      }

    

})

