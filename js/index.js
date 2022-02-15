const twoGameData = [
    "./img/1.png",
    "./img/2.png",
    "./img/3.png",
    "./img/4.png",
    "./img/5.png",
    "./img/6.png",
    "./img/7.png",
    "./img/8.png",
    "./img/9.png",
    "./img/10.png",
    "./img/100.png",
    "./img/50.png",
];
// array for comparing two photos
let twoSeriesArr = []
//array for comaparing three photos (if 1st and 2nd are equal)
let threeSeriesArray = []
//array for comaparing three photos (if 1st 2nd and 3rd are equal)
let fourSeriesArray = []
//for removing the class flipCard on that cardID which are not match
let cardId = [];
//for showing the result
let result = 0;
//for time 60 sec
let timeLeft = 60;
// for storing the random data from genRandNum() function
let randomArr = [];
// getting and stop the time
let downloadTimer;
//fliped card id
let allCard = []
//generating random data
function genRandNum(value) {
    while (randomArr.length < value) {
        const randomData = Math.floor(Math.random() * value) + 0;
        if (randomArr.indexOf(randomData) === -1) randomArr.push(randomData);
    }
}
function option() {
    document.getElementById("2_pic").disabled = true;
    document.getElementById("3_pic").disabled = true;
    document.getElementById("4_pic").disabled = true;
    document.getElementById("show").disabled = false;
    document.getElementById("newGame").disabled = false;
}
function eventNone() {
    const card = document.querySelectorAll(".card");
    card.forEach(function (card) {
        card.classList.remove('eventNuno')
    });
}
function setBackImage() {
    for (i = 0; i < randomArr.length; i++) {
        document.getElementById(`imgs${i}`).src = twoGameData[randomArr[i]]
    }
}
// generating grid of 24 card here
for (i = 0; i < 24; i++) {
    const x = document.createElement("div");
    x.setAttribute("class", "card eventNuno");
    x.setAttribute("id", `card${i}`);
    x.setAttribute("onclick", "flipCard(event)");
    document.getElementById("sub_container__1").appendChild(x);
    const y = document.createElement("div");
    y.setAttribute("class", "front");
    y.setAttribute("id", `front${i}`);
    document.getElementById(`card${i}`).appendChild(y);
    const y1 = document.createElement("img");
    y1.setAttribute("class", "img1");
    y1.setAttribute("id", `img${i}`);
    y1.setAttribute("src", "./img/img2.jpeg");
    y1.setAttribute("alt", "");
    document.getElementById(`front${i}`).appendChild(y1);
    const z = document.createElement("div");
    z.setAttribute("class", "back");
    z.setAttribute("id", `back${i}`);
    document.getElementById(`card${i}`).appendChild(z);
    const z1 = document.createElement("img");
    z1.setAttribute("class", "img1");
    z1.setAttribute("id", `imgs${i}`);
    z1.setAttribute("src", "./img/img2.jpeg");
    z1.setAttribute("alt", "");
    document.getElementById(`back${i}`).appendChild(z1);
    // num++
}
//2 series game functionality
function twoGame() {
    eventNone()
    option()
    genRandNum(12)
    randomArr = [...randomArr, ...randomArr]
    randomArr = randomArr.sort(() => Math.random() - 0.5)
    console.log('random index', randomArr)
    document.getElementById("2_pic").checked = true;
    countDown();
    setBackImage()
}
//3 series game functionality
function threeGame() {
    eventNone()
    document.getElementById("3_pic").checked = true;
    option()
    countDown();
    genRandNum(8)
    randomArr = [...randomArr, ...randomArr, ...randomArr]
    randomArr = randomArr.sort(() => Math.random() - 0.5)
    console.log('random index', randomArr)
    setBackImage()
}
//4 series game functionality
function fourGame() {
    eventNone()
    document.getElementById("4_pic").checked = true;
    option()
    countDown();
    genRandNum(6)
    randomArr = [...randomArr, ...randomArr, ...randomArr, ...randomArr]
    randomArr = randomArr.sort(() => Math.random() - 0.5)
    console.log('random index', randomArr)
    setBackImage()
}
//fliping functionality(visibility or flip return for two series)
function removeFlipClass() {
    const card1 = document.getElementById(`${cardId[0]}`);
    const card2 = document.getElementById(`${cardId[1]}`);
    setTimeout(function () {
        card1.classList.remove("flipCard");
        card2.classList.remove("flipCard");
        twoSeriesArr = []
        cardId = []
    }, 200)
}
function stayVisible() {
    result = result + 1;
    console.log('result is ', result)
    twoSeriesArr = []
    // console.log('card id is',cardId)
    allCard = allCard.concat(cardId)
    // console.log('all card is',allCard)
    cardId = []
}
function flipImage() {
    if (twoSeriesArr[0] === twoSeriesArr[1]) {
        stayVisible()
    } else {
        removeFlipClass()
    }
}
//fliping functionality(visibility or flip return for three series......for two pic)
function flipImageSeries3() {
    if (twoSeriesArr[0] === twoSeriesArr[1]) {
    } else {
        removeFlipClass()
    }
}
function flipImageSeries3_1() {
    threeSeriesArray = [...new Set(twoSeriesArr)]
    if (threeSeriesArray.length == 1) {
        stayVisible()
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
        removeFlipClass()
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
        stayVisible()
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
//show button functionality
function show() {
    document.getElementById("2_pic").checked = false
    document.getElementById("3_pic").checked = false
    document.getElementById("4_pic").checked = false
    const card = document.querySelectorAll(".card");
    card.forEach(function (card) {
        card.classList.add('eventNuno')
    });
    cardId = []
    clearInterval(downloadTimer);
    card.forEach(function (card) {
        const h1ClassNames = card.classList;
        if (h1ClassNames[1] == 'flipCard') {
        } else {
            card.classList.toggle("flipCard");
        }
    });
}
// counter start here
function countDown() {
    downloadTimer = setInterval(function function1() {
        document.getElementById("coutDown").innerHTML =
            timeLeft + "&nbsp" + "seconds remaining";
        timeLeft -= 1;
        if (timeLeft > 0) {
            if (document.getElementById("2_pic").checked) {
                if (result == 12) {
                    window.alert('congratulations you win the game')
                    newGame()
                }
            } else if (document.getElementById("3_pic").checked) {
                if (result == 8) {
                    window.alert('congratulations you win the game')
                    newGame()
                }
            } else {
                if (result == 6) {
                    window.alert('congratulations you win the game')
                    newGame()
                }
            }
        }
        if (timeLeft == 0) {
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
// getting the card id
function flipCard(event) {
    cardId.push(event.currentTarget.id)
    // console.log('card id is',cardId)
    const toFindDuplicates = cardId => cardId.filter((item, index) => cardId.indexOf(item) !== index)
    const data = toFindDuplicates(cardId)
    if (data.length != 0) {
        cardId.pop()
        twoSeriesArr.pop()
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const allCards = document.getElementsByClassName('card');
    Array.prototype.forEach.call(allCards, function (element) {
        element.addEventListener('click', function (event) {
            if (!element.classList.contains("flipCard")) {
                element.classList.add("flipCard");
            }
        });
    });
    const allCards1 = document.getElementsByClassName('card');
    Array.prototype.forEach.call(allCards1, function (element1) {
        element1.addEventListener('click', function () {
            if (element1.classList.contains("flipCard")) {
                const children1 = element1.children[1].children[0]
                const flipData1 = children1.src
                console.log('all card', allCard)
                let isFounded = allCard.some(data => cardId.includes(data));
                if (!isFounded) {
                    twoSeriesArr.push(flipData1)
                    console.log('two series ', twoSeriesArr)
                } else {
                    cardId.pop()
                }
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
            }
        });
    });
});
// new game button functionality here
function newGame() {
    const card = document.querySelectorAll(".card");
    card.forEach(function (card) {
        card.classList.add('eventNuno')
        card.classList.remove("flipCard");
    });
    document.getElementById("2_pic").checked = false;
    document.getElementById("3_pic").checked = false;
    document.getElementById("4_pic").checked = false;
    document.getElementById("2_pic").disabled = false;
    document.getElementById("3_pic").disabled = false;
    document.getElementById("4_pic").disabled = false;
    document.getElementById("show").disabled = true;
    twoSeriesArr = []
    threeSeriesArray = []
    fourSeriesArray = []
    cardId = []
    allCard = []
    result = 0
    randomArr = []
    timeLeft = 60
    document.getElementById("coutDown").innerHTML = `${timeLeft}`;
    clearInterval(downloadTimer)
}

