const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click",() => {
        if (button.innerText == "DEL"){
            screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1);
        }
        else if (button.innerText == "RESET"){
            screen.innerText = ""
        }
        else if (button.innerText == "="){
            if (screen.innerText != "")
                screen.innerText = eval(screen.innerText);
        }
        else{
            let letter = button.innerText;
            let lastCharacter = screen.innerText.charAt(screen.innerText.length - 1)
            // alert(isOperator(!isOperator(letter) && screen.innerText == ""));
            if (screen.innerText != ""){
                if (!isOperator(letter)){
                    screen.innerText += letter;
                }
                else if(isOperator(lastCharacter)){
                    if (lastCharacter != letter){
                        screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1) + letter;
                    }
                }
                else{
                    screen.innerText += letter;
                }
            }
            else if(!isOperator(letter)){
                screen.innerText += letter;
            }
        }
    })
    // Style change of Buttons
    button.addEventListener("mousedown", () => {
        button.classList.add("clicked");
    })
    button.addEventListener("mouseup", ()=>{
        button.classList.remove("clicked");
    })
})

function isOperator(letter){
    return (letter == "+" || letter == "-" || letter == "x" || letter == "/" || letter == ".");
}