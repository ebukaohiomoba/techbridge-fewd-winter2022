function forgotPasswordAlert() {
    alert("Please reach out to manager to reset your password!");
}

function accountvalidation(){
    let userName = document.getElementById("username").value;
    let passWord = document.getElementById("password").value;
    if (userName == "username" && passWord=="123456") {
        window.open = "ceoRecords.html";
    }
}