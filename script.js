// Her er min formular
const form = document.getElementById("form")
//Her er min div til fejl beskeder
const errorDiv = document.getElementById("errors")
//her tjekker man om der er styr på de forskellige ting
let formOk = true

//Event håndtering af formular
//Fuktionen kører når formen bliver sendt
form.addEventListener("submit", function (event) {
    //Stop afsendelse af form
    event.preventDefault()

    //Nulstiller fejlmelingen
    formOk = true;
    errorDiv.innerHTML = "";
    //tjekker vært felt om det er true eller false
    if (form.elements.firstname.value.length < 2) {
        showError("Fornavn er ugyldigt", form.elements.firstname)
    }
    else if (form.elements.lastname.value.length < 2) {
        showError("Efternavn er ugyldigt", form.elements.lastname)
    }
    else if (form.elements.phone.value.length < 6) {
        showError("Telefonnummer er ugyldigt", form.elements.phone)
    }
    else if (!validateEmail(form.elements.email.value)) {
        showError("E-mail er ugyldigt", form.elements.email)
    }
    if (formOk == true) {
        form.submit()
    }

})

function validateEmail(email) {
    if (!email.includes("@") || !email.includes(".")) return false; //Der skal både være @ og et punktum. || betyder eller.

    const snabelIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");

    if (snabelIndex < 1) return false; //Tjek at der er mindst et tegn før @.
    if (dotIndex < snabelIndex + 2) return false; //Tjek at der er mindst to tegn mellem @ og det sidste punktum.
    if (dotIndex === email.length - 1) return false; //Tjek at punktummet ikke er det sidte tegn.

    return true;
}

//Denne function afvikles hvis et af felterne er forkert
function showError(msg, input) {
    errorDiv.innerHTML = msg
    formOk = false
    //Gør kanten rundt om feltet med fejl på sort.
    input.style.borderColor = "black"
}