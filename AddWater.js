import { UserData } from "./UserData.js";
import { StartWaterMeasure } from "./StartWaterMeasure.js";

export class AddWater {
  constructor(currentProgress) {
    // this.selectedCapacity = selectedCapacity;
    // this.userGoal = userGoal;
    this.progressBarDiv = document.querySelector(".progressBar");
    this.currentProgress = currentProgress;
  }

  addWaterToTheList(selectedCapacity) {
    const liElement = document.createElement("li");
    liElement.textContent = selectedCapacity;
    liElement.classList.add("glassOfWater");
    document.querySelector(".todayIDrink").appendChild(liElement);
  }

  addWaterToProgressBar(selectedCapacity, userGoal) {
    // konwersja ze stringa na number
    const glassOfWater = parseInt(selectedCapacity);
    Number(glassOfWater);
    console.log("glass of water " + glassOfWater);
    // wyliczam, jaki procent sugerowanej ilości wody został już przyjęty
    let percentOfGoal = Math.round((glassOfWater / userGoal) * 100);
    console.log(percentOfGoal + "%");
    this.currentProgress += percentOfGoal;
    console.log("this current progress z aw: " + this.currentProgress);
    this.addToProgressBar(this.currentProgress)
  }

  addToProgressBar(currentProgress) {
    //zmieniam pasek postępu
    // jeśli pasek < 100%, zapełniam pasek, w innym przypadku ustawiam pasek na 100%

    // currentProgress += percentOfGoal;

    if (currentProgress < 100) {
      this.progressBarDiv.style.height = currentProgress + "%";
    } else {
      this.progressBarDiv.style.height = "100%";
    }
  }
}
