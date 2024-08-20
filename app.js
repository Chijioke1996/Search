const search = document.querySelector(".search");
const grid = document.querySelector(".grid");
const container = document.querySelector(".container");
const template = document.querySelector(".template");

let users = []
search.addEventListener("input", (e) => {
     const typed = e.target.value
    users.forEach((user) => {
        const isVisible = user.name.toLowerCase().includes(typed) || user.email.toLowerCase().includes(typed)
        user.element.classList.toggle("hide", !isVisible)
    })
     
    
})

const url = "https://fake-json-api.mock.beeceptor.com/users";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
     users = data.map((user) => {
      const card = template.content.cloneNode(true).children[0];
      const name = card.querySelector(".para1");
      const email = card.querySelector(".para2");

      name.textContent = user.name;
      email.textContent = user.email;

      grid.append(card);
      return {name: user.name, email: user.email, element: card}
      
    });
  })
  .catch((err) => console.error(err));
