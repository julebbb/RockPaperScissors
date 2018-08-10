var pseudo = document.getElementsByTagName("input")[0];
var buttonName = document.getElementsByTagName('input')[1];
var userName = document.getElementById("userName");
var score = document.getElementById('score');
var userChoice = document.getElementsByClassName('choice');
var changeImg = document.getElementsByTagName('img')[1];
console.log(userChoice);
buttonName.addEventListener("click", gameBegin);

function gameBegin() {
  userName.innerHTML = pseudo.value;
  userName.parentNode.style.borderRadius = "0";
  score.style.display = "block";
  document.getElementById("gameBegin").style.width = "15%";
  document.getElementsByTagName("form")[0].style.display = "none";
  document.getElementsByTagName('img')[0].style.display = "none";
}


for (let i = 0; i < userChoice.length; i++) {
  userChoice[i].addEventListener("click", function() {
    game(this);
  });
}

function game(choice) {
  var computerChoiceName = ['rock', 'paper', 'scissors'];
  // var computerChoice = computerChoiceName[Math.floor(Math.random() * computerChoiceName.length)];
  var computerChoice = ''

  console.log(choice.id);
  if ((computerChoice === 'rock' && choice.id === 'scissors') ||  (computerChoice === "paper" && choice.id === 'rock')) {
    changeImg.src = "img/folamiRock.gif";
    changeImg.alt = "folami fais pierre et gagne";
  } else if (computerChoice === 'scissors' && choice.id === 'paper') {
    changeImg.src = "img/folamiScissors.gif";
    changeImg.alt = "folami fais ciseaux et gagne";

  } {
    console.log("mou");
  }
}
