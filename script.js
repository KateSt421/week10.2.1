let programmingLanguage = 'JavaScript';

function learnLanguage(programmingLanguage) {
	console.log(`Я учу ${programmingLanguage}!`);
}

learnLanguage(programmingLanguage);


const galleryImage = document.getElementById("galleryImage");
      const prevButton = document.getElementById("prevButton");
      const nextButton = document.getElementById("nextButton");

      prevButton.onclick = () => {
        galleryImage.src = "assets/images/cat1.avif";
      };

      nextButton.onclick = () => {
        galleryImage.src = "assets/images/cat2.avif";
      };