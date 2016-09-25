window.onload = (function() {

  var colorOrder = [];
  var playerPush = "";
  var count = 0;
  var pushCounter = 0;
  var strictOn = false;
  var color;
  var colors = {
    1: 'blue',
    2: 'green',
    3: 'yellow',
    4: 'red'
  }

  //function creating randomColor
  function randomColors() {
    var randomNumber = 0;

    for (i = 0; i < 20; i++) {
      randomNumber = Math.floor((Math.random() * 4) + 1);
      colorOrder.push(colors[randomNumber]);
    }
  }

  // COLLOOORRRSS
  function flashBlueLight() {
    document.getElementById("blue").style.backgroundColor = '#3498DB';
    audio1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
    audio1.play();
  }

  function flashRedLight() {
    document.getElementById("red").style.backgroundColor = '#E74C3C';
    audio2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
    audio2.play();
  }

  function flashYellowLight() {
    document.getElementById("yellow").style.backgroundColor = '#F1C40F';
    audio3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
    audio3.play();
  }

  function flashGreenLight() {
    document.getElementById("green").style.backgroundColor = '#27AE60';
    audio4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
    audio4.play();
  }

  function buzzError () {
    audio5 = new Audio("http://www.soundjay.com/misc/fail-buzzer-01.wav");
    audio5.play();
  }

  function greenLightOff() {
    document.getElementById("green").style.backgroundColor = '#019875';
  }

  function yellowLightOff() {
    document.getElementById("yellow").style.backgroundColor = '#F39C12';
  }

  function redLightOff() {
    document.getElementById("red").style.backgroundColor = '#C0392D';
  }

  function blueLightOff() {
    document.getElementById("blue").style.backgroundColor = '#2980D9';
  }

  // show Colors ------> figuere out to show one by one
  function show() {
    console.log("--------------")
    var pause = 1000;
    console.log("function show:")
    for (i = 0; i < count; i++) {
      var color = colorOrder[i];
      pause += 600;
      console.log("color: " + color);
      if (color == "blue") {
        setTimeout(function() {
          flashBlueLight();
          setTimeout(blueLightOff, 500);
        }, pause);
      } else if (color == 'green') {
        setTimeout(function() {
          flashGreenLight();
          setTimeout(greenLightOff, 500)
        }, pause);
      } else if (color == 'yellow') {
        setTimeout(function() {
          flashYellowLight();
          setTimeout(yellowLightOff, 500);
        }, pause);
      } else if (color == 'red') {
        setTimeout(function() {
          flashRedLight();
          setTimeout(redLightOff, 500);
        }, pause);
      }


    }
    console.log("----------------")
  }

    //change color strict-button
  document.getElementById("strict").addEventListener("click", function () {
      if (strictOn === false) {
      strictOn = true;
      document.getElementById("strict").className = "btn btn-warning";
    } else {
      strictOn = false;
      document.getElementById("strict").className = "btn btn-default";
    }
  });

//

document.getElementById("green").addEventListener("click", function() {playerPush = this.id;flashGreenLight();setTimeout(greenLightOff, 500);user();});
document.getElementById("red").addEventListener("click",  function() {playerPush = this.id;flashRedLight();setTimeout(redLightOff, 500);user();});
document.getElementById("blue").addEventListener("click",  function() {playerPush = this.id;flashBlueLight();setTimeout(blueLightOff, 500);user();});
document.getElementById("yellow").addEventListener("click",  function() {playerPush = this.id;flashYellowLight();setTimeout(yellowLightOff, 500);user();});

  // get User input
  function user() {
    if (playerPush == colorOrder[pushCounter] && pushCounter == count - 1) {
      if (count == 20) {
        alert("Well Done!")
        setTimeout(init, 3000);
      }
      else {
        pushCounter = 0;
        generateGame();
        console.log("yuhe");
      }
    } else if (playerPush == colorOrder[pushCounter]) {
      pushCounter += 1;
      console.log("just+1");
    } else {
      buzzError();
      if (strictOn === true) {
        init();
      } else {
        pushCounter = 0;
        show();
      }
    }
  }

  //function let the gameRun
  function generateGame() {
    console.log("------------")
    console.log("function gameRun");
    playerPush = [];
    //count up
    count += 1;
    document.getElementById("count").innerHTML = count;
    //show color/s
    show();
    console.log("-------------");
  }

  function init() {
    colorOrder = [];
    count = 0;
    randomColors();
    generateGame();
  }

  // start the game
    document.getElementById("start").addEventListener("click",init);

});
