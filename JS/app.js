const footer= document.getElementById('footer');
const body= document.querySelector('body');
const arrow= document.getElementById('arrow');
const nav= document.querySelector('nav');
const logo= document.getElementById('logo');

let scrollHeight = document.body.scrollHeight
let windowHeight = window.innerHeight



window.addEventListener('scroll', moveFooter);

function moveFooter() {
  let scrollTop = window.scrollY;
  let rect = footer.getBoundingClientRect();

  if(rect.bottom >= windowHeight + .5){
    footer.classList.remove('hidden');
    footer.classList.remove('footer');
    footer.classList.add('footer-absolute')
    body.style.height= "100vh";
  } else if(rect.bottom < windowHeight + .5 ) {
    footer.classList.remove('hidden');
    footer.classList.add('footer')
    footer.style.bottom= scrollHeight- (scrollTop*2) + "px";
  }

  if(body.style.height === "100vh") {
    footer.style.bottom = "0px";
    arrow.classList.add('fadeOut')
    arrow.classList.add('hidden');


    let contacts= footer.childNodes;
    for (var i = 1; i < contacts.length; i+=2) {
      contacts[i].classList.remove('hidden');
      contacts[i].classList.add('fadeIn');
    }

    let navLinks= nav.childNodes;
    for (var i = 1; i < navLinks.length; i+=2) {
      navLinks[i].classList.remove('hidden');
      navLinks[i].classList.add('fadeIn');
    }
  }
}

window.addEventListener('scroll', moveBanner);

function  moveBanner(){
  let scrollTop = window.scrollY
  console.log(scrollTop);
  let rect= logo.getBoundingClientRect();
  logo.style.left = rect.left - (scrollTop/400) + "px";
  let width= logo.style.width= 25 - (scrollTop/500) + "rem";
  console.log(width);
}
