function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const inputName = document.querySelector("#name_input");
const inputCompany = document.querySelector("#company_name_input");
const inputEmail = document.querySelector("#email_input");
const inputTelephone = document.querySelector("#telephone_input");
const inputMessage = document.querySelector("#message_input");
const marketingYes = document.querySelector("#checkbox");

const sendBTN = document.querySelector("#send_info button");

sendBTN.addEventListener("click", (event) => {
  event.preventDefault();

  let isValid = true;
  let nameVal = inputName.value.trim();
  let companyValue = inputCompany.value.trim();
  let emailVal = inputEmail.value.trim();
  let telephoneVal = inputTelephone.value.trim();
  let messageVal = inputMessage.value.trim();
  var marketing = false;

  // Name Validation
  if (nameVal === "") {
    inputName.classList.add("empty");
    isValid = false;
  } else if (nameVal.length < 2 || nameVal.length > 50) {
    inputName.classList.add("invalidLength");
    isValid = false;
  } else {
    var inputtedName = nameVal;
  }

  let inputtedCompany = "";
  // Company Validation
  if (companyValue !== "") {
    if (companyValue.length < 2 || companyValue.length > 50) {
      inputCompany.classList.add("invalidLength");
      isValid = false;
    } else {
      inputtedCompany = companyValue;
    }
  }

  // Email Validation
  if (emailVal === "") {
    inputEmail.classList.add("empty");
    isValid = false;
  } else if (emailVal.length < 6 || emailVal.length > 255) {
    inputEmail.classList.add("invalidLength");
    isValid = false;
  } else if (!isValidEmail(emailVal)) {
    inputEmail.classList.add("invalid");
    isValid = false;
  } else {
    var inputtedEmail = emailVal;
  }

  // Telephone Validation
  if (telephoneVal === "") {
    inputTelephone.classList.add("empty");
    isValid = false;
  } else if (telephoneVal.length < 7 || telephoneVal.length > 15) {
    inputTelephone.classList.add("invalidLength");
    isValid = false;
  } else {
    var inputtedTelephone = telephoneVal;
  }

  if (messageVal === "") {
    inputMessage.classList.add("empty");
    isValid = false;
  } else if (messageVal.length < 10 || messageVal.length > 10000) {
    inputMessage.classList.add("invalidLength");
    isValid = false;
  } else {
    var inputtedMessage = messageVal;
  }

  // Checking if box is ticked
  if (marketingYes.classList.contains("checked")) {
    marketing = true;
  }

  if (!isValid) {
    alert(`Please fix the empty fields`);
    return;
  }

  contactData = {
    name: inputtedName,
    company: inputtedCompany,
    email: inputtedEmail,
    telephone: inputtedTelephone,
    message: inputtedMessage,
    marketing: marketing,
  };

  fetch("submit_contact.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactData),
  });
});
