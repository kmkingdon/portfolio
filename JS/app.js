const footer= document.getElementById('footer');
let scrollHeight = document.body.scrollHeight
let windowHeight = window.innerHeight
console.log(scrollHeight);
console.log(windowHeight);

window.addEventListener('scroll', moveFooter);

function moveFooter() {
  let scrollTop = window.scrollY
  // footer.style.bottom= scrollHeight;

  var rect = footer.getBoundingClientRect();
  console.log(rect.bottom);

  if(rect.bottom >= windowHeight + .5){
    footer.classList.remove('hidden');
    footer.classList.remove('footer');
    footer.classList.add('footer-absolute')
    footer.style.bottom = "0px"
  } else if(rect.bottom < windowHeight + .5 ) {
    footer.classList.remove('hidden');
    footer.classList.remove('footer-absolute');
    footer.classList.add('footer')
    footer.style.bottom= scrollHeight- (scrollTop*2) + "px";
  }
}
