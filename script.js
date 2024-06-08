// formula bmi = kg / (h /100 * h/100)

const submitBtn = document.querySelector("#submit");

const getBMI = () => {
  let cm = parseInt(document.getElementById("cm").value);
  let kg = parseFloat(document.getElementById("kg").value);
  let bmi;
  let newCm = parseFloat(cm / 100);
  bmi = kg / (newCm * newCm);
  bmi = bmi.toFixed(1);
  if (bmi <= 20) {
    document.getElementById("result").innerHTML =
      "Your BMI is low " + bmi + " 😌";
  } else if (bmi > 20 && bmi <= 25) {
    document.getElementById("result").innerHTML =
      "Your BMI is good " + bmi + " 😊";
  } else if (bmi > 25) {
    document.getElementById("result").innerHTML =
      "Your BMI is high " + bmi + " 🥴";
  }
};
submitBtn.addEventListener("click", getBMI);
