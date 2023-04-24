const form = document.querySelector("form");
const modal = document.getElementById("myModal");
const content = document.getElementById("modal-content");
const close = document.getElementById("close");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const surname = document.getElementById("surname").value.trim();
  const age = document.getElementById("age").value.trim();

  if (name === "" || surname === "" || age === "") {
    alert("Заполните все поля");
    return;
  }

  content.textContent = `Имя: ${name}\nФамилия: ${surname}\nВозраст: ${age}`;
  modal.style.display = "block";
});

close.addEventListener("click", () =>{
    modal.style.display = "none";
});
