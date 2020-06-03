const canvas1 = document.getElementById("barGraphOne");
const canvas2 = document.getElementById("barGraphTwo");
const canvas3 = document.getElementById("barGraphThree");

let ctx1 = canvas1.getContext("2d");
let ctx2 = canvas2.getContext("2d");
let ctx3 = canvas3.getContext("2d");
let line = 0; 


// canvas.width = 500;
// canvas.height = 250;

// ctx1.strokeStyle = 'rgb(0,0,0)';

const graphLayout = () => {

  for (i = 0; i < 9; i++) {
      line = line + 30;
      
      ctx1.beginPath(), ctx1.moveTo(line, 0), ctx1.lineTo(line, 120), ctx1.stroke();  
      ctx2.beginPath(), ctx2.moveTo(line, 0), ctx2.lineTo(line, 120), ctx2.stroke();  
      ctx3.beginPath(), ctx3.moveTo(line, 0), ctx3.lineTo(line, 120), ctx3.stroke();  
 
  }

  ctx1.beginPath(), ctx1.moveTo(0, 120), ctx1.lineTo(300, 120), ctx1.stroke();  
  ctx2.beginPath(), ctx2.moveTo(0, 120), ctx2.lineTo(300, 120), ctx2.stroke();  
  ctx3.beginPath(), ctx3.moveTo(0, 120), ctx3.lineTo(300, 120), ctx3.stroke();  

 


};

const graphVariables = () => {
  //This is how you adjust the height, color, text sixe and style
  ctx1.font = "15px Arial";
  Vertical = 130;
  horizontalOne = 45;
  horizontalTwo = 180;
  optionOneColor = "red";
  optionTwoColor = "blue";

  //first graph stuff
  ctx1.fillText("3 hands",60,140);
  ctx1.fillText("3 feet",200,140);

  ctx1.beginPath();
  ctx1.fillStyle = optionOneColor;
  ctx1.fillRect(horizontalOne,Vertical,10,10);
  ctx1.fill();

  ctx1.beginPath();
  ctx1.fillStyle = optionTwoColor;
  ctx1.fillRect(horizontalTwo,Vertical,10,10);
  ctx1.fill();

  //second graph stuff

  ctx2.font = "15px Arial";

  ctx2.fillText("Taste",60,140);
  ctx2.fillText("Smell",200,140);

  
  ctx2.beginPath();
  ctx2.fillStyle = optionOneColor;
  ctx2.fillRect(horizontalOne,Vertical,10,10);
  ctx2.fill();
  

  ctx2.beginPath();
  ctx2.fillStyle = optionTwoColor;
  ctx2.fillRect(horizontalTwo,Vertical,10,10);
  ctx2.fill();
  
  //third graph stuff

  ctx3.font = "15px Arial";

  ctx3.fillText("Burn",60,140);
  ctx3.fillText("freeze",200,140);  

  ctx3.beginPath();
  ctx3.fillStyle = optionOneColor;
  ctx3.fillRect(horizontalOne,Vertical,10,10);  
  ctx3.fill();
  
  ctx3.beginPath();
  ctx3.fillStyle = optionTwoColor;
  ctx3.fillRect(horizontalTwo,Vertical,10,10);
  ctx3.fill();
};

const barGraph = () => {

  barStart = 0;
  barHeightOne = 20;
  barHeightTwo = 70;
  barOneColor = "red";
  barTwoColor = "blue";

  barGraphReportOne = 30;
  barGraphReportTwo = 30;

  ctx1.beginPath();
  ctx1.fillStyle = barOneColor;
  ctx1.fillRect(barStart, barHeightOne, barGraphReportOne, 30);
  ctx1.fill();

  ctx1.beginPath();
  ctx1.fillStyle = barTwoColor;
  ctx1.fillRect(barStart, barHeightTwo, barGraphReportTwo, 30);
  ctx1.fill();

  ctx2.beginPath();
  ctx2.fillStyle = barOneColor;
  ctx2.fillRect(barStart, barHeightOne, barGraphReportOne, 30);
  ctx2.fill();

  ctx2.beginPath();
  ctx2.fillStyle = barTwoColor;
  ctx2.fillRect(barStart, barHeightTwo, barGraphReportTwo, 30);
  ctx2.fill();

  ctx3.beginPath();
  ctx3.fillStyle = barOneColor;
  ctx3.fillRect(barStart, barHeightOne, barGraphReportOne, 30);
  ctx3.fill();

  ctx3.beginPath();
  ctx3.fillStyle = barTwoColor;
  ctx3.fillRect(barStart, barHeightTwo, barGraphReportTwo, 30);
  ctx3.fill();
};

graphLayout();
graphVariables();
barGraph();

  // let player_x = 0;
  // let player_y = 10;
  // let width = 30;
  // let height = 30;
  
  // const loop = () => {
  //   ctx2.clearRect(0, 0, 600, 400);
  
  //   ctx2.fillStyle = "#ff1493";
  //   ctx2.fillRect(player_x, player_y, width, height);
  //   player_x++;
  // };
  // setInterval(loop, 1);