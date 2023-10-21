function toggleFullscreen() {
  const element = document.documentElement;
  const fullscreen = document.querySelector(".fullscreen-icon");
  const exitFullscreen = document.querySelector(".exit-fullscreen-icon");
  fullscreen.style.visibility =
    fullscreen.style.visibility === "visible"
      ? "hidden"
      : fullscreen.style.visibility === "hidden"
      ? "visible"
      : "hidden";
  exitFullscreen.style.visibility =
    exitFullscreen.style.visibility === "hidden"
      ? "visible"
      : exitFullscreen.style.visibility === "visible"
      ? "hidden"
      : "visible";
  // Make the element go fullscreen
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    // Firefox
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    // Chrome, Safari and Opera
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    // IE/Edge
    element.msRequestFullscreen();
  }

  // Exit fullscreen
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    // Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    // Chrome, Safari and Opera
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    // IE/Edge
    document.msExitFullscreen();
  }
}
