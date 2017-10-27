var cookie1 = document.cookie;

function onload() {
    //var cookie1 = document.cookie;
    var bgm = document.getElementById("bgm");
    console.log(cookie1);

    if (cookie1 === "") {
        document.cookie = "play=true; expires=Thu, 31 Dec 2099 12:00:00 UTC; path=/";
    } else if (cookie1 == "play=true") {
        bgm.play();
    } else if (cookie1 == "play=false") {
        bgm.pause();
    } else {
        document.cookie = "play=true; expires=Thu, 31 Dec 2099 12:00:00 UTC; path=/";
    }
}

function playme() {
    if (cookie1 == "play=true") {
        document.cookie = "play=false; expires=Thu, 31 Dec 2099 12:00:00 UTC; path=/";
        isPlaying();
        console.log("Paused!");
    } else if (cookie1 == "play=false") {
        document.cookie = "play=true; expires=Thu, 31 Dec 2099 12:00:00 UTC; path=/";
        isPlaying();
        console.log("Playing!");
    } else {
        document.cookie = "play=true; expires=Thu, 31 Dec 2099 12:00:00 UTC; path=/";
	isPlaying();
        console.log("help");
    }
}

function isPlaying() {
    if (bgm.duration > 0 && !bgm.paused) {

        bgm.pause();

    } else {

        bgm.play();
    }
}

function help() {
    console.log("hi");
}
