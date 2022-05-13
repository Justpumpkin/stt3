function onSignupClick() {
    var nameInput = document.getElementById("name").value;
    var usernameInput = document.getElementById("username").value;
    var gradeInput = document.getElementById("grade").value;
    var classInput = document.getElementById("class").value;
    var numberInput = document.getElementById("number").value;
    var passwordInput = document.getElementById("password").value;
    var confirmInput = document.getElementById("confirm").value;

    var localCredentialArray = [];
    var fullCredential = nameInput + "$" + usernameInput + "$" + passwordInput + "$" + gradeInput + "$" + classInput + "$" + numberInput;
    var c = 'N';

    if (localStorage.length > 0) {
        for (var a = 0; a < localStorage.length; a++) {
            localCredentialArray.push(localStorage.getItem("credential"+a.toString(10)));
        }
        for (var b = 0; b < localCredentialArray.length; b++) {
            if (localCredentialArray[b].split("$")[1] == usernameInput) {
                c = 'E';
            }
        }
    }
    if (c != 'E') {
        if (passwordInput == confirmInput) {
            localStorage.setItem("credential"+(localStorage.length).toString(10), fullCredential);
            alert("Successfully Registered to Local Storage.");
            window.location.href = "./login.html";
        }
        else {
            alert("Password does not match.");
        }
    }
    else {
        alert("Same username already exists.");
    }
}