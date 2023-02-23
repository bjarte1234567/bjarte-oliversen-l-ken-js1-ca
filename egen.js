

const amountContainer = document.querySelector("#joke-many");
const url = "https://v2.jokeapi.dev/joke/Any?type=twopart&amount=10";

async function callApi() {
  const response = await fetch(url);
  const json = await response.json();

  console.log(json.jokes[0]);
  const results = json.jokes;
  console.log(results);

  results.forEach(function (result) {
    amountContainer.innerHTML += `
      <p class="resultJoke">:${result.id} </p>
      <p class="resultSetup">:${result.setup} </p>
      <p class="resultDelivery">:${result.delivery} </p>
      `;
  });
}
callApi();
