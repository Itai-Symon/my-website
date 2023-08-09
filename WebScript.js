"use strict";
//open and folds navbar onclick. 
let menuIcon = document.querySelector('.header-main-logo img');
let navbar_icons = document.querySelector('.header-main-nav ul');

menuIcon.addEventListener('click', function() {
    navbar_icons.classList.toggle('visible'); 
    menuIcon.classList.toggle('folded');
});


// gets the details from input and sends an emaiil to my mail via emailjs.
function sendMail() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");


    var params = {
        name: name.value,
        email: email.value,
        message: message.value,
    };
    const serviceId = "service_rdpesbj";
    const templateId = "template_a9f7qup";
    emailjs.send(serviceId,templateId,params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("message sent successfully");
        })
        .catch((err) => console.log(err));
}



