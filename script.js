window.addEventListener('DOMContentLoaded', function() {
    const email = document.getElementById('email');
    const submitBtn = document.getElementById('btn-click');
    const errorMessage = document.querySelector('.msg-error');
    const cardImg = document.getElementById('card-img');

    if (window.innerWidth <= 375) {
        cardImg.src = '/assets/images/illustration-sign-up-mobile.svg';
    } 

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(emailRegex.test(email.value)){
            localStorage.setItem('userEmail', email.value);
            window.location.href = 'succes.html';

        }else{
            errorMessage.style.display = 'block';
            email.style.borderColor = 'red';
            email.style.backgroundColor = '#e7564b41';
            email.style.color = '#ff6257';
        }
    });

    email.addEventListener('focus', function() {
        errorMessage.style.display = 'none';
        email.style.borderColor = '#999';
        email.style.backgroundColor = 'white';
        email.style.color = 'black';
    });
});