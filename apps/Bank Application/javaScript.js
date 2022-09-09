console.log("Working fine");


let Balence;
let depositMoney;
let WithdrawMoney;

loadAccount();
loadBalence();


function loadAccount() {
    let bal = localStorage.getItem('balence');
    if (bal == null && bal == undefined) {
        let a = 0;
        localStorage.setItem('balence', a);
        let p = localStorage.getItem('balence');
        Balence = a;
        loadBalence();
    } else {
        // localStorage.removeItem('balence');
        let p = localStorage.getItem('balence');
        Balence = p;
        loadBalence();
    }
}

function loadBalence() {
    document.getElementById('account_balence').innerHTML = `Your account Balence is ${Balence}`;
    return Balence;
}

function deposit() {
    let person = prompt("Please enter the Deposit amount", "Amount...");
    console.log(typeof person);
    if (typeof person == 'string') {        
        var a = parseInt(Balence) + parseInt(person);
        localStorage.setItem('balence', a);
        Balence = a;
        let errDOM = document.getElementById('err').innerHTML = 'Succesfully Deposited';
    } else {
        let errDOM = document.getElementById('err').innerHTML = 'Wrong Value, pls enter an integer';
    }
    loadBalence();
}

function withdraw() {
    let person = prompt("Please enter the Deposit amount", "Amount...");
    if (parseInt(person) <= Balence) {
        var a = parseInt(Balence) - parseInt(person);
        localStorage.setItem('balence', a);
        Balence = a;
        loadBalence();
    } else {
        let errDOM = document.getElementById('err').innerHTML = 'Sorry That Amount Cant he Withdraw.';
    }
}