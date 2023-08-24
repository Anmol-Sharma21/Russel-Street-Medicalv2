const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.right')

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const switchButton1 = document.getElementById('switchButton1');
    const switchButton2 = document.getElementById('switchButton2');
    const currentPatientsDiv = document.getElementById('current_patients');
    const newPatientsDiv = document.getElementById('new_patients');

    switchButton1.addEventListener('click', () => {
        currentPatientsDiv.classList.remove('hidden');
        newPatientsDiv.classList.add('hidden');
    });

    switchButton2.addEventListener('click', () => {
        currentPatientsDiv.classList.add('hidden');
        newPatientsDiv.classList.remove('hidden');
    });
});