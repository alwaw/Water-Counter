export class Modal {
  constructor() {
    this.modalDiv = document.querySelector(".modal");
    this.closeModal = document.querySelector(".modalClose");
    this.catImage = document.querySelector(".happyCat");
    this.showMeACat();
  }

  showMeACat() {
    this.modalDiv.style.display = "block";
    this.fetchCatImage();
    this.hideCat();
  }

  hideCat() {
    this.closeModal.addEventListener("click", () => {
      this.modalDiv.style.display = "none";
    });
  }

  fetchCatImage() {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((resp) => resp.json())
      .then((respJson) => {
        console.log(respJson);
        const catWidth = respJson[0].width;
        console.log("cat width " + respJson[0].width);
        const catHeigth = respJson[0].height;
        console.log("cat height " + respJson[0].height);
        if(catWidth <= 450 && catHeigth <= 300) {
            this.catImage.src = respJson[0].url;
        } else this.fetchCatImage();
      });
  }
}

//    fetch("https://api.thecatapi.com/v1/images/search")
//    .then(resp => resp.json())
//    .then(json => catImage.src = json[0].url)
