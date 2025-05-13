const overlayEl = document.getElementById("overlay");
const overlayImageEl = document.getElementById("overlay-image");
const closeButtonEl = document.getElementById("close-button");

axios.get("https://lanciweb.github.io/demo/api/pictures/").then((response) => {
	const images = response.data;

	const cardContainer = document.getElementById("cards-container");
	for (let i = 0; i < images.length; i++) {
		if (images[i]) {
			cardContainer.innerHTML += `
          <div class="card-container">
          <img src="img/pin.svg" alt="" class="image-pin">
          <img src="${images[i].url}" alt="" class="card-image">
          <div class="date">${images[i].date}</div>
          <div class="description">${images[i].title}</div>
          </div>
        `;
		}
	}
	const imagesClickableEl = document.querySelectorAll(".card-image");
	// è necessario tenerlo dentro la risposta perché aggiugne un event listener ad elementi inesistenti
	for (let i = 0; i < imagesClickableEl.length; i++) {
		// funzione anonima
		imagesClickableEl[i].addEventListener("click", function () {
			overlayEl.style.display = "flex";
			overlayImageEl.src = imagesClickableEl[i].src;
		});
	}
});

// oltre agli elementi dell'overlay mi servono tutte le foto, non il container intero
closeButtonEl.addEventListener("click", function () {
	overlayEl.style.display = "none"; // Nascondiamo l'overlay
});
