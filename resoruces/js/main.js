/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const bgs = [
  "https://cdn.discordapp.com/attachments/926172814220857395/1076248489010413609/IMG_4202.jpg",
 
];

function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(bgs[rand(0, bgs.length)]);
// this next line could be wrong, check w3schools or something for "window.onload"
window.onload = (e) => {
  // inside the query selector should be whatever the css selector for it is
  // for example: changing the background of an image with the class of 'fortnite', use '.fortnite' in the querySelector
  document.querySelector("html").style.height = "100%";
  document.querySelector("html").style.backgroundRepeat = "not-repeat";
  document.querySelector("html").style.backgroundPosition = "center";
  document.querySelector("html").style.backgroundSize = "cover";
  document.querySelector("html").style.backgroundImage = `url(${
    bgs[rand(0, bgs.length)]
  })`;
};



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

