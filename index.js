const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
function jump() {
  if (dino.classList != jump) {
    dino.classList.add("jump");
    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}
document.addEventListener("keydown", function (event) {
  jump();
});

let isalive = setInterval(function () {
  let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  console.log(dinotop);
  let cactusleft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  let c = 0;
  if (cactusleft > 0 && cactusleft <= 50) {
    if (dinotop > 100) {
      alert("game over your score is ${c}");
    } else c++;
  }
}, 10);
