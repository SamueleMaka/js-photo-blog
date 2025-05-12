axios.get('https://lanciweb.github.io/demo/api/pictures/')
  .then(response => {
    const images = response.data;

    const cardContainer = document.getElementById('cards-container');
    for (let i = 0; i < images.length; i++) {
      if (images[i]) {
        cardContainer.innerHTML+= `
          <div class="card-container">
          <img src="img/pin.svg" alt="" class="image-pin">
          <img src="${images[i].url}" alt="" class="card-image">
          <div class="date">${images[i].date}</div>
          <div class="description">${images[i].title}</div>
          </div>
        `
      }
    }
  })
