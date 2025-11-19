export function initAudio() {
    const sound = new Audio();
    sound.src = "mario-bros tuberia.mp3";

    const topButton = document.getElementById('top-button');
    if (topButton) {
        topButton.addEventListener('click', (e) => {
            // Optional: prevent default if it's just for sound, 
            // but it's an anchor to #, so it scrolls to top.
            // We just want the sound.
            sound.play().catch(err => console.log("Audio play failed", err));
        });
    }
}
