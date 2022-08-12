const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const submitError = document.getElementById("submit-error");

function validateEmail() {
  var email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "E-mail is required";
    return false;
  }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)) {
    emailError.innerHTML = "Enter a valid E-mail";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validatePass() {
  var password = document.getElementById("pass").value;

  if (password.length == 0) {
    passwordError.innerHTML = "Field cannot be empty here";
    return false;
  }
  if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
    passwordError.innerHTML = "Password is Required";
    return false;
  }
  passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validateSubmit() {
  if (!validateEmail() || !validatePass()) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fill the empty field";
    return false;
  }
}
