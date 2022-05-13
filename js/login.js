function onLoginClick() {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;
    var localCredentialArray = [];
    var c = 'N';
    var tempUsername;
    var tempName;
    var tempGrade;
    var tempClass;
    var tempNumber;

    if (localStorage.length >= 1) {
        for (var a = 0; a < localStorage.length; a++) {
            localCredentialArray.push(localStorage.getItem("credential"+a.toString(10)));
        }
        for (var b = 0; b < localCredentialArray.length; b++) {
            if (localCredentialArray[b].split("$")[1] == usernameInput) {
                if (localCredentialArray[b].split("$")[2] == passwordInput) {
                    c = 'E';
                    tempName = localCredentialArray[b].split("$")[0];
                    tempUsername = localCredentialArray[b].split("$")[1];
                    tempGrade = localCredentialArray[b].split("$")[3];
                    tempClass = localCredentialArray[b].split("$")[4];
                    tempNumber = localCredentialArray[b].split("$")[5];
                }
                else {
                    c = 'C';
                }
            }
        }
    }

    if (c != 'E') {
        alert("No such username exists.");
    }
    else if (c == 'C') {
        alert("Password does not match.");
    }
    else {
        alert("Successfully logged in.");
        sessionStorage.setItem("name", tempName);
        sessionStorage.setItem("username", tempUsername);
        sessionStorage.setItem("grade", tempGrade);
        sessionStorage.setItem("class", tempClass);
        sessionStorage.setItem("number", tempNumber);

        window.location.href = "./index.html";
    }
}