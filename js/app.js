const apiKey = "d2545d22-0ae5-4fd8-b805-8135912d09c0";


async function getMovieData(e) {
      e.preventDefault();
  
      const userInput = $('input[type="text"]').val();
      const apiKey = "ffee1909";
      const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${userInput}`;
  
      const response = await fetch(url);
      const data = await response.json();
  
      $("#title").html(data.Title);
      $("#year").html(data.Year);
      $("#rated").html(data.Rated);
  }
  
  $("form").on("submit", getMovieData);
  