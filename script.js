const musicContainer = document.getElementById("music-container");
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// Your Kannada new love songs array with song details
const songs = [
  {
    title: "Niralli Sanna",
    audioUrl: "niralli.mp3",
    coverUrl: "ns.jpeg"
  },
  {
    title: "Belageddu",
    audioUrl: "balegeddu.mp3",
    coverUrl: "bk.jpeg"
  },
  {
    title: "snehave",
    audioUrl: "jagaveninu.mp3",
    coverUrl: "jg.jpeg"
  },
  {
    title: "soulmate",
    audioUrl: "sm.mp3",
    coverUrl: "sm.jpeg"
  },
  {
    title: "malenadina hoovu",
    audioUrl: "mn.mp3",
    coverUrl: "mh.jpeg"
  },
  {
    title: "beduvenu Varavannu",
    audioUrl: "bv.mp3",
    coverUrl: "js.jpeg"
  },
  {
    title: "beduvenu Varavannu",
    audioUrl: "d.mp3",
    coverUrl: "jd.jpeg"
  };
  // Add more Kannada songs here
];

let songIndex = 0;

function loadSong(song) {
  title.innerText = song.title;
  audio.src = song.audioUrl;
  cover.src = song.coverUrl;
}

function playSong() {
  musicContainer.classList.add("play");
  playButton.querySelector("i.fas").classList.remove("fa-play");
  playButton.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playButton.querySelector("i.fas").classList.remove("fa-pause");
  playButton.querySelector("i.fas").classList.add("fa-play");
  audio.pause();
}

function prevSong() {
  songIndex--;
  if (songIndex < 0) songIndex = songs.length - 1;
  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) songIndex = 0;
  loadSong(songs[songIndex]);
  playSong();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Event Listeners
playButton.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  isPlaying ? pauseSong() : playSong();
});

prevButton.addEventListener("click", prevSong);
nextButton.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);
audio.addEventListener("ended", nextSong);

// Initial load
loadSong(songs[songIndex]);
