card1.addEventListener("click", flipCard1);
function flipCard1() {
  card1.classList.toggle("flipCard");
}
card2.addEventListener("click", flipCard2);
function flipCard2() {
  card2.classList.toggle("flipCard");
}
card3.addEventListener("click", flipCard3);
function flipCard3() {
  card3.classList.toggle("flipCard");
}
card4.addEventListener("click", flipCard4);
function flipCard4() {
  card4.classList.toggle("flipCard");
}
card5.addEventListener("click", flipCard5);
function flipCard5() {
  card4.classList.toggle("flipCard");
}
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");


function getRandomImg1() {
    // console.log("img index is", imgIndex);
    twoSerieseArr.push(imgIndex); //pushing data into twoSeriesArr
    // console.log("img", img[imgIndex]);
    // console.log("two series array", twoSerieseArr);
    localStorage.setItem("twoSeriesArr", JSON.stringify(twoSerieseArr));
    localArray = JSON.parse(localStorage.getItem("twoSeriesArr"));
    // console.log("local arrray", localArray);
  }

function getRandomImg2() {
    // console.log("img index is", imgIndex);
    twoSerieseArr.push(imgIndex); //pushing data into twoSeriesArr
    // console.log("img", img[imgIndex]);
    // console.log("two series array", twoSerieseArr);
    localStorage.setItem("twoSeriesArr", JSON.stringify(twoSerieseArr));
    localArray = JSON.parse(localStorage.getItem("twoSeriesArr"));
    // console.log("local arrray", localArray);
  }


  if (twoSeriesArr.length == 2) {
    flipImage();
  } else {
    // console.log('abhi nhi 2 game')
  }





// window.onload = function () {
//   const card = document.querySelectorAll(".card");
//   card.forEach(function (card) {
//     card.addEventListener("click", function () {
//       card.classList.toggle("flipCard");
//     })
//   });
// };
// console.log("index value are",
    imgIndex1,
    imgIndex2,
    imgIndex3,
    imgIndex4,
    imgIndex5,
    imgIndex6,
    imgIndex7,
    imgIndex8,
    imgIndex9,
    imgIndex10,
    imgIndex11,
    imgIndex12,
    imgIndex13,
    imgIndex14,
    imgIndex15,
    imgIndex16,
    imgIndex17,
    imgIndex18,
    imgIndex19,
    imgIndex20,
    imgIndex21,
    imgIndex22,
    imgIndex23,
    imgIndex24
  );



  else {
    const card1 = document.getElementById(`${cardId[0]}`);
    const card2 = document.getElementById(`${cardId[1]}`);
    // console.log('id wala card', card1)
    // console.log('id wala card', card2)
    card1.classList.remove("flipCard");
    card2.classList.remove("flipCard");
    // console.log('hata de')
    twoSeriesArr = []
    // console.log('2 array',twoSeriesArr)
  }



















  

 
 





