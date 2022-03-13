const hamburgesa = document.getElementById('hamburgesa');
const navUL = document.getElementById('nav-ul');

hamburgesa.addEventListener('click', () => {
    navUL.classList.toggle('show');

});