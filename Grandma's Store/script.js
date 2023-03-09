let input = document.getElementById("input");
let outlineArea = document.getElementsByClassName("outline-img")[0]
let imagesSection = document.getElementsByClassName("store-images")[0]
let card = document.getElementById("img-card");



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
    
       for(let i = 0; i < imageNames.length; i++){

     let matchedText = imageNames[i].getElementsByTagName("h1")[0]   
     let text = matchedText.innerHTML;

     let textArray =   text.split(", ");

     for(let j = 0; j < textArray.length; j++) {
        if(textArray[j][0].toUpperCase() === upperCaseValue.charAt(0) )

        // &&  imagesSection.innerHTML.includes(textArray) == true 
        {
            imagesSection.innerHTML = card.innerHTML += `
            <div id ="img-card">
            <img class = "cookies-img" src="https://js-beginners.github.io/filter-project/img/cupcake-1.jpeg" alt="">
            <div class="card-text">
              <h1 class = "main-text">${textArray[j]}</h1>
              <p>
                $5
              </p>
            </div>
            </div>
            
            `

           
        }   
        else{
            console.log(2)
        } 

        
    }  
       
     }
      
   
})

