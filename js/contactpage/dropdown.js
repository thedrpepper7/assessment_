const dropdownBTN = document.querySelector("#support_dropdown");
const dropdownContent = document.querySelector(".dropdown_content");

dropdownBTN.addEventListener("click", () => {
  dropdownContent.classList.toggle("open");
});
