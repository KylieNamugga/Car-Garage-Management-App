const validateLogIn = () => {

    var email = document.getElementById('email');
    var password = document.getElementById('password');

    // validation errors in small tag

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    if (email.value == '') {
        email.style.border = '2px solid red';
        emailError.innerHTML = "email field should not be left empty";
        emailError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRegex.test(email.value) === false) {
            email.style.border = '2px solid red';
            emailError.innerHTML = "Please provide a valid email";
            emailError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
            return false
        }else{
            emailError.textContent = "";
            email.style.border = '2px solid green';
        }
    }

    if (password.value == '') {
        password.style.border = '2px solid red';
        passwordError.innerHTML = "field should not be left empty";
        passwordError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).*$/
        if (passwordRegex.test(password.value) === false) {
            password.style.border = '2px solid red';
            passwordError.innerHTML = "password of Minimum eight characters,atleast 1 uppercase,1 lowercase";
            passwordError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
            return false
        }else{
            passwordError.textContent = "";
            password.style.border = '2px solid green';
        }
    }
}

