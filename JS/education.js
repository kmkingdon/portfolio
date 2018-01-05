const galvanizeButton= document.getElementById('galvanize');
const galvanizeInfo= document.getElementById('galvanize-info');
const centenaryButton= document.getElementById('centenary');
const centenaryInfo= document.getElementById('centenary-info');
const sjuButton= document.getElementById('galvanize');
const sjuInfo= document.getElementById('sju-info');
const close= document.getElementsByClassName('close');

for (var i = 0; i < select.length; i++) {
  select[i].addEventListener('change', pageRedirect)
};

galvanize.addEventListener('click', displayGalvanize);

function displayGalvanize() {
  galvanizeInfo.style.display = "grid";
  galvanizeInfo.classList.add('bounceInRight');
}

centenary.addEventListener('click', displayCentenary);

function displayCentenary() {
  centenaryInfo.style.display = "grid";
  centenaryInfo.classList.add('bounceInRight');
}

sju.addEventListener('click', displaySju);

function displaySju() {
  sjuInfo.style.display = "grid";
  sjuInfo.classList.add('bounceInRight');
}


for (var i = 0; i < close.length; i++) {
  close[i].addEventListener('click', closeWindow);
}

function closeWindow() {
  galvanizeInfo.classList.remove('bounceInRight');
  galvanizeInfo.style.display = "none";
  centenaryInfo.classList.remove('bounceInRight');
  centenaryInfo.style.display = "none";
  sjuInfo.classList.remove('bounceInRight');
  sjuInfo.style.display = "none";
}
