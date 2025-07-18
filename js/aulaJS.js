function changeStyle() {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("h1").innerText = "Olá Sara";
  document.querySelector("h1").style.color = "white";
}

// let myImage = document.getElementById('unicorn');
// let myH1 = document.getElementById('mainheading');

// console.log(myImage)
// console.log(myH1)

//let doneTodos = document.querySelectorAll('.done')

// let doneTodos = document.getElementsByClassName('done')
// console.log(doneTodos)

// let checkbox = document.querySelector("input[type='checkbox']");
// //let checkbox = document.getElementById('my-input');
// console.log(checkbox)

function changeImg() {
  //seleccionar elemento
  let myImage = document.querySelector("img");

  if (myImage.src == "https://devsprouthosting.com/images/chicken.jpg") {
    //manipular elemento
    myImage.src = "https://devsprouthosting.com/images/egg.jpg";
  } else {
    //manipular elemento
    myImage.src = "https://devsprouthosting.com/images/chicken.jpg";
  }
}

function changeTaste() {
  let pickles = document.querySelector("span");
  pickles.innerText = "yack";
}

function rainbow() {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  //seleccionar todos os elementos span

  let mySpans = document.getElementsByTagName("span");

  let contador = 0;
  for (let element of mySpans) {
    element.style.color = colors[contador];
    contador = contador + 1;
  }

  //no elemento [0] da lista de span colocar colors[0]
  //no elemento [1] da lista de span colocar colors[1]
  //no elemento [2] da lista de span colocar colors[2]
  //..

  //ajuda
  //element.style.backgroundColor = colors[2];
}

function createBtns() {
  let i = 1;

  while (i < 101) {
    //cria um botão
    let newB = document.createElement("button");
    newB.innerText = "Botão" + i;

    //selecciono o pai
    let myParent = document.getElementById("container");
    myParent.appendChild(newB);
    i = i + 1;
  }
}

let myBtn = document.getElementById("hello");

myBtn.addEventListener("mouseout", function () {
  alert("evento mouseout!");
});

myBtn.addEventListener("click", function (event) {
  console.log(event);
  alert("evento click!");
});



window.addEventListener("keydown", function (event) {
    if(event.key == 'a'){
      alert('tecla: '+event.key);
    }else{
      alert('teclada errada!')
    }
 
});
