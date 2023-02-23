fetch("https://v2.jokeapi.dev/joke/Any?idRange=115")
  .then((response) => response.json())
  .then((data) => console.log(data));
