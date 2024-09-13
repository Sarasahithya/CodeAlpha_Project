document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio();
    const trackTitle = document.getElementById('track-title');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const progressBar = document.getElementById('progress-bar');
    const tracks = [
        'track1.mp3',
        'track2.mp3',
        'track3.mp3'
    ];
    let currentTrackIndex = 0;
    function loadTrack(index) {
        audio.src = tracks[index];
        audio.play();
        trackTitle.textContent = `Track ${index + 1}`;
    }
    function updateProgress() {
        if (audio.duration) {
            progressBar.value = (audio.currentTime / audio.duration) * 100;
        }
    }
    function seek(event) {
        const percent = event.target.value;
        audio.currentTime = (percent / 100) * audio.duration;
    }
    loadTrack(currentTrackIndex);
    playButton.addEventListener('click', () => {
        audio.play();
    });
    pauseButton.addEventListener('click', () => {
        audio.pause();
    });
    prevButton.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrackIndex);
    });
    nextButton.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        loadTrack(currentTrackIndex);
    });
    audio.addEventListener('timeupdate', updateProgress);
    progressBar.addEventListener('input', seek);
});