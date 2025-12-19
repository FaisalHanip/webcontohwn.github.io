/* WA LINK */
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('to');
if (namaTamu) {
  document.getElementById("tamu").innerText =
    "Kepada Yth: " + namaTamu;
}

/* MUSIC */

const audio = document.getElementById("bgMusic");
    let isPlaying = false;

    document.body.addEventListener("click", () => {
      if (!isPlaying) {
        audio.play();
        isPlaying = true;
      } else {
        audio.pause();
        isPlaying = false;
      }
    });
//const music = document.getElementById("bgMusic");

//music.play();
// // let isPlay = true;
// // function toggleMusic() {
// //   isPlay ? music.pause() : music.play();
// //   isPlay = !isPlay;
// }

/* COUNTDOWN */
const targetDate = new Date("2026-01-20T09:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  document.getElementById("days").innerText = Math.floor(diff / (1000*60*60*24));
  document.getElementById("hours").innerText = Math.floor(diff / (1000*60*60)%24);
  document.getElementById("minutes").innerText = Math.floor(diff / (1000*60)%60);
  document.getElementById("seconds").innerText = Math.floor(diff / 1000%60);
}, 1000);

/* COPY REKENING */
function copyRekening() {
  navigator.clipboard.writeText("1234567890");
  document.getElementById("notif").innerText = "Rekening disalin ✔";
}

/* SCROLL */
function scrollToSection(id) {
  document.querySelector("." + id)?.scrollIntoView({ behavior: "smooth" });
}
