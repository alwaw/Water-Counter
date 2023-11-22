
export class UserData {
  constructor(name, weight) {
  
    this.name = name;
    this.weight = weight;
    this.nameTag = document.querySelector(".name");
    this.weightTag = document.querySelector(".userWeight");
    this.capacityGoal = document.querySelector(".capacityGoal");

    this.showUsersDatas(this.name, this.weight);
    this.userGoal = this.calcUserGoal(this.weight);
  }

  showUsersDatas(name, weight) {
    this.nameTag.textContent = this.name;
    this.weightTag.textContent = this.weight;
  }

  calcUserGoal(weight) {
    const calcGoal = (weight * 35);
    this.capacityGoal.textContent = `${calcGoal} ml`;
    console.log(calcGoal);
    return calcGoal;
  }
}
