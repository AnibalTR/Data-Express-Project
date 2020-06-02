let url = 'http://localhost:3000/api';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById('json_holder').innerHTML = `${data[1].name}, ${data[1].age}, ${data[1].species}`;
  })
  .catch(err => console.log(err));