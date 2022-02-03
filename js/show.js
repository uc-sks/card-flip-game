// console.log('i am show button')

function show() {
    clearInterval(downloadTimer);
    const card = document.querySelectorAll(".card");
    card.forEach(function (card) {
      const h1ClassNames = card.classList;
      // console.log('my class list', h1ClassNames[0], h1ClassNames[1]);
      if (h1ClassNames[1] == 'flipCard') {
      } else {
        card.classList.toggle("flipCard");
      }
    });
  }