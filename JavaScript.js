

const barker = (state) => ({
  bark: () => console.log(`Woof , i am ${state.name}`),
});

const driver = (state) => ({
  drive: () => (state.position += state.speed),
});

const dogRobot = (name) => {
  const state = {
    name: name,
    speed: 100,
    position: 0,
  };
  
  return Object.assign({}, barker(state), driver(state));
};

const dogRobot1 = dogRobot("kyle");
dogRobot1.bark();

console.log(
  [
    [0, 1],
    [2, 3],
    [4, 5],
  ].reduce((acc, item) => {
    const flatten = acc.concat(item);
    return flatten;
  })
);


function showDropDown(e) {
 e.classList.remove("invisible");
 e.classList.add("visible");
}

function closeDropDown(e) {
  e.classList.add("invisible");
  e.classList.remove("visible");
}

const menuButton = document.querySelector(".menu-button");
const content = document.querySelector(".content");

menuButton.addEventListener("click",()=>{
  const contentShowed = content.classList.contains("visible") ? true : false;
  if(contentShowed) {
    closeDropDown(content);
  }
  else {
    showDropDown(content);
  }
})




const imgsContainer = document.querySelector(".imgs-container");
const forwardButton = document.querySelector(".arrow-forward");
const backButton = document.querySelector(".arrow-back");

function moveCarousel(direction,imgsContainer) {
  if (direction === "forward") {
    imgsContainer.style.transition = "transform 0.5s ease-in-out";
    imgsContainer.style.transform += "translateX(-100%)";

    setTimeout(() => {
      const firstImg = imgsContainer.firstElementChild;
      imgsContainer.appendChild(firstImg); // Move first image to the end
      imgsContainer.style.transition = "none"; // Remove transition for instant reset
      imgsContainer.style.transform = "translateX(0)"; // Reset position
    }, 500);
  } else {
    imgsContainer.style.transition = "transform 0.5s ease-in-out";
    imgsContainer.style.transform += "translateX(100%)";

    setTimeout(() => {
      const lastImg = imgsContainer.lastElementChild;
      imgsContainer.prepend(lastImg); // Move last image to the start
      imgsContainer.style.transition = "none";
      imgsContainer.style.transform = "translateX(0)";
    }, 500);
  }
}

// Attach event listeners to buttons
forwardButton.addEventListener("click", () => moveCarousel("forward",imgsContainer));
backButton.addEventListener("click", () => moveCarousel("backward",imgsContainer));


setInterval(()=> moveCarousel("forward",imgsContainer),5000);





