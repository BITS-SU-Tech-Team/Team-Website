var work = document.getElementsByClassName("work");
var content = document.getElementsByClassName("content")[0];
var links = document.getElementsByClassName("bring-link");
var span = document.getElementsByClassName("hand");
document.body.style.overflowY = "hidden";
document.body.style.overflowX = "hidden";

window.addEventListener("load", function() {
  document.getElementsByClassName("loader-container")[0].style.display = "none";
  work[0].classList.add("active");
  document.body.style.overflowY = "scroll";
  setTimeout(function() {
    work[1].classList.add("active1");
  }, 500);
  setTimeout(function() {
    work[2].classList.add("active2");
  }, 1000);
  document.getElementsByClassName("vector-img")[0].style.opacity = "1";
  document.getElementsByClassName("logo")[0].style.opacity = "1";
});

function scaleup() {
  content.style.transform = "scale(1.1)";
}

function scaledown() {
  content.style.transform = "scale(1)";
}

function bringp2() {
  if (
    document.getElementsByClassName("project-name")[0].innerHTML == "Project 2"
  ) {
    return;
  }
  document.getElementsByClassName("color-div")[0].style.height = "50px";
  document.getElementsByClassName("color-div")[0].style.width = "50px";
  document.getElementsByClassName("color-div")[0].style.marginTop = "24px";
  document.getElementsByClassName("color-div")[0].style.marginLeft = "85%";
  document.getElementsByClassName("color-div")[0].style.borderRadius = "50%";
  links[1].style.transform = "scale(1.1)";
  links[0].style.opacity = "0";
  links[2].style.opacity = "0";
  links[3].style.opacity = "0";
  setTimeout(function() {
    document.getElementsByClassName("project-name")[0].style.color = "#c60f7b";
  }, 300);
  setTimeout(function() {
    document.getElementsByClassName("project-bio")[0].style.left = "-100vw";
    document.getElementsByClassName("project-bio")[0].style.opacity = "0";
    document.getElementsByClassName("project-name")[0].style.left = "-100vw";
    document.getElementsByClassName("project-name")[0].style.opacity = "0";
  }, 600);
  setTimeout(function() {
    document.getElementsByClassName("color-div")[0].style.background =
      "#E81A4B";
    document.getElementsByClassName("project-name")[0].innerHTML = "Project 2";
    document.getElementsByClassName("project-name")[0].style.color = "white";
  }, 1000);
  setTimeout(function() {
    document.getElementsByClassName("color-div")[0].style.height = "100%";
    document.getElementsByClassName("color-div")[0].style.width = "100%";
    document.getElementsByClassName("color-div")[0].style.margin = "0 0 0 0";
    document.getElementsByClassName("color-div")[0].style.borderRadius = "0";
    document.getElementsByClassName("project-bio")[0].style.left = "50%";
    document.getElementsByClassName("project-bio")[0].style.opacity = "1";
    document.getElementsByClassName("project-name")[0].style.left = "50%";
    document.getElementsByClassName("project-name")[0].style.opacity = "1";
    links[1].style.transform = "scale(1)";
    links[0].style.opacity = "1";
    links[2].style.opacity = "1";
    links[3].style.opacity = "1";
  }, 1200);
}

function bringp1() {
  if (
    document.getElementsByClassName("project-name")[0].innerHTML == "Project 1"
  ) {
    return;
  }
  document.getElementsByClassName("color-div")[0].style.height = "50px";
  document.getElementsByClassName("color-div")[0].style.width = "50px";
  document.getElementsByClassName("color-div")[0].style.marginTop = "24px";
  document.getElementsByClassName("color-div")[0].style.marginLeft = "85%";
  document.getElementsByClassName("color-div")[0].style.borderRadius = "50%";
  links[0].style.transform = "scale(1.1)";
  links[1].style.opacity = "0";
  links[2].style.opacity = "0";
  links[3].style.opacity = "0";
  setTimeout(function() {
    document.getElementsByClassName("project-name")[0].style.color = "#c60f7b";
  }, 300);
  setTimeout(function() {
    document.getElementsByClassName("project-bio")[0].style.left = "-100vw";
    document.getElementsByClassName("project-bio")[0].style.opacity = "0";
    document.getElementsByClassName("project-name")[0].style.left = "-100vw";
    document.getElementsByClassName("project-name")[0].style.opacity = "0";
  }, 600);
  setTimeout(function() {
    document.getElementsByClassName("color-div")[0].style.background =
      "#FFCF4E";
    document.getElementsByClassName("project-name")[0].innerHTML = "Project 1";
    document.getElementsByClassName("project-name")[0].style.color = "white";
  }, 1000);
  setTimeout(function() {
    document.getElementsByClassName("color-div")[0].style.height = "100%";
    document.getElementsByClassName("color-div")[0].style.width = "100%";
    document.getElementsByClassName("color-div")[0].style.margin = "0 0 0 0";
    document.getElementsByClassName("color-div")[0].style.borderRadius = "0";
    document.getElementsByClassName("project-bio")[0].style.left = "50%";
    document.getElementsByClassName("project-bio")[0].style.opacity = "1";
    document.getElementsByClassName("project-name")[0].style.left = "50%";
    document.getElementsByClassName("project-name")[0].style.opacity = "1";
    links[0].style.transform = "scale(1)";
    links[1].style.opacity = "1";
    links[2].style.opacity = "1";
    links[3].style.opacity = "1";
  }, 1200);
}

function bringp3() {
  if (
    document.getElementsByClassName("project-name")[0].innerHTML == "Project 3"
  ) {
    return;
  }
  document.getElementsByClassName("color-div")[0].style.height = "50px";
  document.getElementsByClassName("color-div")[0].style.width = "50px";
  document.getElementsByClassName("color-div")[0].style.marginTop = "24px";
  document.getElementsByClassName("color-div")[0].style.marginLeft = "85%";
  document.getElementsByClassName("color-div")[0].style.borderRadius = "50%";
  links[2].style.transform = "scale(1.1)";
  links[1].style.opacity = "0";
  links[0].style.opacity = "0";
  links[3].style.opacity = "0";
  setTimeout(function() {
    document.getElementsByClassName("project-name")[0].style.color = "#c60f7b";
  }, 300);
  setTimeout(function() {
    document.getElementsByClassName("project-bio")[0].style.left = "-100vw";
    document.getElementsByClassName("project-bio")[0].style.opacity = "0";
    document.getElementsByClassName("project-name")[0].style.left = "-100vw";
    document.getElementsByClassName("project-name")[0].style.opacity = "0";
  }, 600);
  setTimeout(function() {
    document.getElementsByClassName("color-div")[0].style.background =
      "#0083CA";
    document.getElementsByClassName("project-name")[0].innerHTML = "Project 3";
    document.getElementsByClassName("project-name")[0].style.color = "white";
  }, 1000);
  setTimeout(function() {
    document.getElementsByClassName("color-div")[0].style.height = "100%";
    document.getElementsByClassName("color-div")[0].style.width = "100%";
    document.getElementsByClassName("color-div")[0].style.margin = "0 0 0 0";
    document.getElementsByClassName("color-div")[0].style.borderRadius = "0";
    document.getElementsByClassName("project-bio")[0].style.left = "50%";
    document.getElementsByClassName("project-bio")[0].style.opacity = "1";
    document.getElementsByClassName("project-name")[0].style.left = "50%";
    document.getElementsByClassName("project-name")[0].style.opacity = "1";
    links[2].style.transform = "scale(1)";
    links[1].style.opacity = "1";
    links[0].style.opacity = "1";
    links[3].style.opacity = "1";
  }, 1200);
}

function bringp4() {
  if (
    document.getElementsByClassName("project-name")[0].innerHTML == "Project 4"
  ) {
    return;
  }
  document.getElementsByClassName("color-div")[0].style.height = "50px";
  document.getElementsByClassName("color-div")[0].style.width = "50px";
  document.getElementsByClassName("color-div")[0].style.marginTop = "24px";
  document.getElementsByClassName("color-div")[0].style.marginLeft = "85%";
  document.getElementsByClassName("color-div")[0].style.borderRadius = "50%";
  links[3].style.transform = "scale(1.1)";
  links[1].style.opacity = "0";
  links[0].style.opacity = "0";
  links[2].style.opacity = "0";
  setTimeout(function() {
    document.getElementsByClassName("project-name")[0].style.color = "#c60f7b";
  }, 300);
  setTimeout(function() {
    document.getElementsByClassName("project-bio")[0].style.left = "-100vw";
    document.getElementsByClassName("project-bio")[0].style.opacity = "0";
    document.getElementsByClassName("project-name")[0].style.left = "-100vw";
    document.getElementsByClassName("project-name")[0].style.opacity = "0";
  }, 600);
  setTimeout(function() {
    document.getElementsByClassName("color-div")[0].style.background =
      "#FF8C00";
    document.getElementsByClassName("project-name")[0].innerHTML = "Project 4";
    document.getElementsByClassName("project-name")[0].style.color = "white";
  }, 1000);
  setTimeout(function() {
    document.getElementsByClassName("color-div")[0].style.height = "100%";
    document.getElementsByClassName("color-div")[0].style.width = "100%";
    document.getElementsByClassName("color-div")[0].style.margin = "0 0 0 0";
    document.getElementsByClassName("color-div")[0].style.borderRadius = "0";
    document.getElementsByClassName("project-bio")[0].style.left = "50%";
    document.getElementsByClassName("project-bio")[0].style.opacity = "1";
    document.getElementsByClassName("project-name")[0].style.left = "50%";
    document.getElementsByClassName("project-name")[0].style.opacity = "1";
    links[3].style.transform = "scale(1)";
    links[1].style.opacity = "1";
    links[0].style.opacity = "1";
    links[2].style.opacity = "1";
  }, 1200);
}

// **************************************-sidenav-*********************************//

var isMenuOpen = 0;
var isMenuOpen2 = 0;

function navbar() {
  if (isMenuOpen == 0) {
    for (var i = 0; i < 3; i++) {
      document.getElementsByClassName("hand")[i].style.backgroundColor =
        "white";
    }
    document.getElementsByClassName("sidenav")[0].style.transform =
      "translateY(0vh)";
    document.getElementsByClassName("hand")[0].style.transform =
      "rotate(45deg)";
    document.getElementsByClassName("hand")[1].style.transform =
      "translateX(-80vw)";
    document.getElementsByClassName("hand")[2].style.transform =
      "rotate(-45deg)";
    document.body.style.overflowY = "hidden";
    isMenuOpen = 1;
  } else if (isMenuOpen == 1) {
    for (var i = 0; i < 3; i++) {
      document.getElementsByClassName("hand")[i].style.backgroundColor =
        "white";
    }
    document.getElementsByClassName("sidenav")[0].style.transform =
      "translateY(-100vh)";
    document.getElementsByClassName("hand")[0].style.transform =
      "translateY(-1vh) rotate(0deg)";
    document.getElementsByClassName("hand")[1].style.transform =
      "translateX(0vw)";
    document.getElementsByClassName("hand")[2].style.transform =
      "translateY(1vh) rotate(0deg)";
    document.body.style.overflowY = "scroll";
    isMenuOpen = 0;
  }
}

function navbarx() {
  if (isMenuOpen2 == 0) {
    for (var i = 0; i < 3; i++) {
      document.getElementsByClassName("handx")[i].style.backgroundColor =
        "black";
    }
    document.getElementsByClassName("sidenavx")[0].style.width = "100vw";
    document.getElementsByClassName("sidenavx")[0].style.height = "100%";
    document.getElementsByClassName("sidenavx")[0].style.opacity = "1";
    document.getElementsByClassName("sidenavx")[0].style.zIndex = "7";

    document.getElementsByClassName("sidenavx")[0].style.borderRadius = "0";
    document.getElementsByClassName("handx")[0].style.transform =
      "rotate(45deg)";
    document.getElementsByClassName("handx")[1].style.opacity = "0";
    document.getElementsByClassName("handx")[2].style.transform =
      "rotate(-45deg)";
    document.body.style.overflowY = "hidden";
    isMenuOpen2 = 1;
  } else if (isMenuOpen2 == 1) {
    for (var i = 0; i < 3; i++) {
      document.getElementsByClassName("handx")[i].style.backgroundColor =
        "white";
    }
    document.getElementsByClassName("sidenavx")[0].style.opacity = "0";
    setTimeout(function() {
      document.getElementsByClassName("sidenavx")[0].style.width = "750px";
      document.getElementsByClassName("sidenavx")[0].style.height = "750px";
      document.getElementsByClassName("handx")[1].style.zIndex = "-11";

      document.getElementsByClassName("sidenavx")[0].style.borderRadius = "50%";
    }, 500);
    document.getElementsByClassName("handx")[0].style.transform =
      "translateY(-1vh) rotate(0deg)";
    document.getElementsByClassName("handx")[1].style.opacity = "1";

    document.getElementsByClassName("handx")[2].style.transform =
      "translateY(1vh) rotate(0deg)";
    document.body.style.overflowY = "scroll";
    isMenuOpen2 = 0;
  }
}

function closenav() {
  for (var i = 0; i < 3; i++) {
    document.getElementsByClassName("hand")[i].style.backgroundColor = "white";
  }
  document.getElementsByClassName("sidenav")[0].style.transform =
    "translateY(-100vh)";
  document.getElementsByClassName("hand")[0].style.transform =
    "translateY(-1vh) rotate(0deg)";
  document.getElementsByClassName("hand")[1].style.transform =
    "translateX(0vw)";
  document.getElementsByClassName("hand")[2].style.transform =
    "translateY(1vh) rotate(0deg)";
  document.body.style.overflow = "scroll";
}

function closenavx() {
  for (var i = 0; i < 3; i++) {
    document.getElementsByClassName("handx")[i].style.backgroundColor = "white";
  }
  setTimeout(function() {
    document.getElementsByClassName("sidenavx")[0].style.width = "750px";
    document.getElementsByClassName("sidenavx")[0].style.height = "750px";
    document.getElementsByClassName("sidenavx")[0].style.borderRadius = "50%";
  }, 500);
  document.getElementsByClassName("sidenavx")[0].style.opacity = "0";
  document.getElementsByClassName("handx")[0].style.transform =
    "translateY(-1vh) rotate(0deg)";
  document.getElementsByClassName("handx")[1].style.opacity = "1";
  document.getElementsByClassName("handx")[2].style.transform =
    "translateY(1vh) rotate(0deg)";
  document.body.style.overflowY = "scroll";
}

// **************************************-function to add background images-*********************************//

var pic = document.getElementsByClassName("pic");
var mob_pic = document.getElementsByClassName("mob-pic");
let pic_array = [
  "AbhishekGaur.jpg",
  "MokshGarg.jpg",
  "NayanKhanna.jpg",
  "RohitKBhardwaj.jpg"
];

let i = 0;
while (pic[i] != null) {
  pic[i].style.backgroundImage = "url('src/" + pic_array[i] + "')";
  mob_pic[i].style.backgroundImage = "url('src/" + pic_array[i] + "')";
  i++;
}

function liftup() {
  pic[0].style.transform = "scale(1.1)";
}

function liftdown() {
  pic[0].style.transform = "scale(1)";
}
