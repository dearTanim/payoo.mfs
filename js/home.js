document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();

    document.getElementById('add-money-form').classList.add('hidden');
});


document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addAccountInput = document.getElementById('add-account-input').value;

    const addAmountInput = document.getElementById('add-amount-input').value;

    const addPinInput = document.getElementById('add-pin-input').value;

    if( addPinInput === '1234'){

        const totalBalance = document.getElementById('balanced').innerText;

        const totalBalanceNumber = parseFloat(totalBalance);
        const addAmountNumber = parseFloat(addAmountInput);

        const newBalance = totalBalanceNumber + addAmountNumber;

        document.getElementById('balanced').innerText = newBalance;

    }
    else{
        alert('enter verified pin');
    }

});
