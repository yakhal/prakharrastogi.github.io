let persons = 0;
let amount = 0;
let tip = 0;

// Get Inputs from Tip Button and Setting event Listners
const tip_buttons = document.querySelectorAll(".percentages input[type='button']");
tip_buttons.forEach((button) => {
    button.addEventListener("click", (evt) => {
        getTip(evt);
    })
});
const custom_tip_button = document.querySelector("#tip");
custom_tip_button.oninput = () =>{
    tip = parseInt(document.querySelector("#tip").value)/100;
    inputValidation();
    calculate();
};

// Getting inputs : Bill and Persons
const amount_input = document.querySelector("#amount");
const person_input = document.querySelector("#people");
amount_input.oninput = getBill;
person_input.oninput = getPersons;

// GEtting Reset Button
const reset_button = document.querySelector("button[type='reset']");
reset_button.addEventListener("click", resetvalues);

// Getting Result Displays
const amountDisplay = document.querySelector("#amount-display");
const tipDisplay = document.querySelector("#tip-amount-display");

function getTip(evt){
    document.querySelector("#tip").value = "";
    tip = parseInt(evt.target.value)/100;
    inputValidation();
    calculate();
}

function getBill(){
    resetInputs("#amount", "#error1")
    amount = parseInt(amount_input.value);
    calculate();
}

function getPersons(){
    resetInputs("#people", "#error2")
    persons = parseInt(person_input.value);
    calculate();   
}

function inputValidation(){
    if (!amount){
        amount_input.classList.add("error-border");
        document.querySelector("#error1").classList.add("unhide");
    }
    else if (!persons){
        person_input.classList.add("error-border");
        document.querySelector("#error2").classList.add("unhide");
    }
}

function resetInputs(id1, id2){
    document.querySelector(id1).classList.remove("error-border");
    document.querySelector(id2).classList.remove("unhide");
}

function calculate(){
    // Taking inputs
    // For Displaying results 
    console.log(`Amount : ${amount} Tip : ${tip} Persons : ${persons}`);
    
    if (amount && persons && tip){
        amountDisplay.innerText = "$" + Math.round(((amount + tip*amount)/ persons) * 100) / 100;
        tipDisplay.innerText = "$" + Math.round((tip*amount / persons) * 100) / 100;
    }
    else if (amount && persons){
        tipDisplay.innerText = "$0.00";
        amountDisplay.innerText = "$" + Math.round((amount / persons) * 100) / 100;
    } else {
        amountDisplay.innerText = "$0.00";
        tipDisplay.innerText = "$0.00";
    }
    
}

function resetvalues() {
    person = amount = tip = 0;
    amountDisplay.innerHTML = "$0.00";
    tipDisplay.innerHTML = "$0.00";
}