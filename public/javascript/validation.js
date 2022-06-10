// validation at the top of our forms
const validateSignUp = () => {
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var email = document.getElementById('email');
    var password = document.getElementById('confirmPassword');
    // validation errors in small tag
    const fNameError = document.getElementById("fNameError");
    const lNameError = document.getElementById("lNameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");


    // name should not be empty
    if (firstname.value == '') {
        firstname.style.border = '1px solid red';
        fNameError.innerHTML = "Please provide your first name";
        fNameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        // name should start with capital letter
        const fNameRegex = /^[A-Z][a-z]*$/;
        if (fNameRegex.test(firstname.value) === false) {
            firstname.style.border = '1px solid red';
            fNameError.innerHTML = "first name should start with a capital letter";
            fNameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
            return false
            // name should be these characters
        } else {
            const fNamelengthRegex = /^[A-Z][a-z]{2,10}$/
            if (fNamelengthRegex.test(firstname.value) === false) {
                firstname.style.border = '1px solid red';
                fNameError.innerHTML = "first name should be 3-10 characters";
                fNameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
                return false
            } else {
                fNameError.textContent = "";
                firstname.style.border = '1px solid green';
            }
        }


    }

    // last name validation (Kylie)
    if (lastname.value == '') {
        lastname.style.border = '1px solid red';
        lNameError.innerHTML = "Please provide your last name";
        lNameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        // name should start with capital letter
        const lNameRegex = /^[A-Z][a-z]*$/;
        if (lNameRegex.test(lastname.value) === false) {
            lastname.style.border = '1px solid red';
            lNameError.innerHTML = "last name should start with a capital letter";
            lNameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
            return false
            // name should be these characters
        } else {
            const lNamelengthRegex = /^[A-Z][a-z]{2,10}$/
            if (lNamelengthRegex.test(lastname.value) === false) {
                lastname.style.border = '1px solid red';
                lNameError.innerHTML = "first name should be 5-10 characters";
                lNameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
                return false
            } else {
                lNameError.textContent = "";
                lastname.style.border = '1px solid green';
            }
        }


    }

    // email should not be empty
    if (email.value == '') {
        email.style.border = '1px solid red';
        emailError.innerHTML = "email field should not be left empty";
        emailError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        //  email format of kylie@gmail.com
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRegex.test(email.value) === false) {
            email.style.border = '1px solid red';
            emailError.innerHTML = "Please provide a valid email";
            emailError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
            return false
        }
        if (emailRegex.test(email.value) === true) {
            email.style.border = '1px solid green';
            emailError.innerHTML = "";
            emailError.style = 'color:green; font-family:Arial, Helvetica, Sans-serif;';
            return true
        }
    }

    // password should not be empty
    if (password.value == '') {
        password.style.border = '1px solid red';
        passwordError.innerHTML = "password field should not be left empty";
        passwordError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        // password should be 8 characters
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (passwordRegex.test(password.value) === false) {
            password.style.border = '1px solid red';
            passwordError.innerHTML = "password should be 8 characters";
            passwordError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
            return false
        } else {
            password.style.border = '1px solid green';
            passwordError.innerHTML = "";
            passwordError.style = 'color:green; font-family:Arial, Helvetica, Sans-serif;';
            return true
        }
    }

}

