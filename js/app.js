    // Get DOM elements
    const playButton = document.querySelector('.play-button');
    const downloadButton = document.querySelector('.download-button');
    const likeButton = document.querySelector('.like-button');
    const listenersCount = document.querySelector('.listeners-count');
    const audioPlayer = document.getElementById('audioPlayer');

    let listenCount = 0;
    let liked = false;

    // Function to update listeners count
    function updateListenersCount() {
      listenersCount.textContent = `${listenCount} listens`;
    }

    // Function to handle play button click
    playButton.addEventListener('click', function() {
      listenCount++;
      updateListenersCount();
      if (!liked) {
        playButton.classList.add('green');
      }
      // Play the audio
      audioPlayer.play();
    });

    // Function to handle like button click
    likeButton.addEventListener('click', function() {
      liked = true;
      likeButton.disabled = true;
      likeButton.classList.add('green');
    });

    // Function to handle download button click
    downloadButton.addEventListener('click', function() {
      // Simulate downloading
      alert('Downloading song...');
    });