let inpNum = document.getElementById("input")
let button = document.getElementById("button")
let wrong = document.querySelector(".wrng")
let guess = document.getElementById("guess")


let ans  = Math.floor(Math.random()*100) + 1
console.log(ans)

let numGuesses = 0


button.addEventListener('click' , ()=>{
    generateNum() 
})


function generateNum(){
    if(inpNum.value>100 || inpNum.value<0 || isNaN(input.value)){
          wrong.innerHTML = "Please enter number between 1 to 100"
    }else{
        numGuesses++
        guess.innerHTML = "No of Guesses:" +numGuesses
        
        if(inpNum.value>ans){
             wrong.innerHTML = "Value too high"
             inpNum.value = ""
        }else if(input.value<ans){
             wrong.innerHTML = "Value too low"
             inpNum.value = ""
        }else if(input.value == ans){
            wrong.innerHTML = "You guess is correct"
            inpNum.value = ""
        }
    } 
}