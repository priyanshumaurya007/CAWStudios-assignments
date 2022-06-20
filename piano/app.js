// store all classes
const allKey = document.querySelectorAll(".key");

// function to play song using id
const playSong = (element) => {

    let keyId = element.id;
    let audio = new Audio('audio/key-' + (keyId) + '.mp3');
    console.log(keyId);
    audio.play();

}

// use to call playSong function
allKey.forEach((element) => {

    element.addEventListener('click', () => playSong(element));
})