
document.getElementById('cashout-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('hello');

    const cashoutAccountInput = document.getElementById('cashout-account-input').value;

    const cashoutAmountInput = document.getElementById('cashout-amount-input').value;

    const cashoutPinInput = document.getElementById('cashout-pin-input').value;

    if( cashoutPinInput === '1234'){

        const totalBalance = document.getElementById('balanced').innerText;

        const totalBalanceNumber = parseFloat(totalBalance);
        const cashoutAmountNumber = parseFloat(cashoutAmountInput);

        const newBalance = totalBalanceNumber - cashoutAmountNumber;

        document.getElementById('balanced').innerText = newBalance;

    }

    else{
        alert('enter verified pin');
    }

});