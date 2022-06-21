// store all classes
const allKey = document.querySelectorAll(".key");

// function to play song using id
const playSong = (element, idx) => {

    let audio = new Audio('audio/key-' + (idx+1) + '.mp3');
    console.log(idx);
    audio.play();

}

// use to call playSong function
allKey.forEach((element, idx) => {

    element.addEventListener('click', () => playSong(element, idx));
})