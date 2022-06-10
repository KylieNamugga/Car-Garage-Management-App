const validation = () => {
    var firstname = document.getElementById("firstname")
    var lastname = document.getElementById("lastname")
    var email = document.getElementById("email")
    var password = document.getElementById("password");

    // validation errors in small tag
    const fNameError = document.getElementById("fNameError");
    const lNameError = document.getElementById("lNameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // firstname validation
    if (firstname.value == "") {
        fNameError.innerHTML = "First name is required";
        firstname.style.border = "1px solid red";
        firstname.focus();
        return false;
    } else {
        const lNamelengthRegex = /^[A-Z][a-z]$/;
        if (lNamelengthRegex.test(firstname.value) === false) {
            fNameError.innerHTML = "First name should start with a capital letter";
            firstname.style.border = "1px solid red";
            firstname.focus();
            return false;
        } else {
            fNameError.innerHTML = "";
            firstname.style.border = "";
        }
    }

    // lastname validation
    if (lastname.value == "") {
        lNameError.innerHTML = "Last name is required";
        lastname.style.border = "1px solid red";
        lastname.focus();
        return false;
    } else {
        const lnameRegex = /^[A-Z][a-z]$/;
        if (lnameRegex.test(lastname.value) === false) {
            lNameError.innerHTML = "Last name should start with a capital letter";
            lastname.style.border = "1px solid red";
            lastname.focus();
            return false;
        } else {
            lNameError.innerHTML = "";
            lastname.style.border = "";
        }
    }

    // email validation
    if (email.value == "") {
        emailError.innerHTML = "Email is required";
        email.style.border = "1px solid red";
        email.focus();
        return false;
    } else {
        const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if (emailRegex.test(email.value) === false) {
            emailError.innerHTML = "Invalid email address";
            email.style.border = "1px solid red";
            email.focus();
            return false;
        } else {
            emailError.innerHTML = "";
            email.style.border = "";
        }
    }

    // password validation
    if (password.value == "") {
        passwordError.innerHTML = "Password is required";
        password.style.border = "1px solid red";
        password.focus();
        return false;
    } else {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]){8,}$/;
        if (passwordRegex.test(password.value) === false) {
            passwordError.innerHTML = "Password should contain at least 8 characters, one uppercase and one lowercase letter";
            password.style.border = "1px solid red";
            password.focus();
            return false;
        } else {
            passwordError.innerHTML = "";
            password.style.border = "";
        }
    }
}



