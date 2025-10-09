

function Calculate() {
    // INPUT VARIABLES
    // Extracting value in the PRICE AMOUNT 
    // section in the variable
    const amount = document.querySelector("#price").value;
    // Extracting value in the INTEREST RATE
    const rate = document.querySelector("#interest").value;
    // Extracting value in the MONTHS/TERM 
    const months = document.querySelector("#months").value;
    // Extracting value in the DEPOSIT 
    const deposit = document.getElementById("deposit").value;
    // REMAINING FINANCE 
    const finance = document.getElementById("finance");
    // Calculating interest per month
    const interest = (amount * (rate * 0.01)) / months;
    // Calculating total payment
    const total = ((amount / months) + interest).toFixed(2);
    // INSERT TOTAL IN EMP ELEMENT
    document.querySelector("#emp")
            .innerHTML = total;
    // INSERT REMAINING FINANCE INTO ELEMENT
    finance.innerHTML = amount - deposit;
    
}