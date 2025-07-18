function learned() {
  //seleccionar
  let myH6 = document.querySelector("h6");
  let myLis = document.querySelectorAll("li");

  //manipular
  myH6.style.backgroundColor = "green";

  for (let element of myLis) {
    element.append("-aprendido");
  }
}

// function project() {
//   let myProject = prompt("qual é o seu projecto?");

//   //seleccionar
//   let myBtn = document.getElementById("project");

//   //manipular
//   myBtn.innerText = myProject;
// }

//solução tirando o JS do html
//seleccionar
let myBtn = document.getElementById("project");
let myH6 = document.querySelector("h6");

function eventAction () {
  let myProject = prompt("qual é o seu projecto?");

  //manipular
  myBtn.innerText = myProject;
}


myBtn.addEventListener("click", eventAction);
myH6.addEventListener("click", eventAction)