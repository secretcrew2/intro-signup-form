const form = document.querySelector('form');
const btn = document.getElementsByClassName('input-button');
form.addEventListener('submit', function(event){
    event.preventDefault();
})
for(let i = 0; i < btn.length ; i++){
    btn[i].addEventListener('input', () =>{
        hideWarning(i);
    });
}


// const warningIcon = document.getElementsByClassName('input-button');
let inputType = document.getElementsByClassName('text');
function receiveInput(){

    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let arrInput = [firstName, lastName, email, password];
    let mapInput = arrInput.map(arr => arr.length > 0);
    for(let i = 0; i < mapInput.length; i++){
        if(!mapInput[i]){
            showWarning(i);
        } else if(i===2 && !isValidEmail(email)){
            form[i].nextElementSibling.textContent = 'Looks like this is not an email';
            showWarning(i);
        }
    };
}

function showWarning(index){
    form[index].classList.add('warning');
    form[index].nextElementSibling.style.visibility = 'visible';
}
function isValidEmail(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(email);
  }

function hideWarning(index){
    form[index].classList.remove('warning');
    form[index].nextElementSibling.style.visibility = 'hidden';
}