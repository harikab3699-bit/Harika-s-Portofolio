const form = document.getElementById("contactForm");

// DISPLAY FUNCTION
function displayResponses() {
    const responsesDiv = document.getElementById("responses");

    let data = JSON.parse(localStorage.getItem("responses")) || [];

    responsesDiv.innerHTML = "";

    data.forEach((item, index) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <p><strong>Name:</strong> ${item.name}</p>
            <p><strong>Email:</strong> ${item.email}</p>
            <p><strong>Message:</strong> ${item.message}</p>
            <p><strong>Time:</strong> ${item.time}</p>
            <hr>
        `;

        responsesDiv.appendChild(div);
    });
}

// FORM SUBMIT
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const newEntry = {
        name: name,
        email: email,
        message: message,
        time: new Date().toLocaleString()
    };

    let data = JSON.parse(localStorage.getItem("responses")) || [];

    data.push(newEntry);

    localStorage.setItem("responses", JSON.stringify(data));

    alert("Message stored successfully!");

    form.reset();

    displayResponses();
});

// RUN ON PAGE LOAD
displayResponses();

function checkLogin() {
    const password = document.getElementById("adminPass").value;

    if (password === "admin123") {
        document.getElementById("admin").style.display = "block";
        document.getElementById("loginSection").style.display = "none";
    } else {
        alert("Wrong password!");
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}