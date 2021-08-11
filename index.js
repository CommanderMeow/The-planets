function outsideButton() {

  var x = document.querySelectorAll(".planet-internal");
  for (var i = 0; i < x.length; i += 1) {
    x[i].style.display = "none";
  };

  var y = document.querySelectorAll(".planet-outside");
  for (var i = 0; i < x.length; i += 1) {
    y[i].style.display = "block";
  };

  var z = document.querySelectorAll(".planet-geo");
  for (var i = 0; i < x.length; i += 1) {
    z[i].style.display = "none";
  };
}

function internalButton() {
  var x = document.querySelectorAll(".planet-internal");
  for (var i = 0; i < x.length; i += 1) {
    x[i].style.display = "block";
  };

  var y = document.querySelectorAll(".planet-outside");
  for (var i = 0; i < x.length; i += 1) {
    y[i].style.display = "none";
  };

  var z = document.querySelectorAll(".planet-geo");
  for (var i = 0; i < x.length; i += 1) {
    z[i].style.display = "none";
  };
}




function geoButton() {
    var x = document.querySelectorAll(".planet-internal");
    for (var i = 0; i < x.length; i += 1) {
      x[i].style.display = "none";
    };

    var y = document.querySelectorAll(".planet-outside");
      y[1].style.display = "none";


    var y = document.querySelectorAll(".planet-outside");
      y[0].style.display = "block";


    var z = document.querySelectorAll(".planet-geo");
    for (var i = 0; i < x.length; i += 1) {
      z[i].style.display = "block";
    };
  }

  function hamburger() {
    var x = document.querySelector(".nav__ul");

    if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  }
