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
    case "a":
      var letterAa = new Audio("/Assets/sounds/a.mp3");
      letterAa.play();
      break;
    case "b":
      var letterB = new Audio("/Assets/sounds/b.mp3");
      letterB.play();
      break;
    case "c":
      var letterC = new Audio("/Assets/sounds/c.mp3");
      letterC.play();
      break;
    case "d":
      var letterD = new Audio("/Assets/sounds/d.mp3");
      letterD.play();
      break;
    case "e":
      var letterE = new Audio("/Assets/sounds/e.mp3");
      letterE.play();
      break;
    case "f":
      var letterF = new Audio("/Assets/sounds/f.mp3");
      letterF.play();
      break;
    case "g":
      var letterG = new Audio("/Assets/sounds/g.mp3");
      letterG.play();
      break;
    case "h":
      var letterH = new Audio("/Assets/sounds/h.mp3");
      letterH.play();
      break;
    case "i":
      var letterI = new Audio("/Assets/sounds/i.mp3");
      letterI.play();
      break;
    case "j":
      var letterJ = new Audio("/Assets/sounds/j.mp3");
      letterJ.play();
      break;
    case "k":
      var letterK = new Audio("/Assets/sounds/k.mp3");
      letterK.play();
      break;
    case "l":
      var letterL = new Audio("/Assets/sounds/l.mp3");
      letterL.play();
      break;
    case "m":
      var letterM = new Audio("/Assets/sounds/m.mp3");
      letterM.play();
      break;
    case "n":
      var letterN = new Audio("/Assets/sounds/n.mp3");
      letterN.play();
      break;
    case "o":
      var letterO = new Audio("/Assets/sounds/o.mp3");
      letterO.play();
      break;
    case "p":
      var letterP = new Audio("/Assets/sounds/p.mp3");
      letterP.play();
      break;
    case "q":
      var letterQ = new Audio("/Assets/sounds/q.mp3");
      letterQ.play();
      break;
    case "r":
      var letterR = new Audio("/Assets/sounds/r.mp3");
      letterR.play();
      break;
    case "s":
      var letterS = new Audio("/Assets/sounds/s.mp3");
      letterS.play();
      break;
    case "t":
      var letterT = new Audio("/Assets/sounds/t.mp3");
      letterT.play();
      break;
    case "u":
      var letterU = new Audio("/Assets/sounds/u.mp3");
      letterU.play();
      break;
    case "v":
      var letterV = new Audio("/Assets/sounds/v.mp3");
      letterV.play();
      break;
    case "w":
      var letterW = new Audio("/Assets/sounds/w.mp3");
      letterW.play();
      break;
    case "x":
      var letterX = new Audio("/Assets/sounds/x.mp3");
      letterX.play();
      break;
    case "y":
      var letterY = new Audio("/Assets/sounds/y.mp3");
      letterY.play();
      break;
    case "z":
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
