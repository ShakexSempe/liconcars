

function Calculate() {
    // INPUT VARIABLES
    // Extracting value in the PRICE AMOUNT 
    // section in the variable
    const amount = parseFloat(document.querySelector("#price").value);
    // Extracting value in the DEPOSIT 
    const deposit = parseFloat(document.getElementById("deposit").value);
    // Extracting value in the INTEREST RATE
    const rate = parseFloat(document.querySelector("#interest").value) /100;
    // Extracting value in the MONTHS/TERM 
    const months = parseInt(document.querySelector("#months").value);
    // Extracting value in the BALLOON 
    const balloon = parseFloat(document.getElementById("balloon").value) / 100;
    // REMAINING FINANCE 
    // const finance = document.getElementById("finance");
    // Calculating interest per month
    const interest = (amount * (rate * 0.01)) / months;
    // Calculating BALLOON 
    const balloonAmount = amount * balloon;
    // Calculating total payment
    const total = ((amount / months) + interest).toFixed(2);
    // INSERT TOTAL IN EMP ELEMENT
    document.querySelector("#emp")
            .innerHTML = total;
    // INSERT REMAINING FINANCE INTO ELEMENT
    document.querySelector("#finance").innerHTML = 'R' + (amount - deposit);
    // INSERT BALLOON AMOUNT INTO ELEMENT
    document.querySelector("#balloonAmount").innerHTML = 'R' + balloonAmount;
}