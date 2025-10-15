const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allkeys = [],
audio = new Audio("tunes/a.wav"); // by default, audio src is "a" tune

const playTune = (key) => {
    audio.src = `tunes/${key}.wav` // passing audio src based on key pressed
    audio.play(); // playing audio
    console.log(allkeys);

    const clickedkey = document.querySelector(`[data-key="${key}"]`); //getting clicked key element
    clickedkey.classList.add("active");
    setTimeout(() => { //removing active class after 150 ms from the clicked key element
        clickedkey.classList.remove("active"); // adding active class to the clicked key element
    }, 150);
}

pianoKeys.forEach(key => {
    allkeys.push(key.dataset.key); // adding data-key value to the allkeys array
    // Chamando a função playTune passando o valor da chave de dados como argumento
    key.addEventListener("click", () => playTune(key.dataset.key));
});
const handleVolume = (e) => {
    audio.volume = e.target.value; // passing the range slider value as an audio volume
}

const showHideKeys = () => {
    //toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    // if the pressed key is in the allkeys array, only call the playTune function 
     if(allkeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);