let mainMenu, videoPage, videoTitle, backButton, videoPlayer;

const Videos = [
  { title: 'Humans Explore Farther - Go Forward', image: 'explore-farther.png', video: 'exploring_farther.mp4'},
  { title: 'Apollo 11 - First Man on the Moon', image: 'apollo-11.png', video: 'apollo_11.mp4'},
  { title: 'Extra Vehicular Activity (Spacewalk)', image: 'spacewalk.png', video: 'spacewalk.mp4'},
  { title: 'SpaceX International Space Station Resupply', image: 'space-x.png', video: 'space_x_resupply.mp4'},
  { title: 'Building International Support for a Mars Effort', image: 'international-effort.png', video: 'international_effort.mp4'},
  { title: 'Clearing Mars Skies for Planetary Rovers', image: 'clearing-skies.png', video: 'clearing-skies.mp4'},
  { title: 'Mars Atmosphere and Volatile Evolution (MAVEN) Probe', image: 'maven.png', video: 'maven.mov'},
  { title: 'MAVEN Comet Mission', image: 'maven-comet.png', video: 'maven-comet.mov'},
  { title: 'MAVEN Statistics', image: 'maven-statistics.png', video: 'maven-statistics.mov'},
  { title: 'Happy Birthday to the Mars Curiosity Rover', image: 'happy-birthday.png', video: 'happy-birthday.mov'},
  { title: 'Sample Analysis of Mars (SAM) on board Curiosity', image: 'sam.png', video: 'sam.mov'},
  { title: 'The Helical Model - Our Solar System is a Vortex', image: 'solar-system.png', video: 'solar-system.mp4'}
];

const startup = () => {
  mainMenu = document.getElementById('main-menu');
  videoPage = document.getElementById('video-page');
  videoTitle = document.getElementById('video-title');
  backButton = document.getElementById('back-button');
  videoPlayer = document.getElementById('video-player');

  goToMainMenu();
  addVideosToMainMenu();

  // add touch events
  backButton.addEventListener('click', goToMainMenu);
  videoPlayer.onended = goToMainMenu;

  // prevent context menu from appearing
  window.addEventListener("contextmenu", function(e) { e.preventDefault(); });
};

const addVideosToMainMenu = () => {
  Videos.forEach(video => {
    let videoNode = document.createElement('div');
    videoNode.className = 'video';

    let videoContainerNode = document.createElement('div');
    videoContainerNode.className = 'video-container';
    videoContainerNode.addEventListener('click', () => goToVideoPage(video));

    let imageNode = document.createElement('div');
    imageNode.className = 'video-image';
    imageNode.style.backgroundImage = `url('assets/images/${video.image}')`;

    let labelNode = document.createElement('div');
    labelNode.className = 'video-label';
    labelNode.innerHTML = video.title;

    videoContainerNode.appendChild(imageNode);
    videoContainerNode.appendChild(labelNode);
    videoNode.appendChild(videoContainerNode);
    mainMenu.appendChild(videoNode);
  });
};

const goToMainMenu = () => {
  mainMenu.style.display = 'flex';
  videoPage.style.display = 'none';

  videoPlayer.pause();
};

const goToVideoPage = video => {
  mainMenu.style.display = 'none';
  videoPage.style.display = 'flex';

  videoTitle.innerText = video.title;
  videoPlayer.src = `assets/videos/${video.video}`;
  videoPlayer.volume = 1.0;
  videoPlayer.play();
};