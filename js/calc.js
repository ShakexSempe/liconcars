// INPUT VARIABLES

// OUTPUT VARIABLES 
function myFunction() {
    const price = document.getElementById("price").value;
    const amount = parseInt(price);

    const deposit = document.getElementById("deposit").value;
    const depositAmount = parseInt(deposit);
    console.log(deposit);


    const balance = price - deposit;
    console.log(balance);

    emp.innerHTML = price;
    console.log(emp);
    finance.innerHTML = balance;
    console.log(finance);
} 