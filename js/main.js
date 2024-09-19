
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('number-input').value;

    const pinNumber = document.getElementById('pin-input').value;

    console.log(phoneNumber, pinNumber);

    if ( phoneNumber === '5' && pinNumber === '1234'){
        window.location.href = './home.html';

    }
    else{
        alert('Incorrect data');
    }

});
