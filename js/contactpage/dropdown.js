const dropdownBTN = document.querySelector("#support_dropdown");
dropdownBTN.addEventListener("click", () => {
  var dropdownContent = document.querySelector(".dropdown_content");

  if (dropdownContent.classList.contains("close")) {
    dropdownContent.classList.remove("close");
    dropdownContent.classList.add("open");
  } else if (dropdownContent.classList.contains("open")) {
    dropdownContent.classList.remove("open");
    dropdownContent.classList.add("close");
  }
});
