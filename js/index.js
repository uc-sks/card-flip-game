var img2 = [
  "https://superstarsbio.com/wp-content/uploads/2018/08/salman-khan.jpg",//salman 0
  "https://www.india.com/wp-content/uploads/2021/12/Shahrukh-Khan-.jpg",//shahrukh 1
  "https://upload.wikimedia.org/wikipedia/commons/c/c6/Indian_actor_Amitabh_Bachchan.jpg",//amitabh 2
  "https://www.livelaw.in/h-upload/2021/11/02/403448-virat-kohli.jpg",//kohli 3
  "https://c.ndtvimg.com/2021-11/fcbadjs8_rohit-sharma-afp_625x300_18_November_21.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605",//rohit 4
  "https://pbs.twimg.com/profile_images/1472828456413007872/gk5LO2EM_400x400.jpg",//kapil 5
  "https://www.bollywoodhungama.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-22-at-9.12.41-PM.jpeg",//hritik 6
  "https://cricketaddictor.gumlet.io/wp-content/uploads/2021/07/MS-Dhoni-6.jpg?compress=true&quality=80&w=480&dpr=2.6",//dhoni 7
  "https://images.news18.com/ibnlive/uploads/2021/08/sachin-tendulkar-52-16287387964x3.jpg",//sachin 8
  "https://m.media-amazon.com/images/M/MV5BMjQ5OTY4MjYtMjBkNi00ZWFjLWI1YmItMTkxZTk0ODYwNDZiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",//yuvraj 9
  "https://pbs.twimg.com/profile_images/1133689777453244418/SM9qhc-P_400x400.jpg",//rahul 10
  "https://images.news18.com/ibnlive/uploads/2021/03/1617215583_suresh-raina.jpg",//raina 11
  "https://superstarsbio.com/wp-content/uploads/2018/08/salman-khan.jpg",//salman 12
  "https://www.india.com/wp-content/uploads/2021/12/Shahrukh-Khan-.jpg",//shahrukh 13
  "https://upload.wikimedia.org/wikipedia/commons/c/c6/Indian_actor_Amitabh_Bachchan.jpg",//amitabh 14
  "https://www.livelaw.in/h-upload/2021/11/02/403448-virat-kohli.jpg",//kohli 15
  "https://c.ndtvimg.com/2021-11/fcbadjs8_rohit-sharma-afp_625x300_18_November_21.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605",//rohit 16
  "https://pbs.twimg.com/profile_images/1472828456413007872/gk5LO2EM_400x400.jpg",//kapil 17
  "https://www.bollywoodhungama.com/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-22-at-9.12.41-PM.jpeg",//hritik 18
  "https://cricketaddictor.gumlet.io/wp-content/uploads/2021/07/MS-Dhoni-6.jpg?compress=true&quality=80&w=480&dpr=2.6",//dhoni 19
  "https://images.news18.com/ibnlive/uploads/2021/08/sachin-tendulkar-52-16287387964x3.jpg",//sachin 20
  "https://m.media-amazon.com/images/M/MV5BMjQ5OTY4MjYtMjBkNi00ZWFjLWI1YmItMTkxZTk0ODYwNDZiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",//yuvraj 21
  "https://pbs.twimg.com/profile_images/1133689777453244418/SM9qhc-P_400x400.jpg",//rahul 22
  "https://images.news18.com/ibnlive/uploads/2021/03/1617215583_suresh-raina.jpg",//raina 23
];
// array for comparing two photos
var twoSeriesArr = []
//array for comaparing three photos (if 1st and 2nd are equal)
var threeSeriesArray = []
var fourSeriesArray = []
//for removing the class flipCard on that cardID which are not match
var cardId = [];
//for showing the result
var result = 0;
//for time 60 sec
var timeleft = 60;
//#region all variables index  contents
var randomArr = [];
function getRandonIndex() {
  while (randomArr.length < 24) {
    var r = Math.floor(Math.random() * 24) + 0;
    if (randomArr.indexOf(r) === -1) randomArr.push(r);
  }
}
//2 series game functionality
function twoGame() {
  getRandonIndex()
  document.getElementById("2_pic").disabled = true;
  document.getElementById("2_pic").checked = true;
  document.getElementById("3_pic").disabled = true;
  document.getElementById("4_pic").disabled = true;
  countDown();
  for (i = 0; i <= randomArr.length; i++) {
    document.getElementById(`imgs${i}`).src = img2[randomArr[i]]
  }
}
//push ID to cardID 
function flipCard(event) {
  cardId.push(event.currentTarget.id)
}
//fliping functionality(visibility or flip return for two series)
function flipImage() {
  if (twoSeriesArr[0] === twoSeriesArr[1]) {
    result = result + 1;
    twoSeriesArr = []
    cardId = []
  } else {
    const card1 = document.getElementById(`${cardId[0]}`);
    const card2 = document.getElementById(`${cardId[1]}`);
    setTimeout(function () {
      card1.classList.remove("flipCard");
      card2.classList.remove("flipCard");
      twoSeriesArr = []
      cardId = []
    }, 200)
  }
}
//fliping functionality(visibility or flip return for three series......for two pic)
function flipImageSeries3() {
  if (twoSeriesArr[0] === twoSeriesArr[1]) {
  } else {
    const card1 = document.getElementById(`${cardId[0]}`);
    const card2 = document.getElementById(`${cardId[1]}`);
    setTimeout(function () {
      card1.classList.remove("flipCard");
      card2.classList.remove("flipCard");
      twoSeriesArr = []
      cardId = []
    }, 200)
  }
}
function flipImageSeries3_1() {
  threeSeriesArray = [...new Set(twoSeriesArr)]
  if (threeSeriesArray.length == 1) {
    result = result + 1;
    twoSeriesArr = []
    cardId = []
  } else {
    const card1 = document.getElementById(`${cardId[0]}`);
    const card2 = document.getElementById(`${cardId[1]}`);
    const card3 = document.getElementById(`${cardId[2]}`);
    setTimeout(function () {
      card1.classList.remove("flipCard");
      card2.classList.remove("flipCard");
      card3.classList.remove("flipCard");
      twoSeriesArr = []
      cardId = []
    }, 200)
  }
}
function flipImagesSeries4() {
  if (twoSeriesArr[0] === twoSeriesArr[1]) {
  } else {
    const card1 = document.getElementById(`${cardId[0]}`);
    const card2 = document.getElementById(`${cardId[1]}`);
    setTimeout(function () {
      card1.classList.remove("flipCard");
      card2.classList.remove("flipCard");
      twoSeriesArr = []
      cardId = []
    }, 200)
  }
}
function flipImagesSeries4_1() {
  fourSeriesArray = [...new Set(twoSeriesArr)]
  if (fourSeriesArray.length == 1) {
  } else {
    const card1 = document.getElementById(`${cardId[0]}`);
    const card2 = document.getElementById(`${cardId[1]}`);
    const card3 = document.getElementById(`${cardId[2]}`);
    setTimeout(function () {
      card1.classList.remove("flipCard");
      card2.classList.remove("flipCard");
      card3.classList.remove("flipCard");
      twoSeriesArr = []
      cardId = []
    }, 200)
  }
}
function flipImagesSeries4_1_2() {
  fourSeriesArray = [...new Set(twoSeriesArr)]
  if (fourSeriesArray.length == 1) {
    result = result + 1;
    twoSeriesArr = []
    cardId = []
  } else {
    const card1 = document.getElementById(`${cardId[0]}`);
    const card2 = document.getElementById(`${cardId[1]}`);
    const card3 = document.getElementById(`${cardId[2]}`);
    const card4 = document.getElementById(`${cardId[3]}`);
    setTimeout(function () {
      card1.classList.remove("flipCard");
      card2.classList.remove("flipCard");
      card3.classList.remove("flipCard");
      card4.classList.remove("flipCard");
      twoSeriesArr = []
      cardId = []
    }, 200)
  }
}
var downloadTimer;
function countDown() {
  downloadTimer = setInterval(function function1() {
    document.getElementById("coutDown").innerHTML =
      timeleft + "&nbsp" + "seconds remaining";
    timeleft -= 1;
    if (timeleft > 0) {
      if (document.getElementById("2_pic").checked) {
        if (result == 13) {
          window.alert('congratulations you win the game')
        }
      } else if (document.getElementById("3_pic").checked) {
        if (result == 9) {
          window.alert('congratulations you win the game')
        }
      } else {
        if (result == 7) {
          window.alert('congratulations you win the game')
        }
      }
    }
    if (timeleft == 0) {
      document.getElementById("coutDown").innerHTML = "Time is up! You loose the game";
      window.alert('Time is up! You loose the game')
      if (window.alert) {
        clearInterval(downloadTimer)
        const card = document.querySelectorAll(".card");
        card.forEach(function (card) {
          const h1ClassNames = card.classList;
          if (h1ClassNames[1] == 'flipCard') {
          } else {
            card.classList.toggle("flipCard");
          }
        });
      }
    }
  }, 1000);
}
function newGame() {
  document.getElementById("2_pic").disabled = false;
  document.getElementById("3_pic").disabled = false;
  document.getElementById("4_pic").disabled = false;
  document.getElementById("2_pic").checked = false;
  document.getElementById("3_pic").checked = false;
  document.getElementById("4_pic").checked = false;
  const card = document.querySelectorAll(".card");
  card.forEach(function (card) {
    card.classList.remove("flipCard");
  });
  timeleft = 60;
  clearInterval(downloadTimer)
  if (document.getElementById("2_pic").checked || document.getElementById("3_pic").checked || document.getElementById("4_pic").checked) {
    countDown()
  }
  twoSeriesArr = []
  threeSeriesArray = []
  fourSeriesArray = []
  result = 0
  randomArr = []
}
function show() {
  clearInterval(downloadTimer);
  const card = document.querySelectorAll(".card");
  card.forEach(function (card) {
    const h1ClassNames = card.classList;
    if (h1ClassNames[1] == 'flipCard') {
    } else {
      card.classList.toggle("flipCard");
    }
  });
}
window.onload = function () {
  for (i = 0; i < 6; i++) {
    var x = document.createElement("div");
    x.setAttribute("class", "card");
    x.setAttribute("id", `card${i}`);
    x.setAttribute("onclick", "flipCard(event)");
    document.getElementById("sub_container__1").appendChild(x);
    var y = document.createElement("div");
    y.setAttribute("class", "front");
    y.setAttribute("id", `front${i}`);
    document.getElementById(`card${i}`).appendChild(y);
    var y1 = document.createElement("img");
    y1.setAttribute("class", "img1");
    y1.setAttribute("id", `img${i}`);
    y1.setAttribute("src", "./img/img2.jpeg");
    y1.setAttribute("alt", "");
    document.getElementById(`front${i}`).appendChild(y1);
    var z = document.createElement("div");
    z.setAttribute("class", "back");
    z.setAttribute("id", `back${i}`);
    document.getElementById(`card${i}`).appendChild(z);
    var z1 = document.createElement("img");
    z1.setAttribute("class", "img1");
    z1.setAttribute("id", `imgs${i}`);
    z1.setAttribute("src", "./img/img2.jpeg");
    z1.setAttribute("alt", "");
    document.getElementById(`back${i}`).appendChild(z1);
  }
  for (i = 6; i < 12; i++) {
    var x = document.createElement("div");
    x.setAttribute("class", "card");
    x.setAttribute("id", `card${i}`);
    x.setAttribute("onclick", "flipCard(event)");
    document.getElementById("sub_container__2").appendChild(x);
    var y = document.createElement("div");
    y.setAttribute("class", "front");
    y.setAttribute("id", `front${i}`);
    document.getElementById(`card${i}`).appendChild(y);
    var y1 = document.createElement("img");
    y1.setAttribute("class", "img1");
    y1.setAttribute("id", `img${i}`);
    y1.setAttribute("src", "./img/img2.jpeg");
    y1.setAttribute("alt", "");
    document.getElementById(`front${i}`).appendChild(y1);
    var z = document.createElement("div");
    z.setAttribute("class", "back");
    z.setAttribute("id", `back${i}`);
    document.getElementById(`card${i}`).appendChild(z);
    var z1 = document.createElement("img");
    z1.setAttribute("class", "img1");
    z1.setAttribute("id", `imgs${i}`);
    z1.setAttribute("src", "./img/img2.jpeg");
    z1.setAttribute("alt", "");
    document.getElementById(`back${i}`).appendChild(z1);
  }
  for (i = 12; i < 18; i++) {
    var x = document.createElement("div");
    x.setAttribute("class", "card");
    x.setAttribute("id", `card${i}`);
    x.setAttribute("onclick", "flipCard(event)");
    document.getElementById("sub_container__3").appendChild(x);
    var y = document.createElement("div");
    y.setAttribute("class", "front");
    y.setAttribute("id", `front${i}`);
    document.getElementById(`card${i}`).appendChild(y);
    var y1 = document.createElement("img");
    y1.setAttribute("class", "img1");
    y1.setAttribute("id", `img${i}`);
    y1.setAttribute("src", "./img/img2.jpeg");
    y1.setAttribute("alt", "");
    document.getElementById(`front${i}`).appendChild(y1);
    var z = document.createElement("div");
    z.setAttribute("class", "back");
    z.setAttribute("id", `back${i}`);
    document.getElementById(`card${i}`).appendChild(z);
    var z1 = document.createElement("img");
    z1.setAttribute("class", "img1");
    z1.setAttribute("id", `imgs${i}`);
    z1.setAttribute("src", "./img/img2.jpeg");
    z1.setAttribute("alt", "");
    document.getElementById(`back${i}`).appendChild(z1);
  }
  for (i = 18; i < 24; i++) {
    var x = document.createElement("div");
    x.setAttribute("class", "card");
    x.setAttribute("id", `card${i}`);
    x.setAttribute("onclick", "flipCard(event)");
    document.getElementById("sub_container__4").appendChild(x);
    var y = document.createElement("div");
    y.setAttribute("class", "front");
    y.setAttribute("id", `front${i}`);
    document.getElementById(`card${i}`).appendChild(y);
    var y1 = document.createElement("img");
    y1.setAttribute("class", "img1");
    y1.setAttribute("id", `img${i}`);
    y1.setAttribute("src", "./img/img2.jpeg");
    y1.setAttribute("alt", "");
    document.getElementById(`front${i}`).appendChild(y1);
    var z = document.createElement("div");
    z.setAttribute("class", "back");
    z.setAttribute("id", `back${i}`);
    document.getElementById(`card${i}`).appendChild(z);
    var z1 = document.createElement("img");
    z1.setAttribute("class", "img1");
    z1.setAttribute("id", `imgs${i}`);
    z1.setAttribute("src", "./img/img2.jpeg");
    z1.setAttribute("alt", "");
    document.getElementById(`back${i}`).appendChild(z1);
  }
  var dd = document.getElementsByClassName('card');
  Array.prototype.forEach.call(dd, function (element) {
    element.addEventListener('click', function () {
      element.classList.toggle("flipCard");
    });
  });
  var ds = document.getElementsByClassName('card');
  Array.prototype.forEach.call(ds, function (element) {
    element.addEventListener('click', function () {
      var children1 = element.children[1].children[0]
      var flipData1 = children1.src
      twoSeriesArr.push(flipData1)
      if (document.getElementById('2_pic').checked) {
        if (twoSeriesArr.length == 2) {
          flipImage();
        }
      } else if (document.getElementById('3_pic').checked) {
        if (twoSeriesArr.length == 2) {
          flipImageSeries3()
        } else if (twoSeriesArr.length == 3) {
          flipImageSeries3_1()
        }
      } else {
        if (twoSeriesArr.length == 2) {
          flipImagesSeries4();
        } else if (twoSeriesArr.length == 3) {
          flipImagesSeries4_1();
        } else if (twoSeriesArr.length == 4) {
          flipImagesSeries4_1_2();
        }
      }
    });
  });
}




