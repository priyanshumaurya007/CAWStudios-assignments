let dataKeyValue, randomValue;

const randomValueGenerator = ( ) => {

    randomValue = Math.floor((Math.random() * 53) + 1);
    document.getElementById("" + randomValue).classList.add("jiggle");

};


randomValueGenerator();