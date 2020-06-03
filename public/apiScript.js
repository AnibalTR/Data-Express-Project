let url = "http://localhost:3000/api";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    //below is how to get total of people in database
    console.log(data.length);

    let red = 0;
    let blue = 0;
    let index;
    for (index = 0; index < data.length; index++) {
      console.log(data[index].wyrQuestion1);
      if (data[index].wyrQuestion1 === "3 Feet") {
        red = red + 30;
      }
      if (data[index].wyrQuestion1 === "3 Hands") {
        blue = blue + 30;
      }
    }
    // console.log(data);
    // document.getElementById(
    //   "json_holder"
    // ).innerHTML = `${data[1].wyrQ1}, ${data[1].age}, ${data[1].species}`;
    //use the section above to update canvas graph
  })
  .catch((err) => console.log(err));
