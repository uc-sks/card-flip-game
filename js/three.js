// console.log("hello three");
var img3 = [
  "https://superstarsbio.com/wp-content/uploads/2018/08/salman-khan.jpg",//salman 0
  "https://superstarsbio.com/wp-content/uploads/2018/08/salman-khan.jpg",//salman 0
  "https://www.india.com/wp-content/uploads/2021/12/Shahrukh-Khan-.jpg",//shahrukh 1
  "https://www.india.com/wp-content/uploads/2021/12/Shahrukh-Khan-.jpg",//shahrukh 1
  "https://www.livelaw.in/h-upload/2021/11/02/403448-virat-kohli.jpg",//kohli 3
  "https://www.livelaw.in/h-upload/2021/11/02/403448-virat-kohli.jpg",//kohli 3
  "https://c.ndtvimg.com/2021-11/fcbadjs8_rohit-sharma-afp_625x300_18_November_21.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605",//rohit 4
  "https://c.ndtvimg.com/2021-11/fcbadjs8_rohit-sharma-afp_625x300_18_November_21.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605",//rohit 4
  "https://pbs.twimg.com/profile_images/1472828456413007872/gk5LO2EM_400x400.jpg",//kapil 5
  "https://pbs.twimg.com/profile_images/1472828456413007872/gk5LO2EM_400x400.jpg",//kapil 5
  "https://cricketaddictor.gumlet.io/wp-content/uploads/2021/07/MS-Dhoni-6.jpg?compress=true&quality=80&w=480&dpr=2.6",//dhoni 7
  "https://cricketaddictor.gumlet.io/wp-content/uploads/2021/07/MS-Dhoni-6.jpg?compress=true&quality=80&w=480&dpr=2.6",//dhoni 7
  "https://images.news18.com/ibnlive/uploads/2021/08/sachin-tendulkar-52-16287387964x3.jpg",//sachin 8
  "https://images.news18.com/ibnlive/uploads/2021/08/sachin-tendulkar-52-16287387964x3.jpg",//sachin 8
  "https://m.media-amazon.com/images/M/MV5BMjQ5OTY4MjYtMjBkNi00ZWFjLWI1YmItMTkxZTk0ODYwNDZiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",//yuvraj 9
  "https://superstarsbio.com/wp-content/uploads/2018/08/salman-khan.jpg",//salman 12
  "https://www.india.com/wp-content/uploads/2021/12/Shahrukh-Khan-.jpg",//shahrukh 13
  "https://www.livelaw.in/h-upload/2021/11/02/403448-virat-kohli.jpg",//kohli 15
  "https://c.ndtvimg.com/2021-11/fcbadjs8_rohit-sharma-afp_625x300_18_November_21.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605",//rohit 16
  "https://pbs.twimg.com/profile_images/1472828456413007872/gk5LO2EM_400x400.jpg",//kapil 17
  "https://cricketaddictor.gumlet.io/wp-content/uploads/2021/07/MS-Dhoni-6.jpg?compress=true&quality=80&w=480&dpr=2.6",//dhoni 19
  "https://images.news18.com/ibnlive/uploads/2021/08/sachin-tendulkar-52-16287387964x3.jpg",//sachin 20
  "https://m.media-amazon.com/images/M/MV5BMjQ5OTY4MjYtMjBkNi00ZWFjLWI1YmItMTkxZTk0ODYwNDZiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",//yuvraj 21
  "https://m.media-amazon.com/images/M/MV5BMjQ5OTY4MjYtMjBkNi00ZWFjLWI1YmItMTkxZTk0ODYwNDZiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",//yuvraj 21
];

function threeGame() {
  // console.log("three game");
  document.getElementById("2_pic").disabled = true;
  document.getElementById("3_pic").disabled = true;
  document.getElementById("4_pic").disabled = true;
  countDown();

  


// for first index
imgIndex1 = Math.floor(Math.random() * img3.length); //find random index
var imgSrc1 = img3[imgIndex1];
document.getElementById("img1").src = imgSrc1;

// for second index
imgIndex2 = Math.floor(Math.random() * img3.length); //find random index
if (imgIndex1 == imgIndex2) {
  while (imgIndex1 == imgIndex2) {
    imgIndex2 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc2 = img3[imgIndex2];
} else {
  var imgSrc2 = img3[imgIndex2];
}
document.getElementById("img2").src = imgSrc2;

 // for third index
 imgIndex3 = Math.floor(Math.random() * img3.length); //find random index
 if ([imgIndex1, imgIndex2].includes(imgIndex3)) {
   while ([imgIndex1, imgIndex2].includes(imgIndex3)) {
     imgIndex3 = Math.floor(Math.random() * img3.length);
   }
   var imgSrc3 = img3[imgIndex3];
 } else {
   var imgSrc3 = img3[imgIndex3];
 }
 document.getElementById("img3").src = imgSrc3;

  // for fourth index
imgIndex4 = Math.floor(Math.random() * img3.length); //find random index
if ([imgIndex1, imgIndex2, imgIndex3].includes(imgIndex4)) {
  while ([imgIndex1, imgIndex2, imgIndex3].includes(imgIndex4)) {
    imgIndex4 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc4 = img3[imgIndex4];
} else {
  var imgSrc4 = img3[imgIndex4];
}
document.getElementById("img4").src = imgSrc4;


// for fifth index
imgIndex5 = Math.floor(Math.random() * img3.length); //find random index
if ([imgIndex1, imgIndex2, imgIndex3, imgIndex4].includes(imgIndex5)) {
  while ([imgIndex1, imgIndex2, imgIndex3, imgIndex4].includes(imgIndex5)) {
    imgIndex5 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc5 = img3[imgIndex5];
} else {
  var imgSrc5 = img3[imgIndex5];
}
document.getElementById("img5").src = imgSrc5;

// for sixth index
imgIndex6 = Math.floor(Math.random() * img3.length); //find random index
if (
  [imgIndex1, imgIndex2, imgIndex3, imgIndex4, imgIndex5].includes(imgIndex6)
) {
  while (
    [imgIndex1, imgIndex2, imgIndex3, imgIndex4, imgIndex5].includes(
      imgIndex6
    )
  ) {
    imgIndex6 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc6 = img3[imgIndex6];
} else {
  var imgSrc6 = img3[imgIndex6];
}
document.getElementById("img6").src = imgSrc6;


// for seven index
imgIndex7 = Math.floor(Math.random() * img3.length); //find random index
if (
  [imgIndex1, imgIndex2, imgIndex3, imgIndex4, imgIndex5, imgIndex6].includes(
    imgIndex7
  )
) {
  while (
    [
      imgIndex1,
      imgIndex2,
      imgIndex3,
      imgIndex4,
      imgIndex5,
      imgIndex6,
    ].includes(imgIndex7)
  ) {
    imgIndex7 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc7 = img3[imgIndex7];
} else {
  var imgSrc7 = img3[imgIndex7];
}
document.getElementById("img7").src = imgSrc7;

// for 8th index
imgIndex8 = Math.floor(Math.random() * img3.length); //find random index
if (
  [
    imgIndex1,
    imgIndex2,
    imgIndex3,
    imgIndex4,
    imgIndex5,
    imgIndex6,
    imgIndex7,
  ].includes(imgIndex8)
) {
  while (
    [
      imgIndex1,
      imgIndex2,
      imgIndex3,
      imgIndex4,
      imgIndex5,
      imgIndex6,
      imgIndex7,
    ].includes(imgIndex8)
  ) {
    imgIndex8 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc8 = img3[imgIndex8];
} else {
  var imgSrc8 = img3[imgIndex8];
}
document.getElementById("img8").src = imgSrc8;


// for 9th index

imgIndex9 = Math.floor(Math.random() * img3.length); //find random index
if (
  [
    imgIndex1,
    imgIndex2,
    imgIndex3,
    imgIndex4,
    imgIndex5,
    imgIndex6,
    imgIndex7,
    imgIndex8,
  ].includes(imgIndex9)
) {
  while (
    [
      imgIndex1,
      imgIndex2,
      imgIndex3,
      imgIndex4,
      imgIndex5,
      imgIndex6,
      imgIndex7,
      imgIndex8,
    ].includes(imgIndex9)
  ) {
    imgIndex9 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc9 = img3[imgIndex9];
} else {
  var imgSrc9 = img3[imgIndex9];
}
document.getElementById("img9").src = imgSrc9;

// for 10th index
imgIndex10 = Math.floor(Math.random() * img3.length); //find random index
if (
  [
    imgIndex1,
    imgIndex2,
    imgIndex3,
    imgIndex4,
    imgIndex5,
    imgIndex6,
    imgIndex7,
    imgIndex8,
    imgIndex9,
  ].includes(imgIndex10)
) {
  while (
    [
      imgIndex1,
      imgIndex2,
      imgIndex3,
      imgIndex4,
      imgIndex5,
      imgIndex6,
      imgIndex7,
      imgIndex8,
      imgIndex9,
    ].includes(imgIndex10)
  ) {
    imgIndex10 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc10 = img3[imgIndex10];
} else {
  var imgSrc10 = img3[imgIndex10];
}
document.getElementById("img10").src = imgSrc10;

// for 11th index
imgIndex11 = Math.floor(Math.random() * img3.length); //find random index
if (
  [
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
  ].includes(imgIndex11)
) {
  while (
    [
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
    ].includes(imgIndex11)
  ) {
    imgIndex11 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc11 = img3[imgIndex11];
} else {
  var imgSrc11 = img3[imgIndex11];
}
document.getElementById("img11").src = imgSrc11;

// for 12th index
imgIndex12 = Math.floor(Math.random() * img3.length); //find random index
if (
  [
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
  ].includes(imgIndex12)
) {
  while (
    [
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
    ].includes(imgIndex12)
  ) {
    imgIndex12 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc12 = img3[imgIndex12];
} else {
  var imgSrc12 = img3[imgIndex12];
}
document.getElementById("img12").src = imgSrc12;


// for 13th index
imgIndex13 = Math.floor(Math.random() * img3.length); //find random index
if (
  [
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
  ].includes(imgIndex13)
) {
  while (
    [
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
    ].includes(imgIndex13)
  ) {
    imgIndex13 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc13 = img3[imgIndex13];
} else {
  var imgSrc13 = img3[imgIndex13];
}
document.getElementById("img13").src = imgSrc13;

// for 14th index
imgIndex14 = Math.floor(Math.random() * img3.length); //find random index
if (
  [
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
  ].includes(imgIndex14)
) {
  while (
    [
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
    ].includes(imgIndex14)
  ) {
    imgIndex14 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc14 = img3[imgIndex14];
} else {
  var imgSrc14 = img3[imgIndex14];
}
document.getElementById("img14").src = imgSrc14;

//  for 15th index
imgIndex15 = Math.floor(Math.random() * img3.length); //find random index
if (
  [
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
  ].includes(imgIndex15)
) {
  while (
    [
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
    ].includes(imgIndex15)
  ) {
    imgIndex15 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc15 = img3[imgIndex15];
} else {
  var imgSrc15 = img3[imgIndex15];
}
document.getElementById("img15").src = imgSrc15;


// for 16th index
imgIndex16 = Math.floor(Math.random() * img3.length); //find random index
if (
  [
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
  ].includes(imgIndex16)
) {
  while (
    [
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
    ].includes(imgIndex16)
  ) {
    imgIndex16 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc16 = img3[imgIndex16];
} else {
  var imgSrc16 = img3[imgIndex16];
}
document.getElementById("img16").src = imgSrc16;

// for 17th index
imgIndex17 = Math.floor(Math.random() * img3.length); //find random index
if (
  [
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
  ].includes(imgIndex17)
) {
  while (
    [
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
    ].includes(imgIndex17)
  ) {
    imgIndex17 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc17 = img3[imgIndex17];
} else {
  var imgSrc17 = img3[imgIndex17];
}
document.getElementById("img17").src = imgSrc17;


// for 18th index
imgIndex18 = Math.floor(Math.random() * img3.length); //find random index
if (
  [
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
  ].includes(imgIndex18)
) {
  while (
    [
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
    ].includes(imgIndex18)
  ) {
    imgIndex18 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc18 = img3[imgIndex18];
} else {
  var imgSrc18 = img3[imgIndex18];
}
document.getElementById("img18").src = imgSrc18;

//  for 19th index
imgIndex19 = Math.floor(Math.random() * img3.length); //find random index
if (
  [
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
  ].includes(imgIndex19)
) {
  while (
    [
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
    ].includes(imgIndex19)
  ) {
    imgIndex19 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc19 = img3[imgIndex19];
} else {
  var imgSrc19 = img3[imgIndex19];
}
document.getElementById("img19").src = imgSrc19;

// for 20th index
imgIndex20 = Math.floor(Math.random() * img3.length); //find random index
if (
  [
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
  ].includes(imgIndex20)
) {
  while (
    [
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
    ].includes(imgIndex20)
  ) {
    imgIndex20 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc20 = img3[imgIndex20];
} else {
  var imgSrc20 = img3[imgIndex20];
}
document.getElementById("img20").src = imgSrc20;


//  for 21th index
imgIndex21 = Math.floor(Math.random() * img3.length); //find random index
if (
  [
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
  ].includes(imgIndex21)
) {
  while (
    [
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
    ].includes(imgIndex21)
  ) {
    imgIndex21 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc21 = img3[imgIndex21];
} else {
  var imgSrc21 = img3[imgIndex21];
}
document.getElementById("img21").src = imgSrc21;


//  for 22th index
imgIndex22 = Math.floor(Math.random() * img3.length); //find random index
if (
  [
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
  ].includes(imgIndex22)
) {
  while (
    [
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
    ].includes(imgIndex22)
  ) {
    imgIndex22 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc22 = img3[imgIndex22];
} else {
  var imgSrc22 = img3[imgIndex22];
}
document.getElementById("img22").src = imgSrc22;


// for 23th index
imgIndex23 = Math.floor(Math.random() * img3.length); //find random index
if (
  [
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
  ].includes(imgIndex23)
) {
  while (
    [
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
    ].includes(imgIndex23)
  ) {
    imgIndex23 = Math.floor(Math.random() * img3.length);
  }
  var imgSrc23 = img3[imgIndex23];
} else {
  var imgSrc23 = img3[imgIndex23];
}
document.getElementById("img23").src = imgSrc23;


  //  for 24th index
  imgIndex24 = Math.floor(Math.random() * img3.length); //find random index
  if (
    [
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
    ].includes(imgIndex24)
  ) {
    while (
      [
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
      ].includes(imgIndex24)
    ) {
      imgIndex24 = Math.floor(Math.random() * img3.length);
    }
    var imgSrc24 = img3[imgIndex24];
  } else {
    var imgSrc24 = img3[imgIndex24];
  }
  document.getElementById("img24").src = imgSrc24;
  // // console.log(
  //   "index value are",
  //   imgIndex1,
  //   imgIndex2,
  //   imgIndex3,
  //   imgIndex4,
  //   imgIndex5,
  //   imgIndex6,
  //   imgIndex7,
  //   imgIndex8,
  //   imgIndex9,
  //   imgIndex10,
  //   imgIndex11,
  //   imgIndex12,
  //   imgIndex13,
  //   imgIndex14,
  //   imgIndex15,
  //   imgIndex16,
  //   imgIndex17,
  //   imgIndex18,
  //   imgIndex19,
  //   imgIndex20,
  //   imgIndex21,
  //   imgIndex22,
  //   imgIndex23,
  //   imgIndex24
  // );
  // console.log('bhai chal ja yar 3')
}