const regValidation = () => {
    const fullname = document.getElementById('fullname')
    const numberplate = document.getElementById('numberplate')
    const date = document.getElementById('date')
    const vehicletype = document.getElementById('vehicletype')
    const service = document.getElementById('service')
    const servicefee = document.getElementById('servicefee')
    const batteryprice = document.getElementById('batteryprice')
    const tyreprice = document.getElementById('tyreprice')

    // VALIDATION ERRORS
    const fullnameError = document.getElementById('fullnameError')
    const numberplateError = document.getElementById('numberplateError')
    const dateError = document.getElementById('dateError')
    const vehicletypeError = document.getElementById('vehicletypeError')
    const serviceError = document.getElementById('serviceError')
    const servicefeeError = document.getElementById('servicefeeError')
    const batterypriceError = document.getElementById('batterypriceError')
    const tyrepriceError = document.getElementById('tyrepriceError')

    // FULL NAME VALIDATION
    if (fullname.value == "") {
        fullname.style.border = "1px solid red"
        fullnameError.innerHTML = "Please provide Client Full name";
        fullnameError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        fullname.style.border = "1px solid green"
        fullnameError.textContent = ""
    }

    // NUMBER PLATE VALIDATION
    if (numberplate.value == "") {
        numberplate.style.border = "1px solid red"
        numberplateError.innerHTML = "Please provide Client Number Plate";
        numberplateError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        const numberplateRegex = /^[U][A-Z]{2}[0-9A-Z]{4}$/
        if (numberplateRegex.test(numberplate.value) === false) {
            numberplate.style.border = '1px solid red';
            numberplateError.innerHTML = "Please provide Valid Number Plate with 7 Alpha Numeric Characters";
            numberplateError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
            return false
        } else {
            numberplate.style.border = "1px solid green"
            numberplateError.textContent = ""
        }
    }

    // DATE VALIDATION
    if (date.value == "") {
        date.style.border = "1px solid red"
        dateError.innerHTML = "Please Fill in the Date";
        dateError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false

    } else {
        date.style.border = "1px solid green"
        dateError.textContent = ""
    }

    // VEHICLE TYPE
    if (vehicletype.value == "Default") {
        vehicletype.style.border = "1px solid red"
        vehicletypeError.textContent = "Please select a vehicle type"
        vehicletypeError.style = "color: red"
        return false
    } else {
        vehicletype.style.border = "1px solid green"
        vehicletypeError.textContent = ""
    }

    // SERVICE TYPE VALIDATION
    if (service.value == "Default") {
        service.style.border = "1px solid red"
        serviceError.innerHTML = "Please Choose at least One service";
        serviceError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        service.style.border = "1px solid green"
        serviceError.textContent = ""
    }

    // PARKING FEE VALIDATION
    if (servicefee.value == "Default") {
        servicefee.style.border = "1px solid red"
        servicefeeError.innerHTML = "Please select Fee or 0 if not required";
        servicefeeError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        servicefee.style.border = "1px solid green"
        servicefeeError.textContent = ""

    }

    // BATTERY PRICE
    if (batteryprice.value == "Default") {
        batteryprice.style.border = "1px solid red"
        batterypriceError.innerHTML = "Please select fee or 0 where not required";
        batterypriceError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        batteryprice.style.border = "1px solid green"
        batterypriceError.textContent = ""

    }

    // TYRE PRICE
    if (tyreprice.value == "Default") {
        tyreprice.style.border = "1px solid red"
        tyrepriceError.innerHTML = "Please choose fee or 0 if service is not required";
        tyrepriceError.style = 'color:red; font-family:Arial, Helvetica, Sans-serif;';
        return false
    } else {
        tyreprice.style.border = "1px solid green"
        tyrepriceError.textContent = ""
    }


};
