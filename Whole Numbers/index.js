var numberOfLetterButtons = document.querySelectorAll(".myNumbers").length;
for (var i = 0; i < numberOfLetterButtons; i++) {
  document
    .querySelectorAll(".myNumbers")
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
    case "0":
      var num0 = new Audio("/Assets/Sounds/en_num_0.mp3");
      num0.play();
      break;
    case "1":
      var num1 = new Audio("/Assets/Sounds/en_num_01.mp3");
      num1.play();
      break;
    case "2":
      var num2 = new Audio("/Assets/Sounds/en_num_02.mp3");
      num2.play();
      break;
    case "3":
      var num3 = new Audio("/Assets/Sounds/en_num_03.mp3");
      num3.play();
      break;
    case "4":
      var num4 = new Audio("/Assets/Sounds/en_num_04.mp3");
      num4.play();
      break;
    case "5":
      var num5 = new Audio("/Assets/Sounds/en_num_05.mp3");
      num5.play();
      break;
    case "6":
      var num6 = new Audio("/Assets/Sounds/en_num_06.mp3");
      num6.play();
      break;
    case "7":
      var num7 = new Audio("/Assets/Sounds/en_num_07.mp3");
      num7.play();
      break;
    case "8":
      var num8 = new Audio("/Assets/Sounds/en_num_08.mp3");
      num8.play();
      break;
    case "9":
      var num9 = new Audio("/Assets/Sounds/en_num_09.mp3");
      num9.play();
      break;
    case "10":
      var num10 = new Audio("/Assets/Sounds/en_num_10.mp3");
      num10.play();
      break;
    case "11":
      var num11 = new Audio("/Assets/Sounds/en_num_11.mp3");
      num11.play();
      break;
    case "12":
      var num12 = new Audio("/Assets/Sounds/en_num_12.mp3");
      num12.play();
      break;
    case "13":
      var num13 = new Audio("/Assets/Sounds/en_num_13.mp3");
      num13.play();
      break;
    case "14":
      var num14 = new Audio("/Assets/Sounds/en_num_14.mp3");
      num14.play();
      break;
    case "15":
      var num15 = new Audio("/Assets/Sounds/en_num_15.mp3");
      num15.play();
      break;
    case "16":
      var num16 = new Audio("/Assets/Sounds/en_num_16.mp3");
      num16.play();
      break;
    case "17":
      var num17 = new Audio("/Assets/Sounds/en_num_17.mp3");
      num17.play();
      break;
    case "18":
      var num18 = new Audio("/Assets/Sounds/en_num_18.mp3");
      num18.play();
      break;
    case "19":
      var num19 = new Audio("/Assets/Sounds/en_num_19.mp3");
      num19.play();
      break;
    case "20":
      var num20 = new Audio("/Assets/Sounds/en_num_20.mp3");
      num20.play();
      break;
    case "21":
      var num21 = new Audio("/Assets/Sounds/en_num_21.mp3");
      num21.play();
      break;
    case "22":
      var num22 = new Audio("/Assets/Sounds/en_num_22.mp3");
      num22.play();
      break;
    case "23":
      var num23 = new Audio("/Assets/Sounds/en_num_23.mp3");
      num23.play();
      break;
    case "24":
      var num24 = new Audio("/Assets/Sounds/en_num_24.mp3");
      num24.play();
      break;
    case "25":
      var num25 = new Audio("/Assets/Sounds/en_num_25.mp3");
      num25.play();
      break;
    case "26":
      var num26 = new Audio("/Assets/Sounds/en_num_26.mp3");
      num26.play();
      break;
    case "27":
      var num27 = new Audio("/Assets/Sounds/en_num_27.mp3");
      num27.play();
      break;
    case "28":
      var num28 = new Audio("/Assets/Sounds/en_num_28.mp3");
      num28.play();
      break;
    case "29":
      var num29 = new Audio("/Assets/Sounds/en_num_29.mp3");
      num29.play();
      break;
    case "30":
      var num30 = new Audio("/Assets/Sounds/en_num_30.mp3");
      num30.play();
      break;
    case "31":
      var num31 = new Audio("/Assets/Sounds/en_num_31.mp3");
      num31.play();
      break;
    case "32":
      var num32 = new Audio("/Assets/Sounds/en_num_32.mp3");
      num32.play();
      break;
    case "33":
      var num33 = new Audio("/Assets/Sounds/en_num_33.mp3");
      num33.play();
      break;
    case "34":
      var num34 = new Audio("/Assets/Sounds/en_num_34.mp3");
      num34.play();
      break;
    case "35":
      var num35 = new Audio("/Assets/Sounds/en_num_35.mp3");
      num35.play();
      break;
    case "36":
      var num36 = new Audio("/Assets/Sounds/en_num_36.mp3");
      num36.play();
      break;
    case "37":
      var num37 = new Audio("/Assets/Sounds/en_num_37.mp3");
      num37.play();
      break;
    case "38":
      var num38 = new Audio("/Assets/Sounds/en_num_38.mp3");
      num38.play();
      break;
    case "39":
      var num39 = new Audio("/Assets/Sounds/en_num_39.mp3");
      num39.play();
      break;
    case "40":
      var num40 = new Audio("/Assets/Sounds/en_num_40.mp3");
      num40.play();
      break;
    case "41":
      var num41 = new Audio("/Assets/Sounds/en_num_41.mp3");
      num41.play();
      break;
    case "42":
      var num42 = new Audio("/Assets/Sounds/en_num_42.mp3");
      num42.play();
      break;
    case "43":
      var num43 = new Audio("/Assets/Sounds/en_num_43.mp3");
      num43.play();
      break;
    case "44":
      var num44 = new Audio("/Assets/Sounds/en_num_44.mp3");
      num44.play();
      break;
    case "45":
      var num45 = new Audio("/Assets/Sounds/en_num_45.mp3");
      num45.play();
      break;
    case "46":
      var num46 = new Audio("/Assets/Sounds/en_num_46.mp3");
      num46.play();
      break;
    case "47":
      var num47 = new Audio("/Assets/Sounds/en_num_47.mp3");
      num47.play();
      break;
    case "48":
      var num48 = new Audio("/Assets/Sounds/en_num_48.mp3");
      num48.play();
      break;
    case "49":
      var num49 = new Audio("/Assets/Sounds/en_num_49.mp3");
      num49.play();
      break;
    case "50":
      var num550 = new Audio("/Assets/Sounds/en_num_50.mp3");
      num550.play();
      break;
    case "51":
      var num51 = new Audio("/Assets/Sounds/en_num_51.mp3");
      num51.play();
      break;
    case "52":
      var num52 = new Audio("/Assets/Sounds/en_num_52.mp3");
      num52.play();
      break;
    case "53":
      var num53 = new Audio("/Assets/Sounds/en_num_53.mp3");
      num53.play();
      break;
    case "54":
      var num54 = new Audio("/Assets/Sounds/en_num_54.mp3");
      num54.play();
      break;
    case "55":
      var num55 = new Audio("/Assets/Sounds/en_num_55.mp3");
      num55.play();
      break;
    case "56":
      var num56 = new Audio("/Assets/Sounds/en_num_56.mp3");
      num56.play();
      break;
    case "57":
      var num57 = new Audio("/Assets/Sounds/en_num_57.mp3");
      num57.play();
      break;
    case "58":
      var num58 = new Audio("/Assets/Sounds/en_num_58.mp3");
      num58.play();
      break;
    case "59":
      var num59 = new Audio("/Assets/Sounds/en_num_59.mp3");
      num59.play();
      break;
    case "60":
      var num60 = new Audio("/Assets/Sounds/en_num_60.mp3");
      num60.play();
      break;
    case "61":
      var num61 = new Audio("/Assets/Sounds/en_num_61.mp3");
      num61.play();
      break;
    case "62":
      var num62 = new Audio("/Assets/Sounds/en_num_62.mp3");
      num62.play();
      break;
    case "63":
      var num63 = new Audio("/Assets/Sounds/en_num_63.mp3");
      num63.play();
      break;
    case "64":
      var num64 = new Audio("/Assets/Sounds/en_num_64.mp3");
      num64.play();
      break;
    case "65":
      var num65 = new Audio("/Assets/Sounds/en_num_65.mp3");
      num65.play();
      break;
    case "66":
      var num66 = new Audio("/Assets/Sounds/en_num_66.mp3");
      num66.play();
      break;
    case "67":
      var num67 = new Audio("/Assets/Sounds/en_num_67.mp3");
      num67.play();
      break;
    case "68":
      var num68 = new Audio("/Assets/Sounds/en_num_68.mp3");
      num68.play();
      break;
    case "69":
      var num69 = new Audio("/Assets/Sounds/en_num_69.mp3");
      num69.play();
      break;
    case "70":
      var num70 = new Audio("/Assets/Sounds/en_num_70.mp3");
      num70.play();
      break;
    case "71":
      var num71 = new Audio("/Assets/Sounds/en_num_71.mp3");
      num71.play();
      break;
    case "72":
      var num72 = new Audio("/Assets/Sounds/en_num_72.mp3");
      num72.play();
      break;
    case "73":
      var num73 = new Audio("/Assets/Sounds/en_num_73.mp3");
      num73.play();
      break;
    case "74":
      var num74 = new Audio("/Assets/Sounds/en_num_74.mp3");
      num74.play();
      break;
    case "75":
      var num75 = new Audio("/Assets/Sounds/en_num_75.mp3");
      num75.play();
      break;
    case "76":
      var num76 = new Audio("/Assets/Sounds/en_num_76.mp3");
      num76.play();
      break;
    case "77":
      var num77 = new Audio("/Assets/Sounds/en_num_77.mp3");
      num77.play();
      break;
    case "78":
      var num78 = new Audio("/Assets/Sounds/en_num_78.mp3");
      num78.play();
      break;
    case "79":
      var num79 = new Audio("/Assets/Sounds/en_num_79.mp3");
      num79.play();
      break;
    case "80":
      var num80 = new Audio("/Assets/Sounds/en_num_80.mp3");
      num80.play();
      break;
    case "81":
      var num81 = new Audio("/Assets/Sounds/en_num_81.mp3");
      num81.play();
      break;
    case "82":
      var num82 = new Audio("/Assets/Sounds/en_num_82.mp3");
      num82.play();
      break;
    case "83":
      var num33 = new Audio("/Assets/Sounds/en_num_83.mp3");
      num33.play();
      break;
    case "84":
      var num84 = new Audio("/Assets/Sounds/en_num_84.mp3");
      num84.play();
      break;
    case "85":
      var num85 = new Audio("/Assets/Sounds/en_num_85.mp3");
      num85.play();
      break;
    case "86":
      var num86 = new Audio("/Assets/Sounds/en_num_86.mp3");
      num86.play();
      break;
    case "87":
      var num87 = new Audio("/Assets/Sounds/en_num_87.mp3");
      num87.play();
      break;
    case "88":
      var num88 = new Audio("/Assets/Sounds/en_num_88.mp3");
      num88.play();
      break;
    case "89":
      var num89 = new Audio("/Assets/Sounds/en_num_89.mp3");
      num89.play();
      break;
    case "90":
      var num90 = new Audio("/Assets/Sounds/en_num_90.mp3");
      num90.play();
      break;
    case "91":
      var num91 = new Audio("/Assets/Sounds/en_num_91.mp3");
      num91.play();
      break;
    case "92":
      var num92 = new Audio("/Assets/Sounds/en_num_92.mp3");
      num92.play();
      break;
    case "93":
      var num93 = new Audio("/Assets/Sounds/en_num_93.mp3");
      num93.play();
      break;
    case "94":
      var num94 = new Audio("/Assets/Sounds/en_num_94.mp3");
      num94.play();
      break;
    case "95":
      var num95 = new Audio("/Assets/Sounds/en_num_95.mp3");
      num95.play();
      break;
    case "96":
      var num96 = new Audio("/Assets/Sounds/en_num_96.mp3");
      num96.play();
      break;
    case "97":
      var num97 = new Audio("/Assets/Sounds/en_num_97.mp3");
      num97.play();
      break;
    case "98":
      var num98 = new Audio("/Assets/Sounds/en_num_98.mp3");
      num98.play();
      break;
    case "99":
      var num99 = new Audio("/Assets/Sounds/en_num_99.mp3");
      num99.play();
      break;
    case "100":
      var num100 = new Audio("/Assets/Sounds/en_num_100.mp3");
      num100.play();
      break;
    case "ET":
      var ethnant = new Audio("/Assets/Sounds/ETHnantum.mp3");
      ethnant.play();
      break;
    default:
      console.log(innerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
