const loginBtn = document.getElementById('sub-btn');
loginBtn.addEventListener('click', function(){
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('trasition-area').style.display = 'block';
})
        
const dipositBtn = document.getElementById('diposit-sub');
dipositBtn.addEventListener('click', function(){
    const dipositAmount = document.getElementById('diposit-amount').value;
    const dipositNumber = parseFloat(dipositAmount);

    updateSpanText("current-diposit", dipositNumber);
    updateSpanText("current-balance", dipositNumber);
    emptyInput('diposit-amount');
})

function updateSpanText(id, dipositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = dipositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}

const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdraw-amount').value;
    const withdrawNumber = parseFloat(withdrawAmount);
    updateSpanText("current-withdraw", withdrawNumber);
    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const netBalance = currentBalanceNumber - withdrawNumber;
    document.getElementById('current-balance').innerText = netBalance;
    emptyInput('withdraw-amount');
})
function emptyInput(id){
    document.getElementById(id).value = "";
}