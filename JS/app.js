const footer = document.getElementById('footer');
const body = document.querySelector('body');
const arrow = document.getElementById('arrow');
const nav = document.querySelector('nav');
const logo = document.getElementById('logo');
const name= document.getElementById('name');
const banner= document.getElementsByClassName('banner')[0];

let scrollHeight = document.body.scrollHeight;
let windowHeight = window.innerHeight;
let logoPosition= logo.getBoundingClientRect();
let namePosition= name.getBoundingClientRect();


window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}

window.addEventListener('scroll', moveFooter);

function moveFooter() {
  let scrollTop = window.scrollY;
  let rect = footer.getBoundingClientRect();

  if (rect.bottom >= windowHeight + .5) {
    footer.classList.remove('hidden');
    footer.classList.remove('footer');
    footer.classList.add('footer-absolute')
    body.style.height = "100vh";
    body.style.overflow= "hidden";
  } else if (rect.bottom < windowHeight + .5) {
    footer.classList.remove('hidden');
    footer.classList.add('footer')
    footer.style.bottom = scrollHeight - (scrollTop * 2) + "px";
  }

  if (body.style.height === "100vh") {
    footer.style.bottom = "0px";
    arrow.classList.add('fadeOut')
    arrow.classList.add('hidden');


    let contacts = footer.childNodes;
    for (var i = 1; i < contacts.length; i += 2) {
      contacts[i].classList.remove('hidden');
      contacts[i].classList.add('fadeIn');
    }

    let navLinks = nav.childNodes;
    for (var i = 1; i < navLinks.length; i += 2) {
      navLinks[i].classList.remove('hidden');
      navLinks[i].classList.add('fadeIn');
    }
  }
}

window.addEventListener('scroll', function(){
 requestAnimationFrame(moveBanner)
}, false)

function moveBanner() {
  let scrollTop = window.pageYOffset;

  if (scrollTop != 0) {
    logo.style.left =logoPosition.left - (scrollTop * .24)+ 'px';
    logo.style.width= 25 - (scrollTop * .004)+ 'rem';
    logo.style.marginTop= (scrollTop * .002)+ 'rem';
    name.style.top= -(scrollTop * .17)+ "px";
    let right= name.style.right= namePosition.left-(scrollTop * .09)+ "px";
    console.log(right);
  } else if (scrollTop === 0) {
    banner.classList.remove('banner');
    banner.classList.add('banner-final');
    name.style.top= "-258.06px";
    name.style.rigth= "80.825625px";
  }
}
