let randNumberGen = document.getElementById('image');

var randNumber = (Math.floor(Math.random() * (10 - 1) + 1));

const randGen = () => {
    randNumberGen.src = `https://api.adorable.io/avatars/face/eyes${randNumber}/nose${randNumber}/mouth${randNumber}/8e8895/139`;
}

randGen();