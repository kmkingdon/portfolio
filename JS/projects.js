const projectContainer = document.getElementById("project-container");

const projects = [
  {
    name: "Portfolio Website",
    image: "assets/kingdonlogo.png",
    description:
      "JavaScript powered website featuring my work as a developer, artist, and educator.",
    tech: "SASS, Leaflet.js, JavaScript, HTML",
    website: "https://kmkingdon.info",
    git: "https://github.com/kmkingdon/portfolio"
  },
  {
    name: "ConvoPro",
    image: "assets/convopro-logo.png",
    description:
      "Random question generator that enhances conversations with abilities to toggle question intimacy level and nsfw version.",
    tech: "Express, Node.js, JavaScript, HTML, CSS",
    website: "https://convo-pro.firebaseapp.com",
    git: "https://github.com/kmkingdon/convo-pro-front"
  },
  {
    name: "Magical Network",
    image: "assets/magical-network.png",
    description:
      "Fan based Harry Potter themed social network application that includes a comment wall, various search features, and profile creation.",
    tech: "Knex.js, Postgres, Handlebars, HTML, JavaScript, SASS",
    website: "https://hpsocialnetwork.herokuapp.com",
    git: "https://github.com/kmkingdon/harrypottersocialnetwork"
  },
  {
    name: "Goal Tracker",
    image: "assets/goaltrackerlogo.png",
    description:
      "Student/teacher platform for data tracking, data visualization, smart goal creation based on data, and teacher review.",
    tech: "React.js, Chart.js, Knex.js, Postgres, SASS",
    website: "https://goaltrackerstudentprogress.herokuapp.com ",
    git: "https://github.com/kmkingdon/goal-tracker-react"
  },
  {
    name: "Readativity",
    image:"assets/readativity.png" ,
    description:
    "A reading application combining curated content based on interest and statistic tracking to improve reading performance.",
    tech: "React.js, Chart.js, Knex.js, Postgres, Styled Components",
    website: "https://readativity-app.herokuapp.com",
    git: "https://github.com/Readativity/Frontend"
  },
  {
    name: "Denver Walking Tours",
    image:"assets/walking.jpg" ,
    description:
    "Mobile React Redux demo app showing four walking tours around Denver.",
    tech: "React.js, Redux.js, Google Maps API, Knex.js, Postgres, Styled Components",
    website: "https://walkingtoursdenver.herokuapp.com/",
    git: "https://github.com/kmkingdon/denver-walking-tours"
  },
  {
    name: "The Tipping Point",
    image:"assets/tippingpoint.png" ,
    description:
    "D3 visualization centering on the story of the Port Arthur massacre in Australia and how it relates to the contemporary gun control debate.",
    tech: "D3, TopoJSON, C3, Leaflet.js, Snap.svg",
    website: "https://the-tipping-point-d3.firebaseapp.com/",
    git: "https://github.com/collinsbj/D3-Gun-Data"
  }
];

function populateProjects(array) {
  for (var i = 0; i < array.length; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    let title = document.createElement("h1");
    title.innerHTML = array[i].name;
    box.appendChild(title);
    let info = document.createElement("div");
    info.classList.add("info");
    let logo = document.createElement("img");
    logo.src = array[i].image;
    logo.id = "logo";
    info.appendChild(logo);
    let description = document.createElement("p");
    description.innerHTML = array[i].description;
    description.id = "describe";
    info.appendChild(description);
    let tech = document.createElement("p");
    tech.innerHTML = array[i].tech;
    tech.id = "tech";
    info.appendChild(tech);
    let link = document.createElement("a");
    link.href = array[i].website;
    link.target = "_blank";
    link.innerHTML = "Link to Deployed Project";
    link.id = "link";
    info.appendChild(link);
    let git = document.createElement("a");
    git.href = array[i].git;
    git.target = "_blank";
    git.innerHTML = "Link to GitHub Repo";
    git.id = "git";
    info.appendChild(git);
    box.appendChild(info);
    projectContainer.appendChild(box);
  }
}

populateProjects(projects);
