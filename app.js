const fillForm = document.querySelector('#form');
fillForm.addEventListener('submit', handldeSubmit);
const buttonMyMail = document.querySelector('#myMail');

function toggleMenu (){
    const menuToggle = document.querySelector('.toggle');
    const sidebar = document.querySelector('.sidebar');
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}

function handldeSubmit(event){
    event.preventDefault();
    const form = new FormData(this);   
    buttonMyMail.setAttribute('href', `mailto:nimrod7day@gmail.com?subject=${form.get('name')} ${form.get('email')}&body=${form.get('message')} ${form.get('mobile')}`)
    buttonMyMail.click();    
}
