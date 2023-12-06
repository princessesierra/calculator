//declare screen elements
let output1 = document.querySelector(".output1");
let output2 = document.querySelector(".output2");

//Declare all buttons
let allButtons = document.querySelectorAll("button");

//Initializing current input and output
let currentInput = "";
let currentOutput = "";

//Declare clear and del buttons
let btnClear = document.querySelector("#clear");
let btnClearAll = document.querySelector("#clear-all");
let btnDel = document.querySelector("#del");

//Declare equal button
let btnEqual = document.querySelector("#equal");

//Declare all the number buttons in one variable and all operator buttons in one variable
let numberButtons = document.querySelectorAll(".digit.number");
let operatorButtons = document.querySelectorAll(".digit.operator");

//Function to clear Output1
function clearOutput1() {
    currentInput="";
    output1.innerHTML = currentInput;
    }
    
    //Function to clear Output2
    function clearOutput2() {
    currentOutput = "";
    output2.innerHTML = currentOutput;
    }
    
    //Function to clear both Output1 and Output2 together
    function clearScreen() {
    clearOutput1();
    clearOutput2();
    }

    //Function to delete a digit
    function deleteDigit() {
        currentInput = currentInput.slice(0,-1);
        updateOutput1(currentInput);
    }

    btnDel.onclick = deleteDigit;

//Function to add event handler to button
function attachClickHandler(button) {
    button.addEventListener("click", function() {
    handleButtonClick(button);
});
}
allButtons.forEach(attachClickHandler);

        //Function to update Output1
        function updateOutput1(value) {
            output1.innerHTML = value;
        }
    
        //Function to update Output2
        function updateOutput2(value) {
            output2.innerHTML = value;
        }

        function handleButtonClick(button) {
            const buttonValue = button.value;
            if (output1.innerHTML === "") {
                if (buttonValue === "clear") {
                    clearOutput1();
                }
                else if (buttonValue === "clear-all") {
                    clearScreen();
                }
                else if (buttonValue === "del") {
                        
                }
                else if (buttonValue === "=") {
                    currentOutput = eval(currentInput);
                    updateOutput2(currentOutput);
                }
                else if (button.classList.contains("operator")){
                    
                }
                else {
                    currentInput += buttonValue;
                    updateOutput1(currentInput);
                }
            }
        
            else {
                if (output2.innerHTML === "") {
                    if (buttonValue === "clear") {
                        clearOutput1();
                    }
                    else if (buttonValue === "clear-all") {
                        clearScreen();
                    }
                    else if (buttonValue === "del") {
                    }
                    else if (buttonValue === "=") {
                        currentOutput = eval(currentInput);
                        updateOutput2(currentOutput);
                    }
                    else {
                        currentInput += buttonValue;
                        updateOutput1(currentInput);
                    }
                }
                else {
                    if (buttonValue === "clear") {
                        clearOutput1();
                    }
                    else if (buttonValue === "clear-all") {
                        clearScreen();
                    }
                    else if (buttonValue === "del") {
                         clearOutput2();   
                    }
                    else if (buttonValue === "=") {
                        currentOutput = eval(currentInput);
                        updateOutput2(currentOutput);
                    }
                    else if (button.classList.contains("operator")){
                        clearOutput2();
                        currentInput += buttonValue;
                        updateOutput1(currentInput);
                    }
                    else {
                        clearScreen();
                        currentInput += buttonValue;
                        updateOutput1(currentInput);
                    }
                }
            }
        }