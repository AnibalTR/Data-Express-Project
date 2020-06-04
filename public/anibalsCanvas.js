const canvas1 = document.getElementById("barGraphOne");
const canvas2 = document.getElementById("barGraphTwo");
const canvas3 = document.getElementById("barGraphThree");

let url = "http://localhost:3000/api";

// canvas.width = 500;
// canvas.height = 250;

// ctx1.strokeStyle = 'rgb(0,0,0)';

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    //below is how to get total of people in database
    let ctx1 = canvas1.getContext("2d");
    let ctx2 = canvas2.getContext("2d");
    let ctx3 = canvas3.getContext("2d");

    let line = 0;
    console.log(data.length);
    
    let allUsers = data.length;
    let userResponseOne = 0;
    let userResponseTwo = 0;
    let userResponseThree = 0;
    let userResponseFour = 0;
    let userResponseFive = 0;
    let userResponseSix = 0;
    let responsePercentage = 0;
    let canvasFill = 0;

    let firstGraphReportOne = 0;
    let firstGraphReportTwo = 0;

    let secondGraphReportOne = 0;
    let secondGraphReportTwo = 0;

    let thirdGraphReportOne = 0;
    let thirdGraphReportTwo = 0;

    let index;

    const graphPercentage = (userResponse) => {
      responsePercentage = 0;
      canvasFill = 0;
      responsePercentage = (userResponse/allUsers)*100;
      canvasFill = 100/responsePercentage;
      percentage = 300/canvasFill
      userResponse = 0;
      responsePercentage = 0;
      canvasFill = 0;
      
      return percentage;
    }


    const graphOneCheck = () => {
      if (data[index].wyrQuestion1 === "3 Feet") {
        userResponseOne ++;
        firstGraphReportOne = graphPercentage(userResponseOne);
      }
      if (data[index].wyrQuestion1 === "3 Hands") {
        userResponseTwo ++;
        firstGraphReportTwo = graphPercentage(userResponseTwo);
      }
  
    }


    const graphTwoCheck = () => {
      if (data[index].wyrQuestion2 === "Taste") {
        userResponseThree ++;
        secondGraphReportOne = graphPercentage(userResponseThree);
      }
      if (data[index].wyrQuestion2 === "Smell") {
        userResponseFour ++;
        secondGraphReportTwo = graphPercentage(userResponseFour);
      }

    }

    
    const graphThreeCheck = () => {
      if (data[index].wyrQuestion3 === "Burn") {
        userResponseFive ++;
        thirdGraphReportOne = graphPercentage(userResponseFive);
      }
      if (data[index].wyrQuestion3 === "Freeze") {
        userResponseSix ++;
        thirdGraphReportTwo = graphPercentage(userResponseSix);
      }
    }

    for (index = 0; index < data.length; index++) {
      // console.log(data[index].wyrQuestion1);
      graphOneCheck();
      graphTwoCheck();
      graphThreeCheck();

    }

    const graphLayout = () => {
      for (i = 0; i < 9; i++) {
        line = line + 30;

        ctx1.beginPath(),
          ctx1.moveTo(line, 0),
          ctx1.lineTo(line, 120),
          ctx1.stroke();
        ctx2.beginPath(),
          ctx2.moveTo(line, 0),
          ctx2.lineTo(line, 120),
          ctx2.stroke();
        ctx3.beginPath(),
          ctx3.moveTo(line, 0),
          ctx3.lineTo(line, 120),
          ctx3.stroke();
      }

      ctx1.beginPath(),
        ctx1.moveTo(0, 120),
        ctx1.lineTo(300, 120),
        ctx1.stroke();
      ctx2.beginPath(),
        ctx2.moveTo(0, 120),
        ctx2.lineTo(300, 120),
        ctx2.stroke();
      ctx3.beginPath(),
        ctx3.moveTo(0, 120),
        ctx3.lineTo(300, 120),
        ctx3.stroke();
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
      ctx1.fillText("3 feet", 60, 140);
      ctx1.fillText("3 hands", 200, 140);

      ctx1.beginPath();
      ctx1.fillStyle = optionOneColor;
      ctx1.fillRect(horizontalOne, Vertical, 10, 10);
      ctx1.fill();

      ctx1.beginPath();
      ctx1.fillStyle = optionTwoColor;
      ctx1.fillRect(horizontalTwo, Vertical, 10, 10);
      ctx1.fill();

      //second graph stuff

      ctx2.font = "15px Arial";

      ctx2.fillText("Taste", 60, 140);
      ctx2.fillText("Smell", 200, 140);

      ctx2.beginPath();
      ctx2.fillStyle = optionOneColor;
      ctx2.fillRect(horizontalOne, Vertical, 10, 10);
      ctx2.fill();

      ctx2.beginPath();
      ctx2.fillStyle = optionTwoColor;
      ctx2.fillRect(horizontalTwo, Vertical, 10, 10);
      ctx2.fill();

      //third graph stuff

      ctx3.font = "15px Arial";

      ctx3.fillText("Burn", 60, 140);
      ctx3.fillText("freeze", 200, 140);

      ctx3.beginPath();
      ctx3.fillStyle = optionOneColor;
      ctx3.fillRect(horizontalOne, Vertical, 10, 10);
      ctx3.fill();

      ctx3.beginPath();
      ctx3.fillStyle = optionTwoColor;
      ctx3.fillRect(horizontalTwo, Vertical, 10, 10);
      ctx3.fill();
    };

    const barGraph = () => {
      barStart = 0;
      barHeightOne = 20;
      barHeightTwo = 70;
      barOneColor = "red";
      barTwoColor = "blue";

      ctx1.beginPath();
      ctx1.fillStyle = barOneColor;
      ctx1.fillRect(barStart, barHeightOne, firstGraphReportOne, 30);
      ctx1.fill();

      ctx1.beginPath();
      ctx1.fillStyle = barTwoColor;
      ctx1.fillRect(barStart, barHeightTwo, firstGraphReportTwo, 30);
      ctx1.fill();

      ctx2.beginPath();
      ctx2.fillStyle = barOneColor;
      ctx2.fillRect(barStart, barHeightOne, secondGraphReportOne, 30);
      ctx2.fill();

      ctx2.beginPath();
      ctx2.fillStyle = barTwoColor;
      ctx2.fillRect(barStart, barHeightTwo, secondGraphReportTwo, 30);
      ctx2.fill();

      ctx3.beginPath();
      ctx3.fillStyle = barOneColor;
      ctx3.fillRect(barStart, barHeightOne, thirdGraphReportOne, 30);
      ctx3.fill();

      ctx3.beginPath();
      ctx3.fillStyle = barTwoColor;
      ctx3.fillRect(barStart, barHeightTwo, thirdGraphReportTwo, 30);
      ctx3.fill();
    };

    graphLayout();
    graphVariables();
    barGraph();
  })
  .catch((err) => console.log(err));