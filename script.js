/**
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function(){
      var buttonInnerhtml = this.innerHTML;

      pianoSounds(buttonInnerhtml);
  });
}
**/
document.addEventListener("keypress", function(event){
  pianoSounds(event.key);
});

function pianoSounds(key){
  switch (key) {
      case "a":
        var c = new Audio("sounds/C.mp3");
                c.play();
      break;
      case "w":
          var cSharp = new Audio("sounds/C_sharp.mp3");
                  cSharp.play();
      break;
      case "s":
          var d = new Audio("sounds/D.mp3");
                  d.play();
      break;
      case "e":
          var dSharp = new Audio("sounds/D_sharp.mp3");
                  dSharp.play();
      break;
      case "d":
          var e = new Audio("sounds/E.mp3");
                  e.play();
      break;
      case "f":
          var f = new Audio("sounds/F.mp3");
                  f.play();
      break;
      case "t":
          var fSharp = new Audio("sounds/F_sharp.mp3");
                  fSharp.play();
      break;
      case "g":
          var g = new Audio("sounds/G.mp3");
                  g.play();
      break;
      case "y":
          var gSharp = new Audio("sounds/G_sharp.mp3");
                  gSharp.play();
      break;
      case "h":
          var a = new Audio("sounds/A.mp3");
                  a.play();
      break;
      case "u":
          var aSharp = new Audio("sounds/A_sharp.mp3");
                  aSharp.play();
      break;
      case "j":
          var b = new Audio("sounds/B.mp3");
                  b.play();
      break;
      case "k":
          var c = new Audio("sounds/C_octave.mp3");
                  c.play();
      break;

    default: console.log(buttonInnerhtml);

  }
}
/**
  function pianokeysAimation(currentKey){
    var keyAnimation = document.querySelector("piano").classList.add("clicked");

    setTimeout(function(){keyAnimation.classList.remove("clicked");}, 100);
  }
**/
