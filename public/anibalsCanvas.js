const canvas1 = document.getElementById("barGraphOne");
const canvas2 = document.getElementById("barGraphTwo");
const canvas3 = document.getElementById("barGraphThree");
const canvas4 = document.getElementById("barGraphFour");
const canvas5 = document.getElementById("barGraphFive");

let ctx1 = canvas1.getContext("2d");
let ctx2 = canvas2.getContext("2d");
let ctx3 = canvas3.getContext("2d");
let ctx4 = canvas4.getContext("2d");
let ctx5 = canvas5.getContext("2d");
let line = 0; 
// canvas.width = 500;
// canvas.height = 250;

const drawStuff = () => {
  
  for (i = 0; i < 9; i++) {
      line = line + 30;
      console.log(line);
      ctx1.strokeStyle = 'rgb(0,0,0)';
      ctx1.beginPath(), ctx1.moveTo(line, 0), ctx1.lineTo(line, 150), ctx1.stroke();  
  }

    



};

drawStuff();

//   let player_x = 0;
//   let player_y = 110;
//   let width = 30;
//   let height = 30;
  
//   const loop = () => {
//     ctx.clearRect(0, 0, 600, 400);
  
//     ctx.fillStyle = "#ff1493";
//     ctx.fillRect(player_x, player_y, width, height);
//     player_x++;
//     drawStuff();
//   };
//   setInterval(loop, 10);