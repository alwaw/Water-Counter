import { UserData } from "./UserData.js";
import { AddWater } from "./AddWater.js";

export class StartWaterMeasure {
  constructor() {
    // pobranie danych dla klasy UserData
    this.name = prompt("Podaj swoje imię.");
    this.weight = prompt("Podaj swoją wagę.");
    this.weight = Number(this.weight);

    if (isNaN(this.weight)) {
      alert("Wpisz prawidłową wagę.");
      this.weight = prompt("Podaj swoją wagę.");
      this.weight = Number(this.weight);
    }
    this.userData = new UserData(this.name, this.weight);

    this.capacityGoal = this.userData.calcUserGoal(this.weight);

    // pobranie danych dla klasy AddWater
    this.capacityBtn = document.querySelectorAll(".capacity");
    this.capacityBtns = [...this.capacityBtn];
    this.progressBarDiv = document.querySelector(".progressBar");
    this.myOwnCapacityInput = document.querySelector(".ownCapacity");
    this.myOwnCapacityBtn = document.querySelector(".myOwnCapacity");
    // tu przechowuję aktualny progres:
    this.currentProgress = 0;
    // wybrana objętość:
    this.selectedCapacity = 0;

    // instancja klasy licznika wody
    this.addWater = new AddWater(this.currentProgress);

    // pobieram wybraną pojemność:

    this.capacityBtn.forEach((button) => {
      button.addEventListener("click", () => {
        // console.log(button.textContent);
        this.selectedCapacity = button.textContent;
        this.addWater.addWaterToTheList(this.selectedCapacity);
        this.addWater.addWaterToProgressBar(
          this.selectedCapacity,
          this.capacityGoal
        );
        this.addWater.addToHeader(this.selectedCapacity, this.capacityGoal);
      });
    });

    // pobieram samodzielnie wpisaną pojemność:
    this.myOwnCapacityBtn.addEventListener("click", () => {
      const capacityInput = this.myOwnCapacityInput.value;
      if (isNaN(capacityInput) === true || capacityInput <= 0) {
        alert("Proszę o wpisanie poprawnej pojemności.")
      } else {
      this.addWater.addWaterToTheList(capacityInput+" ml");
      this.addWater.addWaterToProgressBar(capacityInput, this.capacityGoal);
      this.addWater.addToHeader(capacityInput, this.capacityGoal);
      this.myOwnCapacityInput.value = "";
      }
    });


    
}}
