

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");

    form.addEventListener("submit", function (event) {
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const city = document.getElementById("city").value.trim();

        
        if (name === "" || email === "" || password === "" || city === "") {
            alert("Please fill all the fields.");
            event.preventDefault();  
            return;
        }

        
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

       
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            event.preventDefault();
            return;
        }

        
        alert("Sign-Up successful! (Demo only - data is not stored.)");
        
    });
});
