// INPUT VARIABLES

// OUTPUT VARIABLES 
// function myFunction() {
//     const price = document.getElementById("price").value;
//     const amount = parseInt(price);

//     const deposit = document.getElementById("deposit").value;
//     const depositAmount = parseInt(deposit);
//     console.log(deposit);


//     const balance = price - deposit;
//     console.log(balance);

//     emp.innerHTML = price;
//     console.log(emp);
//     finance.innerHTML = balance;
//     console.log(finance);
// } 

function Calculate() {

    // Extracting value in the amount 
    // section in the variable
    const amount = document.querySelector("#price").value;

    // Extracting value in the interest
    // rate section in the variable
    const rate = document.querySelector("#interest").value;

    // Extracting value in the months 
    // section in the variable
    const months = document.querySelector("#months").value;

    // Calculating interest per month
    const interest = (amount * (rate * 0.01)) / months;
    
    // Calculating total payment
    const total = ((amount / months) + interest).toFixed(2);

    document.querySelector("#emp")
            .innerHTML = total;

    const deposit = document.getElementById("deposit").value;
    const finance = document.getElementById("finance");
    console.log(deposit);
    console.log(finance);
    // const balance = price - deposit;
    finance.innerHTML = amount - deposit;
    
}