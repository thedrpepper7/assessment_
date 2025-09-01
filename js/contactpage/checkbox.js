const marketingBTN = document.querySelector("#marketing_info_box");
const marketingCheckbox = document.querySelector("#marketing_info_box span");
const realCheckbox = document.querySelector("#marketingCheckbox");

marketingBTN.addEventListener("click", (e) => {
  e.preventDefault();
  marketingCheckbox.classList.toggle("checked");
  realCheckbox.checked = !realCheckbox.checked;
});
