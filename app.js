const form = document.getElementById("form");
const button = document.getElementById("button");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const lastNameErrImageBox = document.querySelector(".lastName-errImage-box");
const firstNameErrImageBox = document.querySelector(".firstName-errImage-box");
const emailErrImageBox = document.querySelector(".email-errImage-box");
const passwordErrImageBox = document.querySelector(".password-errImage-box");
const errImage1 = document.querySelector(".err-image1");
const errImage2 = document.querySelector(".err-image2");
const errImage3 = document.querySelector(".err-image3");
const errImage4 = document.querySelector(".err-image4");
const firstNameSpan = document.querySelector(".firstName-span");
const lastNameSpan = document.querySelector(".lastName-span");
const emailSpan = document.querySelector(".email-span");
const passwordSpan = document.querySelector(".password-span");
const eyeOpen = document.querySelector(".eyeOpen");
const eyeClose = document.querySelector(".eyeClose");

console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === "") {
    // firstName.classList.add("error");
    firstNameErrImageBox.classList.add("error");
    errImage1.style.display = "block";
    firstNameSpan.textContent = "First Name cannot be empty";
    // firstName.value = `<img src="./images/icon-error.svg" alt="">`;
    // fName = `<img src="./images/icon-error.svg" alt="">`;
  } else {
    firstNameErrImageBox.classList.remove("error");
    errImage1.style.display = "none";
    firstNameSpan.textContent = "";
  }
  // Check last name

  if (lName === "") {
    lastNameErrImageBox.classList.add("error");
    errImage2.style.display = "block";
    lastNameSpan.textContent = "Last Name cannot be empty";
  } else {
    lastNameErrImageBox.classList.remove("error");
    errImage2.style.display = "none";
    lastNameSpan.textContent = "";
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === "") {
    emailErrImageBox.classList.add("error");
    errImage3.style.display = "block";
    emailSpan.textContent = "Looks like this is not an email";
  } else {
    emailErrImageBox.classList.remove("error");
    errImage3.style.display = "none";
    emailSpan.textContent = "";
  }

  // Check password

  if (passwordVal === "") {
    passwordErrImageBox.classList.add("error");
    errImage4.style.display = "block";
    passwordSpan.textContent = "Password cannot be empty";
  } else {
    passwordErrImageBox.classList.remove("error");
    errImage4.style.display = "none";
    passwordSpan.textContent = "";
  }
});

eyeOpen.addEventListener("click", () => {
  eyeOpen.style.display = "none";
  eyeClose.style.display = "block";
  password.type = "text";
});

eyeClose.addEventListener("click", () => {
  eyeClose.style.display = "none";
  eyeOpen.style.display = "block";
  password.type = "password";
});

const emailVal = email.value;

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
