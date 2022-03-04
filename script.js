window.addEventListener("load", () => {
    const count = document.querySelector('.count');
    const button = document.querySelector(".button");
    

    button.addEventListener("click", (e) => {
        e.preventDefault();

    const word = document.getElementById('input').value;
    const count = word.length;
    const output = document.getElementById('output')

    if (!word) {
        alert("Please fill out the area");
        
      }
      else{
        output.innerHTML = `<h1>${count}</h1>`
      }
      return;

    });
   
  });
  






});
