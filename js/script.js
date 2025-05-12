axios.get('https://lanciweb.github.io/demo/api/pictures/')
  .then(response => {
    const images = response.data;

    const cardImages = document.querySelectorAll('.card-image');
    const cardDates = document.querySelectorAll('.date');
    const cardDescriptions = document.querySelectorAll('.description');
    for (let i = 0; i < cardImages.length; i++) {
      if (images[i]) {
        cardImages[i].src = images[i].url;  
        cardDates[i].innerHTML = images[i].date;
        cardDescriptions[i].innerHTML = images[i].title;
      }
    }
  })
