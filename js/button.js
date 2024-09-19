document.getElementById('cash-out').addEventListener('click', function(event){
    event.preventDefault();

    document.getElementById('cashout-money-form').classList.remove('hidden');

    document.getElementById('add-money-form').classList.add('hidden');
});

document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();

    document.getElementById('add-money-form').classList.remove('hidden');

    document.getElementById('cashout-money-form').classList.add('hidden');
});