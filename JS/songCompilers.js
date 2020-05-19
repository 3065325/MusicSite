"use strict"

export function compileSongContainer(videoData) {
    let songContainer = document.createElement("section");
    songContainer.classList.add("container", "songContainer");

    let albumElement;
    if (videoData.albumLink !== undefined) {
        albumElement = `
        <a class="albumLink" href="${videoData.albumLink}">
            ${videoData.albumLink}
        </a>
    `
    } else {
        albumElement = `
            <p class="displayData">
                <b>unable to locate album link</b>
            </p>
        `
    }

    songContainer.innerHTML = `
        <section class="container infoContainer">
            <p class="displayData title">
                <span class="displayDataName">Title: </span> ${videoData.title}
            </p>

            <p class="displayData author">
                <span class="displayDataName">Author: </span> ${videoData.author}
            </p>

            <p class="displayData scale">
                <span class="displayDataName">Melodic Scale: </span> ${videoData.scale}%
            </p>

            <p class="displayData bpm">
                <span class="displayDataName">BPM: </span> ${videoData.bpm}
            </p>
        </section>

        <iframe class="videoContainer" src="${videoData.videoLink}" controls="true" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true">
        </iframe>

        <section class="container albumContainer">
            <p class="displayData albumTitle">
                <span class="displayDataName">Album: </span> ${videoData.album}
            </p>

            ${albumElement}
        </section>
    `;

    return songContainer;
}