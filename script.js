let curX = 0;
let curY = 0;
let tgX = 0;
let tgY = 0;

document.addEventListener("DOMContentLoaded", () => {
  const interBubble = document.querySelector(".interactive");

  function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(
      curX
    )}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  }

  move();
});

window.addEventListener("mousemove", (event) => {
  tgX = event.clientX;
  tgY = event.clientY;
});

let previousSelectedTab = document.querySelector(".tab.pressed");
if (previousSelectedTab) {
  const currentTabArticle = document.getElementById(
    previousSelectedTab.getAttribute("data-tab")
  );
  currentTabArticle.style.display = "flex";
}

const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    previousSelectedTab.classList.remove("pressed");
    tab.classList.add("pressed");
    const currentTabArticle = document.getElementById(
      tab.getAttribute("data-tab")
    );
    const previousTabArticle = document.getElementById(
      previousSelectedTab.getAttribute("data-tab")
    );
    previousTabArticle.style.display = "none";
    currentTabArticle.style.display = "flex";
    previousSelectedTab = tab;
  })
);
