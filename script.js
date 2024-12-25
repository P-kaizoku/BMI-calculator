const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");
const results = document.getElementById("results");
const display = document.createElement("p");
const remark = document.createElement("p");

display.id = "result";
results.appendChild(display);
results.appendChild(remark);

submitButton.addEventListener("click", () => {
  const heightValue = Number(heightInput.value);
  const weightValue = Number(weightInput.value);
  let BMI;
  // Check for invalid inputs or empty fields
  if (
    isNaN(heightValue) ||
    isNaN(weightValue) ||
    heightInput.value.trim() === "" ||
    weightInput.value.trim() === "" ||
    heightValue <= 0 ||
    weightValue <= 0
  ) {
    display.innerHTML =
      "Enter some valid digits! or kuch khali mt chor 💀";
      remark.innerHTML = "";
  } else {
    BMI = weightValue / heightValue ** 2;
    display.innerHTML = `The BMI is: ${BMI.toFixed(2)}`;
  }

  if (BMI < 18.5) {
    remark.innerHTML = "You are underweight: Hilana bnd krde bhyi 👋";
  } else if (BMI < 24.9) {
    remark.innerHTML = "Normal weight: Ghamand mt kr zyada 😏";
  } else if (BMI < 29.9) {
    remark.innerHTML = "Overweight: kaamchor mehnat krle thodi 🏃‍♂️";
  } else if (BMI >= 30){
    remark.innerHTML = "Obese: pure sansaar ka khana tu hi khata h ky 🫡";
  }
});


clearButton.addEventListener("click", () => {
    heightInput.value = "";
    weightInput.value = "";
})
