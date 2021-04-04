const input = document.getElementById('inputEmail');
const errorMessage = document.getElementById('errorMessage');
const errorIcon = document.getElementById('errorIcon');
const btnEmail = document.getElementById('buttonEmail');


btnEmail.addEventListener('click', e => {
    e.preventDefault();
    const emailTyped = input.value;

    if (verifyingEmail(emailTyped)){
        errorMessage.style.opacity="0";
        errorIcon.style.opacity="0";
        input.style.border="1px solid hsl(0, 36%, 70%)";        
        
    } else {
        errorMessage.style.opacity="1";
        errorIcon.style.opacity="1";
        input.style.border="2px solid hsl(0, 93%, 68%)";
    }    
});

//function in order to test whether the text typed within the input has a proper email format

function verifyingEmail(email){
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}