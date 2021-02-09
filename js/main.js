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
navLinks.firstElementChild.firstElementChild.click();
setTimeout(() => {
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
    name: "Portfólio",
    about:
      "Este projeto foi feito utilizando HTML 5, CSS 3, JavaScript e Sass. O objetivo deste projeto é servir como portfólio para demonstrar projetos e mostrar alguns dados que podem ser úteis. O layout do site foi feito utilizando o Figma, a partir do zero. Todos os projetos são mostrados na tela de forma dinâmica, extraindo dados através de um objeto Json. Este projeto apresentou alguns desafios interessantes, principalmente na hora de escrever o código da barra de navegação ou o próprio código da seção dos projetos. O site possui uma página dividida em seções claras e bem definidas.",
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
    ],
    images: [
      "/images/portfolio-0.jpg",
      "/images/portfolio-1.jpg",
      "/images/portfolio-2.jpg",
    ],
    gitlink: "https://github.com/LGPossatto/portfolio",
    sitelink: "https://luizgustavo.netlify.app",
  },
  {
    id: 1,
    name: "API-project",
    about:
      "Este projeto foi feito utilizando HTML 5, CSS 3, JavaScript, Sass e duas APIs externas. O objetivo deste projeto é ser um site simples feito para imprimir na tela dados coletados através de uma API publica. A primeira API utilizadas foi a Weather API, ela é disponibilizada pela openweathermap e pode entregar ao usuário diversas informações sobre o tempo e a região desejada. A segunda API utilizada foi a Maps JavaScript API, disponibilizada pela google, o objetivo era utiliza-la em conjunto com a Directions API ou Places API, porem o uso para desenvolvedor era limitado. O site possui uma página dividida em duas seções, ele mostra na tela dois blocos, um contendo as informações sobre o tempo e o outro mostrando um mapa da região.",
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
    gitlink: "https://github.com/LGPossatto/weather-site-mini-project",
    sitelink: "https://weather-map-mini-project.netlify.app",
  },
  {
    id: 2,
    name: "Pizzaria Mat",
    about:
      "Este projeto foi feito utilizando HTML 5, CSS 3, JavaScript e Materialize. O objetivo deste projeto é ser um site simples feito para demonstrar o uso de um framework para CSS, no caso o Materialize, que é um framework feito pela google inspirado pelo material design. O site possui uma página dividida em algumas seções, ele foi feito utilizando somente o que o framework disponibiliza.",
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
        name: "materialize",
        key: 5,
      },
    ],
    images: [
      "/images/pizzaria-mat-0.jpg",
      "/images/pizzaria-mat-1.jpg",
      "/images/pizzaria-mat-2.jpg",
    ],
    gitlink: "https://github.com/LGPossatto/materialize-project",
    sitelink: "https://pizzariamat.netlify.app",
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
  image.src = "/images/not-found.jpg";
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
    case 5:
      return "/icons/tec-materialize.svg";
    default:
      return "/icons/au-not-found.svg";
  }
};

const createTec = (name, key) => {
  const newImg = document.createElement("img");
  newImg.src = selectTec(key);
  newImg.alt = name;
  newImg.title = name;
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

// contact links
const createNewContactLink = (name, gitlink, sitelink) => {
  const newP = document.createElement("p");
  newP.innerHTML = `<p class="fs-small">
                      ${name}:
                      <a href="${gitlink}" target="_blank">Código</a> -
                      <a href="${sitelink}" target="_blank">Site</a>
                    </p>`;
  return newP;
};

const displayLinks = (project) => {
  const { name, gitlink, sitelink } = project;
  const contactLinks = document.querySelector("#contact-links");
  const newP = createNewContactLink(name, gitlink, sitelink);

  contactLinks.insertBefore(newP, contactLinks.children[1]);
};

// setup
const setupProjects = (project) => {
  const { id, name, about, images, tec, gitlink, sitelink } = project;

  const newBtn = document.createElement("Button");
  createExBtn(newBtn, name);

  newBtn.addEventListener("click", () => {
    changeExBtn(newBtn);
    changeExNameAbout(name, about);
    changeExTec(tec);
    changeExLinks(gitlink, sitelink);

    projectImg.dataset.id = id;
    projectImg.dataset.images = images;
    projectImg.alt = `Imagem Exemplo de ${name}`;
    changeExImg(0);
  });

  if (id === 0) {
    newBtn.click();
  }
};

for (let project of info) {
  setupProjects(project);
  displayLinks(project);
}

// ------------------------------------------------------------------
