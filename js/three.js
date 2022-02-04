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
  document.getElementById("2_pic").disabled = true;
  document.getElementById("3_pic").disabled = true;
  document.getElementById("4_pic").disabled = true;
  countDown();
  getRandonIndex()
  for (i = 0; i <= randomArr.length; i++) {
    document.getElementById(`imgs${i}`).src = img3[randomArr[i]]
  }
}