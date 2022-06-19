let dataKeyValue, randomValue;
let keyAll = document.getElementsByClassName("key");


// random value generator to jiggle a random key

const randomValueGenerator = ( ) => {

    randomValue = Math.floor((Math.random() * 53) );
    keyAll[randomValue].classList.add("jiggle");
    dataKeyValue = keyAll[randomValue].getAttribute("data-key");
    console.log("new key jiggled");

};

// function to remove jiggle 

const removeJiggle = () =>{
    keyAll[randomValue].classList.remove("jiggle");;
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
        document.querySelector(`button[data-key="${pressedKey}"]`).classList.add("errorKey");

        setTimeout(function()
        {
            document.querySelector(`button[data-key="${pressedKey}"]`).classList.remove("errorKey");
        }, 200);
        
    }

})

// first call 
randomValueGenerator();
