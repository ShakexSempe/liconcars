// SAVE FORM ELEMENT AS VARIABLE
const form = document.querySelector("form");
// EVENT LISTENER TO FORM = PREVENT DEFAULT FORM SUBMIT
// & RUN CALCULATE FUNCTION
form.addEventListener('submit', (e) => {
    e.preventDefault();
    Calculate();
})

function Calculate() {
    // INPUT VARIABLES
    // Extracting value in the PRICE AMOUNT 
    const amount = parseFloat(document.querySelector("#price").value);
    // Extracting value in the DEPOSIT 
    const deposit = parseFloat(document.getElementById("deposit").value);
    // Extracting value in the INTEREST RATE
    const rate = parseFloat(document.querySelector("#interest").value) /100;
    // Extracting value in the MONTHS/TERM 
    const months = parseInt(document.querySelector("#months").value);
    // Extracting value in the BALLOON 
    const balloon = parseFloat(document.getElementById("balloon").value) / 100;
    
    // OUTPUT VARIABLES  
    // Calculating INTEREST PER MONTH
    const interest = (amount * (rate * 0.01)) / months;
    // Calculating BALLOON 
    const balloonAmount = amount * balloon;
    // Calculating TOTAL PAYMENT ie. THE EMP
    const total = ((amount / months) + interest).toFixed(2);
    // INSERT REMAINING FINANCE INTO ELEMENT
    document.querySelector("#finance").innerHTML = 'R' + (amount - deposit);
    // INSERT BALLOON AMOUNT INTO ELEMENT
    document.querySelector("#balloonAmount").innerHTML = 'R' + balloonAmount;
    // INSERT TOTAL IN EMP ELEMENT
    document.querySelector("#emp").innerHTML = 'R' + total;
}