const select = document.querySelectorAll('select');

for (var i = 0; i < select.length; i++) {
  select[i].addEventListener('change', pageRedirect)
};

function pageRedirect (event) {
  let target = event.target.value
  switch (target) {
    case 'projects':
      window.location.href = 'projects.html';
      break;

    case 'education':
      window.location.href = 'education.html';
      break;

    case 'website':
      window.open('https://kingdonarts.com');
      break;

    case 'experience':
      window.location.href = 'experience.html';
      break;

    case 'curriculum':
      window.open('https://www.teacherspayteachers.com/Store/Middle-School-Science-Through-Inquiry');
      break;

    default:
      break;
  }
  for (var i = 0; i < select.length; i++) {
    select[i].selectedIndex = 0;
  }
}

const mymap = L.map('mapid').setView([37.4622811, -90.8285365], 5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap);

const appleIcon = L.icon({
    iconUrl: '/assets/apple.png',
    shadowUrl: '/assets/appleshadow.png',
    iconSize:     [40, 40],
    shadowSize:   [40, 40],
    iconAnchor:   [20, 20],
    shadowAnchor: [10, 25],
    popupAnchor:  [10, -20]
})

let dps= L.marker([39.7054555,-104.9051918], {icon: appleIcon, riseOnHover:true}).addTo(mymap);
dps.bindPopup("<b>Denver Public Schools</b><br>2013-2017</br><br>Science Teacher/Department Head/School Technology Resource/Coach/Mentor Teacher</br><br>As a science teacher, I strived to combine inquiry-based activities and balanced instruction to inspire a future generation of scientists. I also served as the Science Department Head. In the past, I have developed and produced a blended learning online curriculum program for Literacy, Math, and Science for students to practice and develop basic skills. I also have served as a coach and mentor to help develop teaching skills in student teachers and my peers.</br>");

let pinots= L.marker([39.7917543,-105.0529232], {icon: appleIcon, riseOnHover:true}).addTo(mymap);
pinots.bindPopup("<b>Pinot's Palette Highlands</b><br>2015-Present</br><br>Artist Instructor, Customer Service</br><br>I currently work as an art instructor for Pinot’s Palette Highlands. I teach 2 to 3 hour painting classes creating a fun and entertaining environment for our customers. I also create my own original pieces of art to teach, work as a bartender, and address various customer service needs.</br>");

let caddo= L.marker([32.5013909,-93.7418572], {icon: appleIcon}).addTo(mymap);
caddo.bindPopup("<b>Caddo Parish Schools</b><br>2009-2013</br><br>Science Teacher/Department Head/Technology Lead</br><br>I served as a sixth and seventh grade science teacher in Caddo Parish Schools. I worked in the district's technology program and created a one-to-one iPad classroom. I also worked as a teacher leader to help develop the use of technology at my school. I also built connections within the community by hosting multiple guest speakers and developing a relationship with Norton Art Gallery in a Robotics and Art summer program.</br>");

let nyc= L.marker([40.8030988,-73.9169397], {icon: appleIcon}).addTo(mymap);
nyc.bindPopup("<b>St. Luke's School</b><br>2008-2009</br><br>Science Teacher/Writing Teacher</br><br>I served as a seventh grade teacher at St. Luke’s. I taught seventh grade ELA and Vocabulary and eighth grade ELA, Earth Science, and Health. Besides teaching 94 children I have also developed a reward field trip program, organized a school play, and developed several interactive projects for my students.</br>");
