var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

// Define the video variable and assign the video element to it after the page loads
window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");
    video.autoplay = false; // Turn off autoplay
    video.loop = false; // Turn off looping
    updateVolumeText(); // Update the volume text on load
});

// Function to update volume text
function updateVolumeText() {
    document.getElementById('volume').textContent = (video.volume * 100).toFixed(0) + '%';
}

// Play button
document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    console.log("Video volume before play is: " + (video.volume * 100).toFixed(0) + '%');
    video.play();
    updateVolumeText();
});

// Pause button
document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
    console.log("Pause Video");
});

// Slow down video speed
document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.90; // Decrease speed by 10%
    console.log("New speed is " + video.playbackRate.toFixed(2));
});

// Speed up video speed
document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate /= 0.90; // Increase speed by dividing by the same factor
    console.log("New speed is " + video.playbackRate.toFixed(2));
});

// Skip ahead
document.querySelector("#skip").addEventListener("click", function() {
    if (video.currentTime + 10 >= video.duration) {
        video.currentTime = 0;
        console.log("Going back to start");
    } else {
        video.currentTime += 10;
    }
    console.log("Current location " + video.currentTime.toFixed(2));
});

// Mute button
document.querySelector("#mute").addEventListener("click", function() {
    video.muted = !video.muted;
    document.querySelector("#mute").textContent = video.muted ? "Unmute" : "Mute";
    console.log(video.muted ? "Video muted" : "Video unmuted");
});

// Volume slider
document.querySelector("#slider").addEventListener("change", function() {
    video.volume = this.value / 100;
    updateVolumeText();
});

// Vintage button - add the CSS class to the video
document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

// Original button - remove the CSS class from the video
document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});
