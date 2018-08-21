//Take the first input and the second
var pseudo = document.getElementsByTagName("input")[0];
var buttonName = document.getElementsByTagName('input')[1];

//Take the span with the id userName
var userName = document.getElementById("userName");
var replyComputer = document.getElementsByTagName('h4')[0];
//Take h2 with the id score
var score = document.getElementById('score');

//Take img with class choice
var userChoice = document.getElementsByClassName('choice');

//Take img from the game
var changeImg = document.getElementsByTagName('img')[1];

//Take sections
var gameBeginSection = document.getElementsByTagName("section")[0];
var gameStartSection = document.getElementsByTagName("section")[1];
var gameEndSection = document.getElementsByTagName("section")[2];

//Make gameEndSection disapear
gameEndSection.style.display = 'none';

var userResult = 0;
var computerResult = 0;

buttonName.addEventListener("click", gameBegin);

//Fuction for move section
function gameBegin() {

  if (pseudo.value === "") {
    pseudo.style.border = "solid 1px red";
    pseudo.style.boxShadow = "1px 1px 7px red";
    pseudo.placeholder = "Veuillez remplir ce champs";
  } else {
    //Add in userName the value of the input
    userName.innerHTML = pseudo.value;
    score.parentNode.style.borderRadius = "0";
    //Make display score
    score.style.display = "block";
    document.getElementsByTagName('p')[0].style.display = "none";
    document.getElementsByTagName('h1')[0].style.display = "none";


    if (window.innerWidth < 900 ) {
      score.parentNode.style.padding = "0";
      score.parentNode.style.width = "100%";
      score.style.fontSize = "1rem";

      //Change height to section game begin if window < 900px
      document.getElementById("gameBegin").style.height = "50px";
      document.getElementById("gameBegin").style.width = "100%";
      document.getElementsByTagName("form")[0].style.display = "none";
      document.getElementsByTagName('img')[0].style.display = "none";

    } else {

      //Change width to section game begin if window > 900px
      document.getElementById("gameBegin").style.width = "15%";
      document.getElementsByTagName("form")[0].style.display = "none";
      document.getElementsByTagName('img')[0].style.display = "none";

      if (pseudo.value.length < 5) {

        //That for score and userName not in even line
        userName.style.display = "block";

      }

    }
  }


}

//For repete click action
for (let i = 0; i < userChoice.length; i++) {

  userChoice[i].addEventListener("click", function() {

    game(this);

  });
}

function game(choice) {

  var computerChoiceName = ['rock', 'paper', 'scissors'];
  var computerChoice = computerChoiceName[Math.floor(Math.random() * computerChoiceName.length)];

  //Computer win
  if (computerChoice === 'rock' && choice.id === 'scissors') {

    changeImg.src = "img/folamiRockWin.gif";
    changeImg.alt = "Folami fais pierre et gagne";
    replyComputer.innerHTML = "Hi hi hi ! Je t'ai eu !"

    computerResult++;

  } else if (computerChoice === 'scissors' && choice.id === 'paper') {

    changeImg.src = "img/folamiScissorsWin.gif";
    changeImg.alt = "Folami fais ciseaux et gagne";
    replyComputer.innerHTML = "Hi hi hi ! Je t'ai eu !"

    computerResult++;

  } else if (computerChoice === 'paper' && choice.id === 'rock') {

    changeImg.src = "img/folamiPaperWin.gif";
    changeImg.alt = "Folami fais papier et gagne";
    replyComputer.innerHTML = "Hi hi hi ! Je t'ai eu !"

    computerResult++;
  }
  //Computer lose
  else if (computerChoice === 'paper' && choice.id === 'scissors') {

    changeImg.src = "img/folamiPaperLose.gif";
    changeImg.alt = "Folami fais papier et perd";
    replyComputer.innerHTML = "Oh non ! Tu m'as eu !"

    userResult++;

  } else if (computerChoice === 'scissors' && choice.id === 'rock') {

    changeImg.src = "img/folamiScissorsLose.gif";
    changeImg.alt = "Folami fais ciseaux et perd";
    replyComputer.innerHTML = "Oh non ! Tu m'as eu !"

    userResult++;

  } else if (computerChoice === 'rock' && choice.id === 'paper') {

    changeImg.src = "img/folamiRockLose.gif";
    changeImg.alt = "Folami fais pierre et perd";
    replyComputer.innerHTML = "Oh non ! Tu m'as eu !"

    userResult++;

  }
  //Computer and User are both
  else if (computerChoice === 'rock' && choice.id === 'rock') {

    changeImg.src = "img/folamiRockEgal.gif";
    changeImg.alt = "Vous êtes a égalité";
    replyComputer.innerHTML = "Ah ah ! on a pareil !"


  } else if (computerChoice === 'scissors' && choice.id === 'scissors') {

    changeImg.src = "img/folamiScissorsEgal.gif";
    changeImg.alt = "Vous êtes a égalité";
    replyComputer.innerHTML = "Ah ah ! on a pareil !"

  } else if (computerChoice === 'paper' && choice.id === 'paper') {

    changeImg.src = "img/folamiPaperEgal.gif";
    changeImg.alt = "Vous êtes a égalité";
    replyComputer.innerHTML = "Ah ah ! on a pareil !"

  }

  score.innerHTML = "<span>Score:</span> " + pseudo.value + " " + userResult + " Folami " + computerResult;

  //If user win three times
  if (userResult === 3) {

    gameBeginSection.style.display = "none";
    gameStartSection.style.display = "none";

    gameEndSection.style.display = 'flex';

    //Change text in p from section end
    document.getElementsByTagName('h2')[1].innerHTML = "Oh non ! Tu as gagné !";
    document.getElementsByClassName('endImg')[0].src = "img/folamiLose.gif";

  } else if (computerResult === 3) {
    //If computer win three times


    gameBeginSection.style.display = "none";
    gameStartSection.style.display = "none";

    gameEndSection.style.display = 'flex';

    //Change text in p from section end
    document.getElementsByTagName('h2')[1].innerHTML = "Ouiii ! Je t'ai eu ! Revanche ?";
    document.getElementsByClassName('endImg')[0].src = "img/folamiWin.gif";

  }

}
