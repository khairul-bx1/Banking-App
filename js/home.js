
function validate(fieldId, errorId, regex, emptyMsg, invalidMsg) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(errorId);

    if ( field.value === "") {
        error.textContent = emptyMsg;
        return false;
    } else if ( !regex.test(field.value)) {
        error.textContent = invalidMsg;
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

const loginbtn = document.getElementById('loginButton');
loginbtn.addEventListener('click', function(e) {
    e.preventDefault();

    const nameValid = validate('name', 'name-error', /^[A-Za-z\s]+$/, 'Name is required', 'Only letter allowed')
    const numberValid = validate('mobile-number', 'number-error', /^[0-9]+$/, 'Number is required', 'Only number allowed')
    const pinValid = validate('pin-number', 'pin-error', /^[0-9]{4}$/, 'Pin is required', 'Only 4 digit number allowed')

    if ( nameValid && numberValid && pinValid) {
        window.location.href = './dashboard.html'
    }
})
