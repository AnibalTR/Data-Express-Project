// const canvas = document.getElementsByClassName("barGraph");

const canvas1 = document.getElementById("barGraphOne");
const canvas2 = document.getElementById("barGraphTwo");
const canvas3 = document.getElementById("barGraphThree");
const canvas4 = document.getElementById("barGraphFour");
const canvas5 = document.getElementById("barGraphFive");

const ctx1 = canvas1.getContext("2d");
const ctx2 = canvas2.getContext("2d");
const ctx3 = canvas3.getContext("2d");
const ctx4 = canvas4.getContext("2d");
const ctx5 = canvas5.getContext("2d");

// canvas.width = 500;
// canvas.height = 250;

const drawStuff = () => {
    ctx.fillStyle = "#405";
    ctx.fillRect(100, 100, 80, 40);
  
    ctx.strokeStyle = "#3C3";
    ctx.strokeRect(200, 100, 40, 80);
  
    ctx.fillRect(300, 100, 80, 40);
    ctx.strokeRect(300, 100, 80, 40);
  
    ctx.fillStyle = "#008080";
    ctx.beginPath();
    ctx.moveTo(450, 10);
    ctx.lineTo(420, 35);
    ctx.lineTo(450, 60);
    ctx.lineTo(450, 10);
    ctx.stroke();
  
    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(330, 310);
    ctx.lineTo(320, 330);
    ctx.lineTo(280, 330);
    ctx.lineTo(270, 310);
    ctx.fill();
  };

  let player_x = 0;
  let player_y = 110;
  let width = 30;
  let height = 30;
  
  const loop = () => {
    ctx.clearRect(0, 0, 600, 400);
  
    ctx.fillStyle = "#ff1493";
    ctx.fillRect(player_x, player_y, width, height);
    player_x++;
    drawStuff();
  };
  setInterval(loop, 10);