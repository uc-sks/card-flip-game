const twoGameData = [
    "./img/1.png",
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
    "./img/2.png",
    "./img/3.png",
    "./img/4.png",
    "./img/5.png",
    "./img/6.png",
    "./img/7.png",
    "./img/8.png",
    "./img/9.png",
    "./img/10.png",
    "./img/50.png",
    "./img/100.png"
];
const threeGameData = [
    "./img/1.png", "./img/1.png", "./img/1.png",
    "./img/2.png", "./img/2.png", "./img/2.png",
    "./img/3.png", "./img/3.png", "./img/3.png",
    "./img/4.png", "./img/4.png", "./img/4.png",
    "./img/5.png", "./img/5.png", "./img/5.png",
    "./img/6.png", "./img/6.png", "./img/6.png",
    "./img/7.png", "./img/7.png", "./img/7.png",
    "./img/8.png", "./img/8.png", "./img/8.png",
];
const fourGameData = [
    "./img/1.png", "./img/1.png", "./img/1.png", "./img/1.png",
    "./img/2.png", "./img/2.png", "./img/2.png", "./img/2.png",
    "./img/3.png", "./img/3.png", "./img/3.png", "./img/3.png",
    "./img/4.png", "./img/4.png", "./img/4.png", "./img/4.png",
    "./img/5.png", "./img/5.png", "./img/5.png", "./img/5.png",
    "./img/6.png", "./img/6.png", "./img/6.png", "./img/6.png",
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
// for storing the random data from getRandomIndex() function
let randomArr = [];
// getting and stop the time
let downloadTimer;
// function for generate random number between 0-23
function getRandomIndex() {
    while (randomArr.length < 24) {
        const randomData = Math.floor(Math.random() * 24) + 0;
        if (randomArr.indexOf(randomData) === -1) randomArr.push(randomData);
    }
}
//2 series game functionality
function twoGame() {
    getRandomIndex()
    document.getElementById("2_pic").disabled = true;
    document.getElementById("2_pic").checked = true;
    document.getElementById("3_pic").disabled = true;
    document.getElementById("4_pic").disabled = true;
    document.getElementById("show").disabled = false;
    countDown();
    switchIntoGame()
    for (i = 0; i <= randomArr.length; i++) {
        document.getElementById(`imgs${i}`).src = twoGameData[randomArr[i]]
    }

}
//3 series game functionality
function threeGame() {
    document.getElementById("2_pic").disabled = true;
    document.getElementById("3_pic").disabled = true;
    document.getElementById("3_pic").checked = true;
    document.getElementById("4_pic").disabled = true;
    document.getElementById("show").disabled = false;

    countDown();
    getRandomIndex()
    for (i = 0; i <= randomArr.length; i++) {
        document.getElementById(`imgs${i}`).src = threeGameData[randomArr[i]]
    }
    switchIntoGame()
}
//4 series game functionality
function fourGame() {
    document.getElementById("2_pic").disabled = true;
    document.getElementById("3_pic").disabled = true;
    document.getElementById("4_pic").disabled = true;
    document.getElementById("4_pic").checked = true;
    document.getElementById("show").disabled = false;

    countDown();
    getRandomIndex()
    for (i = 0; i <= randomArr.length; i++) {
        document.getElementById(`imgs${i}`).src = fourGameData[randomArr[i]]
    }
    switchIntoGame()
}
//getting the current id of that card which is clicked and pushed in cardID array
// function flipCard(event) {
//     console.log('card id is',event.currentTarget.id)
//     cardId.push(event.currentTarget.id)
//     console.log('id array',cardId)
// }
//fliping functionality(visibility or flip return for two series)
function flipImage() {
    console.log('haa bhai aa gya');
    if (twoSeriesArr[0] === twoSeriesArr[1]) {
        result = result + 1;
        console.log('result is ', result)
        twoSeriesArr = []
        cardId = []
    } else {
        console.log('nhi kaam kiya')
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

function newGame() {
    document.getElementById("2_pic").disabled = false;
    document.getElementById("3_pic").disabled = false;
    document.getElementById("4_pic").disabled = false;
    document.getElementById("show").disabled = true;
    document.getElementById("2_pic").checked = false;
    console.log('new game data', document.getElementById("2_pic").checked)
    document.getElementById("3_pic").checked = false;
    document.getElementById("4_pic").checked = false;
    const card = document.querySelectorAll(".card");
    card.forEach(function (card) {
        card.classList.remove("flipCard");
    });
    clearInterval(downloadTimer)
    if (document.getElementById("2_pic").checked || document.getElementById("3_pic").checked || document.getElementById("4_pic").checked) {
        countDown()
    }
    twoSeriesArr = []
    threeSeriesArray = []
    fourSeriesArray = []
    result = 0
    randomArr = []
    cardId = []
    console.log('new card id', cardId)
    timeLeft = 60
    document.getElementById("coutDown").innerHTML = `${timeLeft}`;
}
function show() {
    document.getElementById("2_pic").checked = false
    document.getElementById("3_pic").checked = false
    document.getElementById("4_pic").checked = false
    // console.log('hiiiii', document.getElementById("2_pic").checked)
    // console.log('hiiiiiqs', document.getElementById("2_pic").checked)
    // console.log('hiiiiidssa', document.getElementById("2_pic").checked)
    switchIntoGame()
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
// click card to flip 
function switchIntoGame() {
    if ((document.getElementById("2_pic").checked) || (document.getElementById("3_pic").checked) || (document.getElementById("4_pic").checked)) {
        // console.log('hiiiii')
        // console.log('hiiiii', document.getElementById("2_pic").checked)
        const allCards = document.getElementsByClassName('card');
        Array.prototype.forEach.call(allCards, function (element) {
            // console.log('length is', element.classList.length)
            element.addEventListener('click', function (event) {
                console.log('length is', element.classList)
                if (element.classList.length == 2) {
                    console.log('mai flip nhi hunga')
                    twoSeriesArr = []
                } else {
                    console.log('mai flip  hunga')
                    element.classList.toggle("flipCard");
                }
                // console.log('element is erfgf', element.classList.length)
                // console.log('card id is', event.currentTarget.id)
                cardId.push(event.currentTarget.id)
                console.log('id array', cardId)
                if (cardId[0] == cardId[1]) {
                    console.log('pop karna h')
                    cardId.pop()
                    twoSeriesArr.pop()
                }
                // console.log('id array', cardId)
            });
            // console.log('hamara element',element)
        });
        // const allCards = document.getElementsByClassName('card');
        Array.prototype.forEach.call(allCards, function (element) {
            element.addEventListener('click', function () {
                const children1 = element.children[1].children[0]
                const flipData1 = children1.src
                twoSeriesArr.push(flipData1)
                console.log("two series array", twoSeriesArr)
                if (document.getElementById('2_pic').checked) {
                    if (twoSeriesArr.length == 2) {
                        console.log('mai call ho gya')
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
}


for(i=1;i<=4;i++){
    const x= document.createElement("div")
    x.setAttribute('class','sub_container__1')
    x.setAttribute('id',`sub_container__${i}`)
    document.getElementById("maxtrix__container").appendChild(x);
}
for (i = 0; i < 6; i++) {
    const x = document.createElement("div");
    x.setAttribute("class", "card");
    x.setAttribute("id", `card${i}`);
    // x.setAttribute("onclick", "flipCard(event)");
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
}
for (i = 6; i < 12; i++) {
    const x = document.createElement("div");
    x.setAttribute("class", "card");
    x.setAttribute("id", `card${i}`);
    // x.setAttribute("onclick", "flipCard(event)");
    document.getElementById("sub_container__2").appendChild(x);
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
}
for (i = 12; i < 18; i++) {
    const x = document.createElement("div");
    x.setAttribute("class", "card");
    x.setAttribute("id", `card${i}`);
    // x.setAttribute("onclick", "flipCard(event)");
    document.getElementById("sub_container__3").appendChild(x);
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
}
for (i = 18; i < 24; i++) {
    const x = document.createElement("div");
    x.setAttribute("class", "card");
    x.setAttribute("id", `card${i}`);
    // x.setAttribute("onclick", "flipCard(event)");
    document.getElementById("sub_container__4").appendChild(x);
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
}
function countDown() {
    downloadTimer = setInterval(function function1() {
        document.getElementById("coutDown").innerHTML =
            timeLeft + "&nbsp" + "seconds remaining";
        timeLeft -= 0.5;
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




