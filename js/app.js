// Get DOM elements
const playButton = document.querySelector('.play-button');
const stopButton = document.getElementById('stopBtn');
const downloadButton = document.querySelector('.download-button');
const likeButtons = document.querySelector('.like-button');
const listenersCount = document.querySelector('.listeners-count');
const audioPlayer = document.getElementById('audioPlayer');

// Retrieve listen count from localStorage, or initialize to 0 if not present
let listenCount = parseInt(localStorage.getItem('listenCount')) || 0;
let liked = JSON.parse(localStorage.getItem('liked')) || false;

// Function to update listeners count
function updateListenersCount() {
  listenersCount.textContent = `${listenCount} listens`;
}

// Function to handle play button click
playButton.addEventListener('click', function() {
  listenCount++;
  updateListenersCount();
  // Play the audio
  audioPlayer.play();
  // Store updated listen count in localStorage
  localStorage.setItem('listenCount', listenCount);
});


// Function to handle pause button click
stopButton.addEventListener('click', function() { 
    // pause the audio
    audioPlayer.pause();
  });


// Function to handle like button click
likeButtons.forEach(likeButton => {
    likeButton.addEventListener('click', function() {
        likeButtons.style = 'background-color : green;';
        likeButtons.textContent = 'Liked';
        
        // Store liked status in localStorage
        localStorage.setItem('liked', true);
      });
});


// Function to handle download button click
downloadButton.addEventListener('click', function() {
  // Create a temporary link element
  const downloadLink = document.createElement('a');
  downloadLink.href = audioPlayer.src;
  downloadLink.download = 'song.mp3'; // Specify the filename here
  // Append the link to the document body
  document.body.appendChild(downloadLink);
  // Trigger a click event on the link
  downloadLink.click();
  // Remove the link from the document body
  document.body.removeChild(downloadLink);
});
