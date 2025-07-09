// let myImagem = document.getElementById('banner');
// console.log(myImagem)

// let myPs = document.getElementsByTagName("p");
// console.log(myPs);

//vai buscar todos os elemntos com a class square
// let myImages = document.getElementsByClassName("square");
// console.log(myImages);

// //vai buscar o primeiro elemento da classe .square
// let mySqImg = document.querySelector(".square");
// console.log(mySqImg);

// //vai buscar todos os elementos da tag img
// let mySqImgA = document.querySelectorAll("img");
// console.log(mySqImgA);

function translatePT() {
  //seleccção
  let myH1 = document.querySelector("h1");
  let myContent = document.getElementById("mw-toc-heading");

  //manipular o texto
  myH1.innerText = "Galinhas de Seda";
  myContent.innerText = "Conteúdos";
}

function changeAtt() {
  let myImageBanner = document.getElementById("banner");
  myImageBanner.src =
    "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia11604/a-galinha-domestica-e-suas-principais-racas-comerciais-cpt11.jpg";
}

function darkMode() {
  let body = document.querySelector("body");
  let myPs = document.querySelectorAll("p");

  if (body.style.backgroundColor == "white") {
    body.style.backgroundColor = "black";

    for (let element of myPs) {
      element.style.color = "white";
    }
  } else {
    body.style.backgroundColor = "white";

    for (let element of myPs) {
      element.style.color = "black";
    }
  }
}

function changeLisBG() {
  //selecionar
  let myLis = document.getElementsByClassName("toclevel-1");
  console.log(myLis);

  //alternativa
  //document.querySelectorAll('.toclevel-1');
  //manipular
  for (let element of myLis) {
    if (element.style.backgroundColor == "green") {
      element.style.backgroundColor = "white";
    } else {
      element.style.backgroundColor = "green";
    }
  }
}

function login() {
  //criar o elemento p e img
  const newP = document.createElement("p");
  const newImage = document.createElement("img");

  //no novo paragrafo definir o texto
  newP.innerText = "Olá Sara";
  newImage.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/250px-User_icon_2.svg.png";

  //seleccionar o elemento pai
  let myParent = document.getElementById("myParent");

  //dar o elemento criado como filho da div
  myParent.appendChild(newP);
  myParent.appendChild(newImage);
}

function addText() {
  //seleccionar
  let myH2 = document.querySelector("h1");

  //manipular
  myH2.append(" are awesome!");
}
