let dataKeyValue, randomValue;


// random value generator to jiggle a random key

const randomValueGenerator = ( ) => {

    randomValue = Math.floor((Math.random() * 53) + 1);
    document.getElementById('' + randomValue).classList.add("jiggle");
    dataKeyValue = document.getElementById('' + randomValue).getAttribute("data-key");
    console.log("new key jiggled");

};

// function to remove jiggle 

const removeJiggle = () =>{
    document.getElementById("" + randomValue).classList.remove("jiggle");;
    console.log("jiggle removed");
}

// when any key get pressed


document.addEventListener('keydown', function(event){
    console.log(event);
    let pressedKey = event.key.toUpperCase();
    console.log(pressedKey);
    if(dataKeyValue == pressedKey)
    {
        removeJiggle();
        randomValueGenerator();
    }
    else
    {
        document.querySelector("keyboard").classList.add("error");
    }

})

// first call 
randomValueGenerator();
