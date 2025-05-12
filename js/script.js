axios.get('https://lanciweb.github.io/demo/api/pictures/')
  .then(response => {
    const images = response.data;

    const cardImages = document.querySelectorAll('.card-container #card-image');

    for (let i = 0; i < cardImages.length; i++) {
      if (images[i]) {
        cardImages[i].src = images[i].url;  
      }
    }
  })
