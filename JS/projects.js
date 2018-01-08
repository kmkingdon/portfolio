const projectContainer = document.getElementById("project-container");

const projects = [
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
    name: "ConvoPro",
    image: "assets/convopro-logo.png",
    description:
      "Random question generator that enhances conversations with abilities to toggle question intimacy level and nsfw version.",
    tech: "Express, Node.js, JavaScript, HTML, CSS",
    website: "https://convo-pro.firebaseapp.com",
    git: "https://github.com/kmkingdon/convo-pro-front"
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
    name: "ConvoPro",
    image: "assets/convopro-logo.png",
    description:
      "Random question generator that enhances conversations with abilities to toggle question intimacy level and nsfw version.",
    tech: "Express, Node.js, JavaScript, HTML, CSS",
    website: "https://convo-pro.firebaseapp.com",
    git: "https://github.com/kmkingdon/convo-pro-front"
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
