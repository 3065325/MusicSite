"use strict"

import {
    SongData
} from "./songData.js";

import {
    compileSongContainer
} from "./songCompilers.js";

let SongContainer = document.getElementById("SongsContainer");
let Genre = document.body.id;

switch (Genre) {
    case "subspeedcore":
        for (let i = 0; i < SongData.SubSpeedcore.length; i++) {
            SongContainer.appendChild(compileSongContainer(SongData.SubSpeedcore[i]));
        }
        break;

    case "speedcore":
        for (let i = 0; i < SongData.Speedcore.length; i++) {
            SongContainer.appendChild(compileSongContainer(SongData.Speedcore[i]));
        }
        break;

    case "splittercore":
        for (let i = 0; i < SongData.Splittercore.length; i++) {
            SongContainer.appendChild(compileSongContainer(SongData.Splittercore[i]));
        }
        break;

        case "extratone":
            for (let i = 0; i < SongData.Extratone.length; i++) {
                SongContainer.appendChild(compileSongContainer(SongData.Extratone[i]));
            }
            break;
}