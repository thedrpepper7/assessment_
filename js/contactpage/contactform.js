function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isOnlyNumbers(number) {
  return /^[0-9]+$/.test(number);
}

function showRedBorder(whichBox) {
  whichBox.classList.add("invalid");
}

function hideRedBorder(whichBox) {
  whichBox.classList.remove("invalid");
}

function showError(errorSpan) {
  errorSpan.classList.add("visible");
}

function hideError(errorSpan) {
  errorSpan.classList.remove("visible");
}

// the boxes that are checked for validation upon send enquiry being clicked
const inputName = document.querySelector("#name_input");
const inputCompany = document.querySelector("#company_name_input");
const inputEmail = document.querySelector("#email_input");
const inputTelephone = document.querySelector("#telephone_input");
const inputMessage = document.querySelector("#message_input");
const marketingYes = document.querySelector("#checkbox");

// send enquiry button
const sendBTN = document.querySelector("#send_info button");

// span tags that appear given the validation fails
const NameError = document.querySelector(".invalidNamePopup");
const CompanyError = document.querySelector(".invalidCompanyPopup");
const EmailError = document.querySelector(".invalidEmailPopup");
const TelephoneError = document.querySelector(".invalidTelephonePopup");
const MessageError = document.querySelector(".invalidMessagePopup");

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
    showRedBorder(inputName);
    showError(NameError);
    isValid = false;
  } else if (nameVal.length < 2 || nameVal.length > 50) {
    showRedBorder(inputName);
    showError(NameError);
    isValid = false;
  } else {
    hideRedBorder(inputName);
    hideError(NameError);
    var inputtedName = nameVal;
  }

  let inputtedCompany = "";
  // Company Validation
  if (companyValue !== "") {
    if (companyValue.length < 3 || companyValue.length > 50) {
      showError(CompanyError);
      showRedBorder(inputCompany);
      isValid = false;
    } else {
      hideError(CompanyError);
      hideRedBorder(inputCompany);
      inputtedCompany = companyValue;
    }
  }

  // Email Validation
  if (emailVal === "") {
    showError(EmailError);
    showRedBorder(inputEmail);
    isValid = false;
  } else if (emailVal.length < 6 || emailVal.length > 255) {
    showError(EmailError);
    showRedBorder(inputEmail);
    isValid = false;
  } else if (!isValidEmail(emailVal)) {
    showError(EmailError);
    showRedBorder(inputEmail);
    isValid = false;
  } else {
    hideError(EmailError);
    hideRedBorder(inputEmail);
    var inputtedEmail = emailVal;
  }

  // Telephone Validation
  if (telephoneVal === "") {
    showError(TelephoneError);
    showRedBorder(inputTelephone);
    isValid = false;
  } else if (telephoneVal.length < 7 || telephoneVal.length > 15) {
    showError(TelephoneError);
    showRedBorder(inputTelephone);
    isValid = false;
  } else if (!isOnlyNumbers(telephoneVal)) {
    showError(TelephoneError);
    showRedBorder(inputTelephone);
    isValid = false;
  } else {
    hideError(TelephoneError);
    hideRedBorder(inputTelephone);
    var inputtedTelephone = telephoneVal;
  }

  if (messageVal === "") {
    showError(MessageError);
    showRedBorder(inputMessage);
    isValid = false;
  } else if (messageVal.length < 10 || messageVal.length > 1000) {
    showError(MessageError);
    showRedBorder(inputMessage);
    isValid = false;
  } else {
    hideError(MessageError);
    hideRedBorder(inputMessage);
    var inputtedMessage = messageVal;
  }

  // Checking if box is ticked
  // if (marketingYes.classList.contains("checked")) {
  //   marketing = true;
  // }

  // if (!isValid) {
  //   return;
  // }

  // contactData = {
  //   name: inputtedName,
  //   company: inputtedCompany,
  //   email: inputtedEmail,
  //   telephone: inputtedTelephone,
  //   message: inputtedMessage,
  //   marketing: marketing,
  // };

  // fetch("controllers/submit_contact.php", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(contactData),
  // });

  // // Clear fields right away:
  // alert("Form Submitted");
  // inputName.value = "";
  // inputCompany.value = "";
  // inputEmail.value = "";
  // inputTelephone.value = "";
  // inputMessage.value = "";
  // marketingYes.classList.remove("checked");
});
