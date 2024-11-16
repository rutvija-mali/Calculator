const inputScreen = document.querySelector('.input-screen')
const numbersButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const equalsButton = document.querySelector(".equals")
const resetButton = document.querySelector(".reset")
const deleteButton = document.querySelector(".delete")

function deletelastnumber(string){
   inputScreen.textContent = inputScreen.textContent.slice(0,-1)

}

function resetall(){
     inputScreen.textContent = ""
}

function compute(expression){
     if(isNaN(expression.slice(-1))) return
     
     try {
        let result = eval(expression)
        if (isNaN(result)) {
            inputScreen.textContent = "Error";
        } else {
            inputScreen.textContent = result % 1 === 0 ? result : result.toFixed(3);
        }
        
     } catch (error) {
        inputScreen.textContent = "Error"
     }

}

function display(input){
    // check if first input is operator
    if(inputScreen.textContent == "" && input == "×" || inputScreen.textContent == "" && input == "/") return ;
    

    let lastChar = inputScreen.textContent.slice(-1)
    if(isNaN(lastChar) && isNaN(input)){
       inputScreen.textContent = inputScreen.textContent.slice(0,-1) + input
       return
    }
    if(inputScreen.textContent.includes(".") && input == ".") return
    inputScreen.textContent += input
}


numbersButtons.forEach((number)=>{
    number.addEventListener("click",()=>{
        display(number.textContent)
    })
})

operatorButtons.forEach((operator)=>{
    operator.addEventListener("click",()=>{
        display(operator.textContent)
    })
})

equalsButton.addEventListener("click",()=>{
    compute(inputScreen.textContent)
})
deleteButton.addEventListener("click",deletelastnumber)
resetButton.addEventListener("click",resetall)



