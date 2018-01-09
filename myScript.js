/* !Date: 19.12.2017 Copyright ©2017 JavaScript Code by Cătălin Anghel-Ursu @Madness2aMaze (https://codepen.io/Madness2aMaze)
- All Rights Reserved!

MIT License

Copyright (c) 2017 Cătălin Anghel-Ursu (https://github.com/Madness2aMaze/Tic-Tac-Toe-Web-Game)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

$(document).ready(function() {
  var uiDisplay = $(".display"),
      uiCenter = $(".s-circle"),
      uiOuter = $(".l-circle"),
      uiSwitch = $(".switch"),
      uiStrict = $(".strict"),
      uiFooter = $(".footer"),
      uiPlayBox = $(".play-box"),
      uiPlay = $(".play"),
      uiStart = $(".start"),      
      uiLevel = $(".level"),
      uiOnOff = $(".knob"),
      uiGreen = $(".green"),
      uiYlow = $(".yellow"),
      uiBlue = $(".blue"),
      uiRed = $(".red"),
      strict = false,
      on = false,
      level = 1;

  level = level < 10 ? "0" + level : level;

  uiPlay.addClass("color-me"); //add a 4 color animation on the play button

  //starts the game wich in turn starts a couple of animations
  uiPlay.click(function() {
    uiPlay.css("transform", "scale(1.2, 1.2)");
    uiPlay.css("opacity", ".5");    

    setTimeout(function() {
      uiPlayBox.css("display", "none");
      uiOuter.css("display", "block");      
    }, 100);

    setTimeout(function() {
      uiGreen.addClass("visible");
    }, 500);

    setTimeout(function() {
      uiRed.addClass("visible");
    }, 600);

    setTimeout(function() {
      uiYlow.addClass("visible");
    }, 700);

    setTimeout(function() {
      uiBlue.addClass("visible");
    }, 800);

    setTimeout(function() {
      uiCenter.addClass("zoom-in");
      uiCenter.removeClass("invisible");
      uiOuter.removeClass("invisible");
      uiFooter.css("display", "block");
      uiFooter.addClass("visible");
    }, 1000);

    setTimeout(function() {
      uiOuter.css("box-shadow", "inset 0px 0px 50px -20px rgba(0, 0, 0, 1)");
    }, 1500);
  });

  //function for checking if the strict mode is on or off
  uiStrict.click(function isStrict() {
    if (strict) {
      uiStrict.addClass("str-on");
      strict = false;
    } else {
      uiStrict.removeClass("str-on");
      strict = true;
    }
  });
  
  function toggleOffToOn() {
    on = true;
    strict = true;
    uiLevel.html("..");
    pushedPads = [];
    uiLevel.removeClass("zoom-in");
    uiSwitch.css("background", "#91e842");
    uiOnOff.removeClass("slide-l");
    uiOnOff.addClass("slide-r");
    uiDisplay.removeClass("invisible");
    if (on) {
      uiStart.click(function() {
        //level = 1;
        uiLevel.addClass("zoom-in");
        uiLevel.html(level);
      });
    }
    $(this).one("click", toggleOnToOff);    
  }
  
  function toggleOnToOff() {
    on = false;
    strict = false;
    pushedPads = [];
    uiLevel.html("..");
    uiLevel.removeClass("zoom-in");
    uiSwitch.css("background", "#f44242");
    uiOnOff.removeClass("slide-r");
    uiOnOff.addClass("slide-l");
    uiDisplay.addClass("invisible");
    uiStrict.removeClass("str-on");
    $(this).one("click", toggleOffToOn);
  }
  uiSwitch.one("click", toggleOffToOn);

  
});

var pushedPads = [];
function userInput(el) {
  pushedPads.push(el);
  console.log(pushedPads);
}


