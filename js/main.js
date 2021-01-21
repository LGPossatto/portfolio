// ------------------------------------------------------------------
// navbar link ------------------------------------------------------
const navArrow = document.querySelector("#nav-arrow");
const arrowStyle = (elementLink) => {
  const elementBound = elementLink.getBoundingClientRect();
  const styleTop =
    (elementBound.bottom + elementBound.top - navArrow.offsetHeight) / 2;
  const styleLeft = elementBound.right + 10;

  navArrow.style.transform = `translate(${styleLeft}px, ${styleTop}px)`;
};

const navLinks = document.querySelector("#nav-links");
const linkStyle = (e) => {
  const elementTag = e.target.parentElement.tagName;
  const childrenList = navLinks.children;

  for (let child of childrenList) {
    if (child.classList.contains("active-link")) {
      child.classList.remove("active-link");
    }
  }

  let elementLink = navLinks.firstElementChild;
  if (elementTag === "svg") {
    elementLink = e.target.parentElement.parentElement;
  } else if (elementTag === "LI") {
    elementLink = e.target.parentElement;
  }

  elementLink.classList.add("active-link");
  arrowStyle(elementLink);

  window.addEventListener("resize", () => {
    arrowStyle(elementLink);
  });
};

navLinks.addEventListener("click", (e) => {
  linkStyle(e);
});

// move arrow to it's place
setTimeout(() => {
  navLinks.click();
  navArrow.style.opacity = "1";
}, 500);

// ------------------------------------------------------------------
// navbar burg-menu -------------------------------------------------
const navBurg = document.querySelector("#nav-burg");

const burgStyle = () => {
  navBurg.classList.toggle("burg-animation");
  navLinks.classList.toggle("menu-mobile");
};

navBurg.addEventListener("click", burgStyle);

// ------------------------------------------------------------------
