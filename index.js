
window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "rgb(135 206 250)",
    "rgb(255 160 122)",
    "rgb(32 178 170)",
    "rgb(248 248 129)",
    "rgb(251 132 222)",
    "rgb(195 137 243)",
  ];

  //get sounds
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();

      creatBubbles(index);
    });
  });

  // function to make bubbles
  const creatBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.background = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
