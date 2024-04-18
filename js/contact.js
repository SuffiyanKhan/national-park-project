document.querySelector("#submit").addEventListener("click", () => {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let subject = document.querySelector("#subject").value;
    let msg = document.querySelector("#msg").value;
    let success = document.querySelector(".success")
    let checkEmail = /^[a-zA-Z0-9_]{3,}@[a-zA-Z]{5,}\.[a-zA-Z]{2,}$/;
    let checkName = /^[a-zA-Z0-9]{5,}$/;
    let checkSubject = /^.{20,}$/; // Changed the subject length requirement
    let checkMsg = /^.{25,}$/; // Changed the message length requirement
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
        // Save form data to local storage or an array of objects
        let formData = {
            name: name,
            email: email,
            subject: subject,
            message: msg
        };
        
        // Check if data already exists in local storage
        let existingData = JSON.parse(localStorage.getItem('formData')) || [];
        
        // Add new data to existing data
        existingData.push(formData);
        
        // Save updated data back to local storage
        localStorage.setItem('formData', JSON.stringify(existingData));
        Swal.fire({
            title: "Good job!",
            text: "Success! Form submitted successfully.",
            icon: "success"
          });
        
    } else{

        Swal.fire({
            title: "Invalid Form!",
            text: "Invalid!",
            icon: "error"
          });
        
    }
});



// document.querySelector("#submit").addEventListener("click", () => {
//     let name = document.querySelector("#name").value;
//     let email = document.querySelector("#email").value;
//     let subject = document.querySelector("#subject").value;
//     let msg = document.querySelector("#msg").value;
//     let success = document.querySelector(".success")
//     let checkEmail = /^[a-zA-Z0-9_]{3,}@[a-zA-Z]{5,}\.[a-zA-Z]{2,}$/;
//     let checkName = /^[a-zA-Z0-9]{5,}$/;
//     let checkSubject = /^.{20,}$/; // Changed the subject length requirement
//     let checkMsg = /^.{25,}$/; // Changed the message length requirement
//     let isValid = true;
     
//     if (!checkEmail.test(email)) {
//         document.querySelector(".errorEmail").innerHTML = "Invalid email<br>";
//         isValid = false;
//     }
//     if (!checkName.test(name)) {
//         document.querySelector(".errorName").innerHTML = "Invalid name<br>";
//         isValid = false;
//     }
//     if (!checkSubject.test(subject)) {
//         document.querySelector(".errorSubject").innerHTML = "Enter at least 20 characters for the subject<br>";
//         isValid = false;
//     }
//     if (!checkMsg.test(msg)) {
//         document.querySelector(".errorMsg").innerHTML = "Enter at least 25 characters for the message<br>";
//         isValid = false;
//     }

//     if (isValid) {
//         // Save form data to local storage or an array of objects
//         let formData = {
//             name: name,
//             email: email,
//             subject: subject,
//             message: msg
//         };
        
//         // Check if data already exists in local storage
//         let existingData = JSON.parse(localStorage.getItem('formData')) || [];
        
//         // Add new data to existing data
//         existingData.push(formData);
        
//         // Save updated data back to local storage
//         localStorage.setItem('formData', JSON.stringify(existingData));
        
//         // Clear form fields
//         document.querySelector("#name").value = "";
//         document.querySelector("#email").value = "";
//         document.querySelector("#subject").value = "";
//         document.querySelector("#msg").value = "";

//         // Display success message
//         document.querySelector(".form").innerHTML = ""
//         success.innerHTML = "Success! Form submitted successfully.";

//         // // Optional: Scroll to the success message
//         // success.scrollIntoView({ behavior: 'smooth' });
//     } 
// });


// document.addEventListener("DOMContentLoaded", function() {
//     let formData = JSON.parse(localStorage.getItem('formData'));
//     if (formData && formData.successMessage) {
//         // Display the success message if it exists in local storage
//         displaySuccessMessage(formData.successMessage);
//     }
// });

// document.querySelector("#submit").addEventListener("click", () => {
//     let name = document.querySelector("#name").value;
//     let email = document.querySelector("#email").value;
//     let subject = document.querySelector("#subject").value;
//     let msg = document.querySelector("#msg").value;
//     let checkEmail = /^[a-zA-Z0-9_]{3,}@[a-zA-Z]{5,}\.[a-zA-Z]{2,}$/;
//     let checkName = /^[a-zA-Z0-9]{5,}$/;
//     let checkSubject = /^.{20,}$/; // Changed the subject length requirement
//     let checkMsg = /^.{25,}$/; // Changed the message length requirement
//     let isValid = true;
     
//     if (!checkEmail.test(email)) {
//         document.querySelector(".errorEmail").innerHTML = "Invalid email<br>";
//         isValid = false;
//     }
//     if (!checkName.test(name)) {
//         document.querySelector(".errorName").innerHTML = "Invalid name<br>";
//         isValid = false;
//     }
//     if (!checkSubject.test(subject)) {
//         document.querySelector(".errorSubject").innerHTML = "Enter at least 20 characters for the subject<br>";
//         isValid = false;
//     }
//     if (!checkMsg.test(msg)) {
//         document.querySelector(".errorMsg").innerHTML = "Enter at least 25 characters for the message<br>";
//         isValid = false;
//     }

//     if (isValid) {
//         // Save form data to local storage or an array of objects
//         let formData = {
//             name: name,
//             email: email,
//             subject: subject,
//             message: msg,
//             successMessage: "Success! Form submitted successfully."
//         };
        
//         // Save success message to local storage
//         localStorage.setItem('formData', JSON.stringify(formData));
        
//         // Display success message
//         displaySuccessMessage(formData.successMessage);
//     } 
// });

// function displaySuccessMessage(message) {
//     let success = document.querySelector(".success");
//     let form = document.querySelector(".form");

//     // Display success message
//     success.innerHTML = message;

//     // Hide the form
//     form.style.display = "none";
// }



// document.querySelector("#submit").addEventListener("click" , () => {
//     document.querySelector(".form").innerHTML = ""
// })