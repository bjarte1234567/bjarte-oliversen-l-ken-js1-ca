const jokeButtonContainer = document.querySelector(".jokeButton");
let url = "https://v2.jokeapi.dev/joke/Any";

async function apiCaller() {
  try {
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
    details.innerHTML = alert("error", error);
  }
}
apiCaller();

//DETAILS PAGE APICALL

//

const jokesContainer = document.getElementById("jokes-container");

fetch("https://v2.jokeapi.dev/joke/Any")
  .then((response) => response.json())
  .then((data) => {
    const results = Array.isArray(data) ? data : [data];

    results.forEach((joke) => {
      const jokeDiv = document.createElement("div");
      const jokeSetup = document.createElement("p");
      const jokeDelivery = document.createElement("p");

      jokeSetup.textContent = joke.setup;
      jokeDelivery.textContent = joke.delivery;

      jokeDiv.appendChild(jokeSetup);
      jokeDiv.appendChild(jokeDelivery);
      jokesContainer.appendChild(jokeDiv);
    });
  })
  .catch((error) => console.error(error));

//
