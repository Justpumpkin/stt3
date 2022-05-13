var nameCred = sessionStorage.getItem("name");
var username = sessionStorage.getItem("username");
var grade = sessionStorage.getItem("grade");
var clas = sessionStorage.getItem("class");
var number = sessionStorage.getItem("number");

function loadCredential() {
    document.getElementById("name-form").innerHTML = nameCred;
    document.getElementById("username-form").innerHTML = username;
    document.getElementById("grade-form").innerHTML = grade;
    document.getElementById("class-form").innerHTML = clas;
    document.getElementById("number-form").innerHTML = number;

    document.getElementById("signup-button").innerHTML = " " + nameCred;
    document.getElementById("login-button").innerHTML = " Grade " + grade;
}