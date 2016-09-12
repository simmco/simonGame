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
  var background = {
      'blue': '#4679BD',
      'red': '#CC0000',
      'yellow': '#FFFF00',
      'green': '#66CC00'
    }
    //flashing background
  var backgroundFlash = {
    'blue': '#30588e',
    'red': '#990000',
    'yellow': '#CCCC00',
    'green': '#339900'
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
    document.getElementById("blue").style.backgroundColor = '#4679BD';
    audio1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
    audio1.play();
  }

  function flashRedLight() {
    document.getElementById("red").style.backgroundColor = '#CC0000';
    audio2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
    audio2.play();
  }

  function flashYellowLight() {
    document.getElementById("yellow").style.backgroundColor = '#FFFF00';
    audio3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
    audio3.play();
  }

  function flashGreenLight() {
    document.getElementById("green").style.backgroundColor = '#66CC00';
    audio4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
    audio4.play();
  }

  function greenLightOff() {
    document.getElementById("green").style.backgroundColor = '#339900';
  }

  function yellowLightOff() {
    document.getElementById("yellow").style.backgroundColor = '#CCCC00';
  }

  function redLightOff() {
    document.getElementById("red").style.backgroundColor = '#990000';
  }

  function blueLightOff() {
    document.getElementById("blue").style.backgroundColor = '#30588e';
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

  $('#strict').click(function() {
    if (strictOn === false) {
      strictOn = true;
    } else {
      strictOn = false;
    }
  })

  $("#green, #blue, #yellow, #red").click(function() {
    playerPush = this.id;
    if (this.id == "green") {
      flashGreenLight();
    } else if (this.id == "red") {
      flashRedLight();
    } else if (this.id == "blue") {
      flashBlueLight();
    } else if (this.id == "yellow") {
      flashYellowLight();
    }
    user();
  })

  // get User input
  function user() {
    if (playerPush == colorOrder[pushCounter] && pushCounter == count - 1) {
      pushCounter = 0;
      generateGame();
      console.log("yuhe");
      if (count == 20) {
        alert("Well Done!")
        setTimeout(init, 3000);
      }
    } else if (playerPush == colorOrder[pushCounter]) {
      pushCounter += 1;
      console.log("just+1");
    } else {
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
  $("#start").click(function() {
    init();
  });
});
