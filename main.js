const loginBtn = document.getElementById('sub-btn');
loginBtn.addEventListener('click', function(){
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('trasition-area').style.display = 'block';
})
    //   Diposit Amount Input  
const dipositBtn = document.getElementById('diposit-sub');
dipositBtn.addEventListener('click', function(){
    const dipositNumber = getInputValue('diposit-amount');
    updateSpanText("current-diposit", dipositNumber);
    updateSpanText("current-balance", dipositNumber);
    emptyInput('diposit-amount');
})
//   Diposit Amount Input End 

//   Withdraw Amount Input start 
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function(){
    const withdrawNumber = getInputValue('withdraw-amount');
    updateSpanText("current-withdraw", withdrawNumber);
    updateSpanText("current-balance", -1 * withdrawNumber);
    emptyInput('withdraw-amount');
})
//   Withdraw Amount Input end

function updateSpanText(id, dipositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = dipositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}
function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function emptyInput(id){
    document.getElementById(id).value = "";
}