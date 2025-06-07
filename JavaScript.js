




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





