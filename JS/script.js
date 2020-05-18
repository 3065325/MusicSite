import {
    SongData
} from "./songData.js";

let videoContainer = document.getElementById("SongsContainer");

function compileVideoElement(videoData) {
    let videoElement = document.createElement("iframe");

    videoElement.setAttribute("src", videoData.videoLink);
    videoElement.setAttribute("controls", true);
    videoElement.setAttribute("frameborder", 0);
    videoElement.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
    videoElement.setAttribute("allowfullscreen", true);

    return videoElement;
}

function compileSongContainer(videoData) {
    let songContainer = document.createElement("section");
    songContainer.classList.add("songContainer");


    let informationContainer = document.createElement("section");
    informationContainer.classList.add("infoContainer");

    let titleElement = document.createElement("span");
    titleElement.classList.add("title");
    titleElement.innerHTML = `Title: ${videoData.title}`;
    informationContainer.appendChild(titleElement);


    let authorElement = document.createElement("span");
    authorElement.classList.add("author");
    authorElement.innerHTML = `Author: ${videoData.author}`;
    informationContainer.appendChild(authorElement);

    let scaleElement = document.createElement("span");
    scaleElement.classList.add("scale");
    scaleElement.innerHTML = `Melodic Scale: ${videoData.scale}%`;
    informationContainer.appendChild(scaleElement);

    let bpmElement = document.createElement("span");
    bpmElement.classList.add("bpm");
    bpmElement.innerHTML = `BPM: ${videoData.bpm}`;
    informationContainer.appendChild(bpmElement);

    songContainer.appendChild(informationContainer);


    let videoElement = document.createElement("div");
    videoElement.classList.add("videoContainer");

    // let videoElementLink = document.createElement("a");
    // videoElementLink.classList.add("videoLink");
    // videoElementLink.setAttribute("href", videoData.videoLink);
    // videoElementLink.innerHTML = videoData.videoLink;
    // videoElement.appendChild(videoElementLink);

    let videoElementEmbed = compileVideoElement(videoData);
    videoElementEmbed.classList.add("videoEmbed");
    videoElement.appendChild(videoElementEmbed);

    songContainer.appendChild(videoElement);


    let albumElement = document.createElement("div");
    albumElement.classList.add("albumContainer");

    let albumElementTitle = document.createElement("span");
    albumElementTitle.classList.add("albumTitle");
    albumElementTitle.innerHTML = `Album: ${videoData.album}`;
    albumElement.appendChild(albumElementTitle);

    let albumElementLink = document.createElement("a");
    albumElementLink.classList.add("albumLink");
    albumElementLink.setAttribute("href", videoData.albumLink);
    albumElementLink.innerHTML = videoData.albumLink;
    albumElement.appendChild(albumElementLink);

    songContainer.appendChild(albumElement);

    return songContainer;
}

for (let i = 0; i < SongData.Splittercore.length; i++) {
    videoContainer.appendChild(compileSongContainer(SongData.Splittercore[i]));
}
