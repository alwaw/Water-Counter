import { UserData } from "./UserData.js";
import { StartWaterMeasure } from "./StartWaterMeasure.js";

export class AddWater {
  constructor(currentProgress) {
    this.progressBarDiv = document.querySelector(".progressBar");
    this.currentProgress = currentProgress;
    this.soFarSpan = document.querySelector(".soFar");
    this.userGoalSpan = document.querySelector(".userGoalSpan");
    this.progressBarPercentSpan = document.querySelector(".progressBarPercent"); 
    this.currentProgressInML = 0;
    this.soFarSpan.textContent = 0;
    this.userGoalSpan.textContent = 0;
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
    
    // wyliczam, jaki procent sugerowanej ilości wody został już przyjęty
    let percentOfGoal = Math.round((glassOfWater / userGoal) * 100);
    console.log(percentOfGoal + "%");
    this.currentProgress += percentOfGoal;
    this.addToProgressBar(this.currentProgress);
    this.progressBarPercentSpan.textContent = this.currentProgress + "%";
    
  }

  addToProgressBar(currentProgress) {
    //zmieniam pasek postępu
    // jeśli pasek < 100%, zapełniam pasek, w innym przypadku ustawiam pasek na 100%

    if (currentProgress < 100) {
      this.progressBarDiv.style.height = currentProgress + "%";
    } else {
      this.progressBarDiv.style.height = "100%";
      
    }
    
  }

  addToHeader(selectedCapacity, userGoal) {
    let selectedCapacityToMl = parseInt(selectedCapacity);
    this.currentProgressInML += selectedCapacityToMl;
    this.soFarSpan.textContent = this.currentProgressInML + " ml";
    this.userGoalSpan.textContent = userGoal + " ml";
    
  }

  giveCurrentProgress() {
    console.log(this.currentProgress);
    return this.currentProgress;
    
  }
}
