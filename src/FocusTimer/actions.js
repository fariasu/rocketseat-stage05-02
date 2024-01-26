import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as audio from "./audio.js";

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle("running");
    timer.countdown();
};

export function reset(){
    state.toggleRunning = false;
    document.documentElement.classList.remove("running");
    timer.updateDisplay();
    state.isRunning = false;
};

export function add(){
    let newMinutes = Number(el.minutes.textContent);
    newMinutes += 3;
    newMinutes = newMinutes > 60 ? 60 : newMinutes;

    timer.updateDisplay(newMinutes, 0);
};

export function subtract(){
    let newMinutes = Number(el.minutes.textContent);
    newMinutes -= 3;
    if(newMinutes < 3){
        newMinutes = 3;
    }

    timer.updateDisplay(newMinutes, 0);
};

export function toggleForest(){
    ToggleAudio(audio.forestAudio);
    ToggleBackground(el.forest);
};

export function toggleRain(){
    ToggleAudio(audio.rainAudio);
    ToggleBackground(el.rain);
};

export function toggleStore(){
    ToggleAudio(audio.cafeteriaAudio);
    ToggleBackground(el.cafeteria);
};

export function toggleCampfire(){
    ToggleAudio(audio.campfireAudio);
    ToggleBackground(el.campfire);
};

function ToggleAudio(audioObject){
    audioObject.paused ? audioObject.play() : audioObject.pause();
};

function ToggleBackground(element){
    element.classList.toggle("isPlaying");
};