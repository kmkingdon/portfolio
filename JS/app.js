const footer = document.getElementById("footer");
const body = document.querySelector("body");
const arrow = document.getElementById("arrow");
const nav = document.querySelector("nav");
const logo = document.getElementById("logo");
const name = document.getElementById("name");
const banner = document.getElementsByClassName("banner")[0];

let scrollHeight = document.body.scrollHeight;
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
let logoPosition = logo.getBoundingClientRect();
let namePosition = name.getBoundingClientRect();

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(f) {
    setTimeout(f, 1000 / 60);
  };

if (windowWidth > 1024) {
  window.addEventListener("scroll", moveFooter);
}

function moveFooter() {
  let scrollTop = window.scrollY;
  let rect = footer.getBoundingClientRect();

  if (rect.bottom >= windowHeight + 0.5) {
    footer.classList.remove("hidden");
    footer.classList.remove("footer");
    footer.classList.add("footer-absolute");
    body.style.height = "100vh";
    body.style.overflow = "hidden";
  } else if (rect.bottom < windowHeight + 0.5) {
    footer.classList.remove("hidden");
    footer.classList.add("footer");
    footer.style.bottom = scrollHeight - scrollTop * 2 + "px";
  }

  if (body.style.height === "100vh") {
    footer.style.bottom = "0px";
    arrow.classList.add("fadeOut");
    arrow.classList.add("hidden");

    let contacts = footer.childNodes;
    for (var i = 1; i < contacts.length; i += 2) {
      contacts[i].classList.remove("hidden");
      contacts[i].classList.add("fadeIn");
    }

    nav.style.display = "flex";
  }
}

if (windowWidth > 1024) {
  window.addEventListener(
    "scroll",
    function() {
      requestAnimationFrame(moveBanner);
    },
    false
  );
}

function moveBanner() {
  let scrollTop = window.pageYOffset;
  let lwidth = logoPosition.width / 16;
  let nameBottom = name.getBoundingClientRect();
  if (scrollTop != 0) {
    let left = (logo.style.left = logoPosition.left - scrollTop * 0.24 + "px");
    logo.style.width = lwidth - scrollTop * 0.004 + "rem";
    logo.style.marginTop = scrollTop * 0.002 + "rem";
    name.style.top = -(scrollTop * 0.17) + "px";
    name.style.right = namePosition.left - scrollTop * 0.09 + "px";
  } else if (scrollTop === 0 && nameBottom.bottom < 300) {
    banner.classList.remove("banner");
    banner.classList.add("banner-final");
    banner.classList.add("flipInX");
    logo.style.left = "110px";
    name.style.top = "-260px";
    name.style.right = "80px";
  }
}
