
    var audio = document.getElementById("himno");

    function playAudio1() {
      audio.play();
    }

    function pauseAudio() {
      audio.pause();
      audio.currentTime = 0; // Reset the audio to the beginning
    }
  