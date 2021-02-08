// ------------------------------------------------------------------
// navbar link ------------------------------------------------------
const navLinks = document.querySelector("#nav-links");
const navArrow = document.querySelector("#nav-arrow");

const resizeWindowEvent = (elementLink) => {
  window.addEventListener("resize", () => {
    arrowStyle(elementLink);

    if (window.innerWidth > 768) {
      navLinks.classList.add("menu-mobile-aux");
    } else if (window.innerWidth <= 768) {
      navLinks.classList.remove("menu-mobile-aux");
    }
  });
};

const arrowStyle = (elementLink) => {
  const elementBound = elementLink.getBoundingClientRect();
  const styleTop =
    (elementBound.bottom + elementBound.top - navArrow.offsetHeight) / 2;
  const styleLeft = elementBound.right + 10;

  navArrow.style.transform = `translate(${styleLeft}px, ${styleTop}px)`;
};

const setupArrow = (elementLink) => {
  elementLink.classList.add("active-link");
  arrowStyle(elementLink);
  resizeWindowEvent(elementLink);
};

const linkStyle = (e) => {
  const elementTag = e.target.parentElement.tagName;
  const childrenList = navLinks.children;

  let elementLink = "";
  if (elementTag === "svg") {
    elementLink = e.target.parentElement.parentElement.parentElement;
  } else if (elementTag === "A") {
    elementLink = e.target.parentElement.parentElement;
  } else if (elementTag === "LI") {
    elementLink = e.target.parentElement;
  } else {
    return null;
  }

  for (let child of childrenList) {
    child.classList.remove("active-link");
  }

  setupArrow(elementLink);
};

navLinks.addEventListener("click", (e) => {
  linkStyle(e);
});

// move arrow to it's place
setTimeout(() => {
  setupArrow(navLinks.firstElementChild);
  navArrow.style.opacity = "1";
}, 500);

const scrollArrow = (windowScreenPos) => {
  //const headerH1 = document.querySelector("#header-h1").getBoundingClientRect().top;
  const projectsH2 =
    document.querySelector("#projects-h2").getBoundingClientRect().top +
    window.scrollY;
  const profileH2 =
    document.querySelector("#profile-h2").getBoundingClientRect().top +
    window.scrollY;
  const contactH2 =
    document.querySelector("#contact-h2").getBoundingClientRect().top +
    window.scrollY;

  const handleLinkClick = (word) => {
    const navLinkToClick = document.querySelector(`#nav-${word}-link`);
    navLinkToClick.href = "#!";
    navLinkToClick.click();
    navLinkToClick.href = `#${word}`;
  };

  if (windowScreenPos < projectsH2) {
    handleLinkClick("header");
  } else if (projectsH2 <= windowScreenPos && windowScreenPos < profileH2) {
    handleLinkClick("projects");
  } else if (profileH2 <= windowScreenPos && windowScreenPos < contactH2) {
    handleLinkClick("profile");
  } else {
    handleLinkClick("contact");
  }
};

let lockScroll = false;
window.addEventListener("scroll", () => {
  if (!lockScroll) {
    lockScroll = true;
    let scrollHeight =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    scrollArrow(scrollHeight + window.innerHeight / 2);
  } else {
    setTimeout(() => (lockScroll = false), 350);
  }
});

// ------------------------------------------------------------------
// navbar burg-menu -------------------------------------------------
const navBurg = document.querySelector("#nav-burg");

const burgStyle = () => {
  navBurg.classList.toggle("burg-animation");
  navLinks.classList.toggle("menu-mobile-active");
};

navBurg.addEventListener("click", burgStyle);

// ------------------------------------------------------------------
// projects section -------------------------------------------------
const info = [
  {
    id: 0,
    name: "API-project",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus neque, tincidunt vel varius in, placerat quis ligula. Integer purus nibh, fermentum vel gravida vel, aliquet sit amet velit.",
    tec: [
      {
        name: "html 5",
        key: 0,
      },
      {
        name: "css 3",
        key: 1,
      },
      {
        name: "javascript",
        key: 2,
      },
      {
        name: "sass",
        key: 3,
      },
      {
        name: "api",
        key: 4,
      },
    ],
    images: ["/images/weather-map-0.jpg", "/images/weather-map-1.jpg"],
    gitlink: "test",
    sitelink: "test",
  },
  {
    id: 1,
    name: "Exemplo Nome",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus neque, tincidunt vel varius in, placerat quis ligula. Integer purus nibh, fermentum vel gravida vel, aliquet sit amet velit. Cras luctus bibendum sapien vel sollicitudin. Vestibulum magna lectus, fermentum sed justo non, suscipit vulputate felis. Mauris tempor hendrerit varius. Nunc in elit sit amet neque viverra varius vitae nec enim. Sed facilisis mi quis felis porttitor, a ultricies massa auctor. Aenean sodales dui id odio euismod, vitae pellentesque eros blandit. Nulla aliquet augue efficitur scelerisque tristique. In hac habitasse platea dictumst. Donec nec tortor posuere, tincidunt magna sit amet, placerat lacus. ",
    tec: [
      {
        name: "test",
        key: 1,
      },
      {
        name: "test",
        key: 1,
      },
    ],
    images: ["/images/weather-map-0.jpg", "/images/weather-map-1.jpg"],
    gitlink: "test",
    sitelink: "test",
  },
];

const projectsExs = document.querySelector("#projects-exs");
const projectImg = document.querySelector("#project-img");
const pannelName = document.querySelector("#pannel-name");
const tecIcons = document.querySelector("#tec-icons");
const ctaLinks = document.querySelector("#cta-links");
const imgArrows = document.querySelector("#img-arrows");

// btn specific
const unselectBtn = () => {
  for (let item of projectsExs.children) {
    item.classList.remove("active-btn");
  }
};

const changeExBtn = (btn) => {
  unselectBtn();
  btn.classList.add("active-btn");
};

const createExBtn = (newBtn, name, id) => {
  newBtn.classList = "btn btn-ex";

  const newP = document.createElement("p");
  newP.classList = "fs-small";
  newP.textContent = name;

  newBtn.appendChild(newP);
  projectsExs.appendChild(newBtn);
};

// pannel section
// image specific
const fallback = (image) => {
  image.onerror = null;
  image.src = "/images/not-found-img.jpg";
};
projectImg.addEventListener("error", () => {
  fallback(projectImg);
});

const changeExImg = (index) => {
  const images = projectImg.dataset.images.split(",");
  projectImg.src = images[index];
  projectImg.dataset.index = index;
};

const moveImg = (direction) => {
  const dir = direction === "right" ? 1 : -1;
  const imgLength = info[parseInt(projectImg.dataset.id)].images.length - 1;
  let index = parseInt(projectImg.dataset.index) + dir;

  if (index < 0) {
    index = imgLength;
  } else if (index > imgLength) {
    index = 0;
  }

  changeExImg(index);
};

imgArrows.firstElementChild.addEventListener("click", () => moveImg("left"));
imgArrows.lastElementChild.addEventListener("click", () => moveImg("right"));

// name specific
const changeExNameAbout = (name, about) => {
  pannelName.firstElementChild.textContent = name;
  pannelName.lastElementChild.textContent = about;
};

// tec/links specific
// tec
const selectTec = (key) => {
  switch (key) {
    case 0:
      return "/icons/tec-html-5.svg";
    case 1:
      return "/icons/tec-css-3.svg";
    case 2:
      return "/icons/tec-javascript.svg";
    case 3:
      return "/icons/tec-sass.svg";
    case 4:
      return "/icons/tec-api.png";
    default:
      return "/icons/au-not-found.svg";
  }
};

const createTec = (name, key) => {
  const newImg = document.createElement("img");
  newImg.src = selectTec(key);
  newImg.alt = name;
  tecIcons.appendChild(newImg);
};

const changeExTec = (tec) => {
  tecIcons.innerHTML = "";
  for (let item of tec) {
    const { name, key } = item;
    createTec(name, key);
  }
};

// links
const changeExLinks = (gitlink, sitelink) => {
  ctaLinks.firstElementChild.href = gitlink;
  ctaLinks.lastElementChild.href = sitelink;
};

// setup
const setupProjects = (project) => {
  const { id, name, about, images, tec, gitlink, sitelink } = project;

  const newBtn = document.createElement("Button");
  createExBtn(newBtn, name);

  projectImg.dataset.id = id;
  projectImg.dataset.images = images;
  projectImg.alt = `Imagem Exemplo de ${name}`;

  newBtn.addEventListener("click", () => {
    changeExBtn(newBtn);
    changeExImg(0);
    changeExNameAbout(name, about);
    changeExTec(tec);
    changeExLinks(gitlink, sitelink);
  });

  if (id === 0) {
    newBtn.click();
  }
};

for (let project of info) {
  setupProjects(project);
}

// ------------------------------------------------------------------
