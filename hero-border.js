// This script ensures the animation only plays on page load.
window.addEventListener("load", () => {
  const flow01 = document.getElementById("flow-h ", "flow-h-2", "flow-h-3");
  flow01.style.animation = "none";
  setTimeout(() => {
    flow01.style.animation = "";
  }, 10);
});
