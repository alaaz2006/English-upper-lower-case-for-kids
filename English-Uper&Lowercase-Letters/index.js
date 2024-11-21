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

function makeSound(innerHTML) {
  switch (innerHTML) {
    case "Aa":
      var letterAa = new Audio("/Assets/sounds/a.mp3");
      letterAa.play();
      break;
    case "Bb":
      var letterB = new Audio("/Assets/sounds/b.mp3");
      letterB.play();
      break;
    case "Cc":
      var letterC = new Audio("/Assets/sounds/c.mp3");
      letterC.play();
      break;
    case "Dd":
      var letterD = new Audio("/Assets/sounds/d.mp3");
      letterD.play();
      break;
    case "Ee":
      var letterE = new Audio("/Assets/sounds/e.mp3");
      letterE.play();
      break;
    case "Ff":
      var letterF = new Audio("/Assets/sounds/f.mp3");
      letterF.play();
      break;
    case "Gg":
      var letterG = new Audio("/Assets/sounds/g.mp3");
      letterG.play();
      break;
    case "Hh":
      var letterH = new Audio("/Assets/sounds/h.mp3");
      letterH.play();
      break;
    case "Ii":
      var letterI = new Audio("/Assets/sounds/i.mp3");
      letterI.play();
      break;
    case "Jj":
      var letterJ = new Audio("/Assets/sounds/j.mp3");
      letterJ.play();
      break;
    case "Kk":
      var letterK = new Audio("/Assets/sounds/k.mp3");
      letterK.play();
      break;
    case "Ll":
      var letterL = new Audio("/Assets/sounds/l.mp3");
      letterL.play();
      break;
    case "Mm":
      var letterM = new Audio("/Assets/sounds/m.mp3");
      letterM.play();
      break;
    case "Nn":
      var letterN = new Audio("/Assets/sounds/n.mp3");
      letterN.play();
      break;
    case "Oo":
      var letterO = new Audio("/Assets/sounds/o.mp3");
      letterO.play();
      break;
    case "Pp":
      var letterP = new Audio("/Assets/sounds/p.mp3");
      letterP.play();
      break;
    case "Qq":
      var letterQ = new Audio("/Assets/sounds/q.mp3");
      letterQ.play();
      break;
    case "Rr":
      var letterR = new Audio("/Assets/sounds/r.mp3");
      letterR.play();
      break;
    case "Ss":
      var letterS = new Audio("/Assets/sounds/s.mp3");
      letterS.play();
      break;
    case "Tt":
      var letterT = new Audio("/Assets/sounds/t.mp3");
      letterT.play();
      break;
    case "Uu":
      var letterU = new Audio("/Assets/sounds/u.mp3");
      letterU.play();
      break;
    case "Vv":
      var letterV = new Audio("/Assets/sounds/v.mp3");
      letterV.play();
      break;
    case "Ww":
      var letterW = new Audio("/Assets/sounds/w.mp3");
      letterW.play();
      break;
    case "Xx":
      var letterX = new Audio("/Assets/sounds/x.mp3");
      letterX.play();
      break;
    case "Yy":
      var letterY = new Audio("/Assets/sounds/y.mp3");
      letterY.play();
      break;
    case "Zz":
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
