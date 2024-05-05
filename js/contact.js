document.querySelector("#submit").addEventListener("click", () => {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let subject = document.querySelector("#subject").value;
    let msg = document.querySelector("#msg").value;
    let success = document.querySelector(".success")
    let checkEmail = /^[a-zA-Z0-9_]{3,}@[a-zA-Z]{5,}\.[a-zA-Z]{2,}$/;
    let checkName = /^[a-zA-Z0-9]{5,}$/;
    let checkSubject = /^.{20,}$/;
    let checkMsg = /^.{25,}$/;
    let isValid = true;

    if (!checkEmail.test(email)) {
        document.querySelector(".errorEmail").innerHTML = "Invalid email<br>";
        isValid = false;
    }
    if (!checkName.test(name)) {
        document.querySelector(".errorName").innerHTML = "Invalid name<br>";
        isValid = false;
    }
    if (!checkSubject.test(subject)) {
        document.querySelector(".errorSubject").innerHTML = "Enter at least 20 characters for the subject<br>";
        isValid = false;
    }
    if (!checkMsg.test(msg)) {
        document.querySelector(".errorMsg").innerHTML = "Enter at least 25 characters for the message<br>";
        isValid = false;
    }

    if (isValid) {
        let formData = {
            name: name,
            email: email,
            subject: subject,
            message: msg
        };
        let existingData = JSON.parse(localStorage.getItem('formData')) || [];
        existingData.push(formData);
        localStorage.setItem('formData', JSON.stringify(existingData));
        Swal.fire({
            title: "Good job!",
            text: "Success! Form submitted successfully.",
            icon: "success",
            confirmButtonColor: 'rgb(134 195 5)',
            // confirmButtonColor: 'rgb(134 195 5)'
        });

    } else {

        Swal.fire({
            title: "Invalid Form!",
            text: "Invalid!",
            icon: "error",
            confirmButtonColor: 'rgb(134 195 5)',
        });

    }
});
