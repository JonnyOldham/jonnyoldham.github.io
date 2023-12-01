const videoTiles = document.querySelectorAll(".videoTile");

videoTiles.forEach((videoTile) => {
  const video = videoTile.querySelector(".video");

  video.addEventListener("ended", () => {
    video.currentTime = 0;
    video.load();
  });
});
