var numberOfLetterButtons = document.querySelectorAll(".myLetter").length;

for (var i = 0; i < numberOfLetterButtons; i++) {
  document
    .querySelectorAll(".myLetter")
    [i].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(innerHTML);
    });
}

document.addEventListener("keypress", function (Event) {
  makeSound(Event.key);
  buttonAnimation(Event.key);
});

function makeSound(innerHTML) {
  switch (innerHTML) {
    case "A":
      var letterAa = new Audio("/Assets/sounds/a.mp3");
      letterAa.play();
      break;
    case "B":
      var letterB = new Audio("/Assets/sounds/b.mp3");
      letterB.play();
      break;
    case "C":
      var letterC = new Audio("/Assets/sounds/c.mp3");
      letterC.play();
      break;
    case "D":
      var letterD = new Audio("/Assets/sounds/d.mp3");
      letterD.play();
      break;
    case "E":
      var letterE = new Audio("/Assets/sounds/e.mp3");
      letterE.play();
      break;
    case "F":
      var letterF = new Audio("/Assets/sounds/f.mp3");
      letterF.play();
      break;
    case "G":
      var letterG = new Audio("/Assets/sounds/g.mp3");
      letterG.play();
      break;
    case "H":
      var letterH = new Audio("/Assets/sounds/h.mp3");
      letterH.play();
      break;
    case "I":
      var letterI = new Audio("/Assets/sounds/i.mp3");
      letterI.play();
      break;
    case "J":
      var letterJ = new Audio("/Assets/sounds/j.mp3");
      letterJ.play();
      break;
    case "K":
      var letterK = new Audio("/Assets/sounds/k.mp3");
      letterK.play();
      break;
    case "L":
      var letterL = new Audio("/Assets/sounds/l.mp3");
      letterL.play();
      break;
    case "M":
      var letterM = new Audio("/Assets/sounds/m.mp3");
      letterM.play();
      break;
    case "N":
      var letterN = new Audio("/Assets/sounds/n.mp3");
      letterN.play();
      break;
    case "O":
      var letterO = new Audio("/Assets/sounds/o.mp3");
      letterO.play();
      break;
    case "P":
      var letterP = new Audio("/Assets/sounds/p.mp3");
      letterP.play();
      break;
    case "Q":
      var letterQ = new Audio("/Assets/sounds/q.mp3");
      letterQ.play();
      break;
    case "R":
      var letterR = new Audio("/Assets/sounds/r.mp3");
      letterR.play();
      break;
    case "S":
      var letterS = new Audio("/Assets/sounds/s.mp3");
      letterS.play();
      break;
    case "T":
      var letterT = new Audio("/Assets/sounds/t.mp3");
      letterT.play();
      break;
    case "U":
      var letterU = new Audio("/Assets/sounds/u.mp3");
      letterU.play();
      break;
    case "V":
      var letterV = new Audio("/Assets/sounds/v.mp3");
      letterV.play();
      break;
    case "W":
      var letterW = new Audio("/Assets/sounds/w.mp3");
      letterW.play();
      break;
    case "X":
      var letterX = new Audio("/Assets/sounds/x.mp3");
      letterX.play();
      break;
    case "Y":
      var letterY = new Audio("/Assets/sounds/y.mp3");
      letterY.play();
      break;
    case "Z":
      var letterZ = new Audio("/Assets/sounds/z.mp3");
      letterZ.play();
      break;
    case "ET":
      var myET = new Audio("/Assets/sounds/ETHnantum.mp3");
      myET.play();
      break;
    default:
      console.log(innerHTML);
  }
}
//what to do when click detected.

// alert("javascript is working good!");
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
document.activeElement("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll("nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach(navItem.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
