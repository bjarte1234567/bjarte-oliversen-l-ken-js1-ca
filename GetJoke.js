const jokeButton = document.getElementById("joke-button");
      const jokeResult = document.getElementById("joke-result");
    
      jokeButton.addEventListener("click", async () => {
        try {
          jokeResult.textContent = "Loading...";
          let response = await fetch("https://v2.jokeapi.dev/joke/Any");
          let json = await response.json();
    
          jokeResult.textContent = json.joke || json.setup + " " + json.delivery;
        } catch (error) {
          console.error(error);
          alert("An error occurred while fetching the joke");
        }
      });

      //jokeResult.textContent = "Loading..."; written loading.... between each click, before the joke is showing