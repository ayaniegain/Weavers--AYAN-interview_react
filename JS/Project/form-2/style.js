let userName = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");

function handleSubmit() {
  let userResult = userValidate();
  let emailResult = emailValidation();
  console.log(emailResult);

  if (userResult) {
    let userName = document.getElementById("userName");

    document.getElementById("showtext").innerHTML = `${userName.value}`;
    document.getElementById("userName").value = "";
  }
  if (emailResult) {
    let email = document.getElementById("email");

    document.getElementById("showEmail").innerHTML = `${email.value}`;
    document.getElementById("email").value = "";
  }
}
// user validaton
function userValidate() {
  userName = userName.value;

  if (userName === "") {
    document.getElementById("userError").innerHTML =
      "please write some username ";
    return false;
  }
  if (userName.length <= 3) {
    document.getElementById("userError").innerHTML =
      "please write correct length user name";
    return false;
  }

  return true;
}

// email validaton

function emailValidation() {
  email = email.value;

  if (email === "") {
    document.getElementById("emailError").innerHTML =
      "please enter proper email ";
    return false;
  }
  if (!email.includes("@")) {
    document.getElementById("emailError").innerHTML =
      "please inclue @ in email ";
    return false;
  }

  return true;
}
