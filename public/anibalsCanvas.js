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

// canvas.width = 500;
// canvas.height = 250;

const drawStuff = () => {

    for (i = 1; i < 6; i++) {
        graph = `ctx${i}`
        graph.fillStyle = "#405";
        ctx.fillRect(100, 100, 80, 40);
        console.log(i);
        console.log(graph);
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