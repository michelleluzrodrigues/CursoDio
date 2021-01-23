const cat = document.querySelector('.cat');
const background = document.querySelector('.background');
let isJumping = false;
let dog;
let position = 0;
let runCat;
var imgArray = new Array();
var imgArrayDog = new Array();
var imgArrayCat = new Array();


imgArray[0] = "url('img/Run(1).png')";

imgArray[1] = "url('img/Run(2).png')";

imgArray[2] = "url('img/Run(3).png')";

imgArray[3] = "url('img/Run(4).png')";

imgArray[4] = "url('img/Run(5).png')";

imgArray[5] = "url('img/Run(6).png')";

imgArray[6] = "url('img/Run(7).png')";

imgArray[7] = "url('img/Run(8).png')";

imgArrayDog[0] = "url('img/Walk(1).png')";

imgArrayDog[1] = "url('img/Walk(2).png')";

imgArrayDog[2] = "url('img/Walk(3).png')";

imgArrayDog[3] = "url('img/Walk(4).png')";

imgArrayDog[4] = "url('img/Walk(5).png')";

imgArrayDog[5] = "url('img/Walk(6).png')";

imgArrayDog[6] = "url('img/Walk(7).png')";

imgArrayDog[7] = "url('img/Walk(8).png')";

imgArrayCat[0] = "url('img/Jump(1).png')";

imgArrayCat[1] = "url('img/Jump(2).png')";

imgArrayCat[2] = "url('img/Jump(3).png')";

imgArrayCat[3] = "url('img/Jump(4).png')";

imgArrayCat[4] = "url('img/Jump(5).png')";

imgArrayCat[5] = "url('img/Jump(6).png')";

imgArrayCat[6] = "url('img/Jump(7).png')";

imgArrayCat[7] = "url('img/Jump(8).png')";

var cont = 0;

function handleKeyDown(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  isJumping = true;
  let contJump = 0;

  let upInterval = setInterval(() => {
    clearInterval(runCat);
    cat.style.backgroundImage = imgArrayCat[contJump];

    if (position >= 150) {
      clearInterval(upInterval);

      //Descendo
      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
          alteraCat();
        } else {
          position -= 20;
          cat.style.bottom = position + 'px';
          if (contJump > 0) {
            contJump -= 1;

          }
        }
      }, 20);
    } else {
      //subindo
      position += 20;
      cat.style.bottom = position + 'px';
      if (contJump < 8) {
        contJump += 1;
      }
    }
  }, 20);
}

function createDog() {
  const dogP = document.createElement('div');
  let dogPosition = 1000;
  let randomTime = Math.random() * (5000 - 1000) + 1000;

  dogP.classList.add('dogP');
  dogP.style.left = 1000 + 'px';
  background.appendChild(dogP);
  dog = document.querySelector('.dogP');

  let leftInterval = setInterval(() => {
    if (dogPosition <-60) {
      clearInterval(leftInterval);
      background.removeChild(dogP); // remove o elemento filho, no caso tartaruga
    } else if (dogPosition > 0 && dogPosition < 60 && position < 60) {
      //Game over
      clearInterval(leftInterval);
      document.body.innerHTML = '<h1 class = "game-over">Fim de jogo</h1>';
    } else {
      dogPosition -= 10; // velocidade que se move para esquerda
      dogP.style.left = dogPosition + 'px';
    }
  }, 50);
  //executa uma determinada função depois de um determinado tempo
  setTimeout(createDog, randomTime); // recursividade
}

function alteraCat() {
  runCat = setInterval(() => {
    cat.style.backgroundImage = imgArray[cont];

    if (cont == imgArray.length) {
      cont = 0;
    } else {
      cont += 1;
    }
  }, 50);
}

function alteraDog() {
  setInterval(() => {
    if (dog != null) {
      dog.style.backgroundImage = imgArrayDog[cont];

    }

    if (cont == imgArray.length) {
      cont = 0;
    } else {
      cont += 1;
    }
  }, 50);
}

createDog();
alteraCat();

document.addEventListener('keydown', handleKeyDown);