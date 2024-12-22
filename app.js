
String.prototype.encodeBase64 = function() {
    return btoa(this);
}

String.prototype.decodeBase64 = function() {
    return atob(this);
}



function signup(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let email = document.getElementById("eamil").value;
    let password = document.getElementById("password").value;

    let hashedPassword = password.encodeBase64();

    let data = { username, email, password : hashedPassword}
    localStorage.setItem("userData",JSON.stringify(data));
    window.location.assign("login.html");
}

function login(event) {
    event.preventDefault();

    let checkUsername = document.getElementById("loginusername").value;
    let checkPassword = document.getElementById("loginpassword").value;

    let userData = JSON.parse(localStorage.getItem("userData"));

    // Check if user data exists in localStorage
    if (!userData) {
        document.getElementById("loginfailed").innerText = "User not found!";
        document.getElementById("loginfailed").style.visibility = "visible";
        return;
    }

    // Decode the password (if applicable)
    let dehashedpass = atob(userData.password); // Decoding Base64 password

    // Check credentials
    if (checkUsername === userData.username && checkPassword === dehashedpass) {
        window.location.assign("./game.html");
    } else {
        document.getElementById("loginfailed").innerText = "Invalid username or password!";
        document.getElementById("loginfailed").style.visibility = "visible";
    }
}

