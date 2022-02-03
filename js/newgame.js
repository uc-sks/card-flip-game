// console.log('i am new game')

// new game button
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
    if (document.getElementById("2_pic").checked == true || document.getElementById("3_pic").checked == true || document.getElementById("4_pic").checked == true) {
      countDown()
    }
    twoSeriesArr = []
    threeSeriesArray=[]
    result=0
  }