var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
  	video = document.querySelector("#player1");
  	video.autoplay = false;
  	video.loop = false;
  	console.log("auto play is set to " + video.autoplay);
  	console.log("loop is set to " + video.loop);
}
);

document.querySelector("#play").addEventListener("click", function() {
	video = document.querySelector("#player1");
	volume_percent = video.volume * 100
	video.play();
	document.querySelector("#volume").innerHTML = volume_percent + "%"
	console.log("Played video");
}
);

document.querySelector("#pause").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.pause();
	console.log("Paused Video");
}
);

document.querySelector("#slower").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.playbackRate *= 0.90;
	console.log("Slowed down video");
	console.log("Speed is " + video.playbackRate);
}
);

document.querySelector("#faster").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.playbackRate /= 0.90;
	console.log("Sped up video");
	console.log("Speed is " + video.playbackRate)
}
);

document.querySelector("#skip").addEventListener("click", function() {
	video = document.querySelector("#player1");
	if (video.ended) {
		video.currentTime = 0;
		console.log("Skipped ahead");
		console.log("Current time of video is: " + video.currentTime)
	} else {
		video.currentTime += 10;
		console.log("Skipped ahead");
		console.log("Current time of video is: " + video.currentTime)
 	}
}
);

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		console.log("Video is unmuted");
		document.getElementById("mute").innerHTML = "Mute";
	} else {
		video.muted = true;
		console.log("Video is muted");
		document.getElementById("mute"). innerHTML = "Unmute";
	}
}
);

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = 100 * (video.volume) + "%";
	console.log("Volume is " + (100 * video.volume) + "%");
}
);

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Utilizing oldSchool class")
	video = document.querySelector("#player1");
	video.classList.replace("video", "oldSchool");
}
);

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removing oldSchool class")
	video = document.querySelector("#player1");
	video.classList.remove("video", "oldSchool");
}
);