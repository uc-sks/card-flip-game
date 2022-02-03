// console.log('i am get url')

//for getting the url of back photo to check the equality on that card
function getUrl1() {
    var parent1 = document.getElementById('card1');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  
  //for getting the url of back photo to check the equality
  function getUrl2() {
    var parent1 = document.getElementById('card2');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl3() {
    var parent1 = document.getElementById('card3');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child img', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl4() {
    var parent1 = document.getElementById('card4');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl5() {
    var parent1 = document.getElementById('card5');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl6() {
    var parent1 = document.getElementById('card6');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl7() {
    var parent1 = document.getElementById('card7');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl8() {
    var parent1 = document.getElementById('card8');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl9() {
    var parent1 = document.getElementById('card9');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl10() {
    var parent1 = document.getElementById('card10');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl11() {
    var parent1 = document.getElementById('card11');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl12() {
    var parent1 = document.getElementById('card12');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl13() {
    var parent1 = document.getElementById('card13');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl14() {
    var parent1 = document.getElementById('card14');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl15() {
    var parent1 = document.getElementById('card15');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl16() {
    var parent1 = document.getElementById('card16');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl17() {
    var parent1 = document.getElementById('card17');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl18() {
    var parent1 = document.getElementById('card18');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl19() {
    var parent1 = document.getElementById('card19');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl20() {
    var parent1 = document.getElementById('card20');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl21() {
    var parent1 = document.getElementById('card21');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl22() {
    var parent1 = document.getElementById('card22');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl23() {
    var parent1 = document.getElementById('card23');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }
  //for getting the url of back photo to check the equality
  function getUrl24() {
    var parent1 = document.getElementById('card24');
    var children1 = parent1.children[1].children[0]
    // console.log('child', children1)
    var flipData1 = children1.src
    twoSeriesArr.push(flipData1)
    // console.log('child id', children1.src)
    // console.log('2 series array', twoSeriesArr)
    if (document.getElementById('2_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImage();
      } else {
        // console.log('abhi nhi 2 game')
      }
    } else if (document.getElementById('3_pic').checked) {
      if (twoSeriesArr.length == 2) {
        flipImageSeries3()
      } else if (twoSeriesArr.length == 3) {
        flipImageSeries3_1()
      } else {
        // console.log('mai kabhi run nhi hunga')
      }
    } else {
      if (twoSeriesArr.length == 2) {
        flipImagesSeries4();
      } else if(twoSeriesArr.length == 3) {
        flipImagesSeries4_1();
      }else if(twoSeriesArr.length == 4){
        flipImagesSeries4_1_2();
      }else{
        // console.log('series 4 mai kabhi run nhi hunga')
      }
    }
  }