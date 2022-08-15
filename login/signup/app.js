const fullNameError = document.getElementById("fname-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const submitError = document.getElementById("submit-error");

function validateFname() {
  var name = document.getElementById("fname").value;

  if (name.length == 0) {
    fullNameError.innerHTML = "Full Name required";
    return false;
  }
  if (!name.match(/^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/)) {
    fullNameError.innerHTML = "Enter a valid Full Name";
    return false;
  }
  fullNameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
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
  if (!validateFname() || !validateEmail() || !validatePass()) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fill the empty field";
    return false;
  }
}
