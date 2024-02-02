document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const errorMsg = document.querySelector('.msg-error');
    const submitBtn = document.getElementById('btn-click');

    submitBtn.addEventListener('click', function (event) {
      event.preventDefault();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailRegex.test(emailInput.value)) {
        localStorage.setItem('userEmail', emailInput.value);
        window.location.href = 'succes.html';
      } else {
        errorMsg.style.display = 'block';
        emailInput.style.borderColor = 'red';
        emailInput.style.backgroundColor = '#e7564b41';
        emailInput.style.color = '#ff6257';
      }
    });

    emailInput.addEventListener('focus', function () {
      errorMsg.style.display = 'none';
      emailInput.style.borderColor = '#999';
      emailInput.style.backgroundColor = 'white';
      emailInput.style.color = 'black';
    });
  });