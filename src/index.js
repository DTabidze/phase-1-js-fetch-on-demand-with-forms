const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        // or >>  event.target.children[1].value;
        fetch("http://localhost:3000/movies")
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
          const input = document.querySelector("input#searchByID").value;
          //console.log(input);
          let movieExists = false;          
          data.forEach(element => {
            // console.log(element.id);
            // console.log(input);

            if (element.id == input) {
                //console.log(element);
                title.innerText = element.title;
                summary.innerText = element.summary;
                movieExists = true;
            }
          });  
          if (movieExists === false) {
            alert("No such ID in Movie DB!!!");
          }
        //   title.innerText = data.title;
        //   summary.innerText = data.summary;          
        })
          // LOG: (3) [{…}, {…}, {…}]
               
    });
  
}

document.addEventListener('DOMContentLoaded', init);