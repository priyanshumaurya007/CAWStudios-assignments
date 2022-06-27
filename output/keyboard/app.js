let dataKeyValue, randomValue;
let keyAll = document.getElementsByClassName('key');

// random value generator to jiggle a random key

const randomValueGenerator = () => {
  randomValue = Math.floor(Math.random() * 53);
  keyAll[randomValue].classList.add('jiggle');
  dataKeyValue = keyAll[randomValue].getAttribute('data-key');
  console.log('new key jiggled');
};

// function to remove jiggle

const removeJiggle = () => {
  keyAll[randomValue].classList.remove('jiggle');
  console.log('jiggle removed');
};

// when any key get pressed

document.addEventListener('keydown', function (event) {
  console.log(event);
  let pressedKey = event.key.toUpperCase();
  if (pressedKey == 'TAB') {
    event.preventDefault();
  }
  if (dataKeyValue == pressedKey) {
    removeJiggle();
    randomValueGenerator();
  } else {
    document
      .querySelector(`button[data-key="${pressedKey}"]`)
      .classList.add('error-key');

    setTimeout(function () {
      document
        .querySelector(`button[data-key="${pressedKey}"]`)
        .classList.remove('error-key');
    }, 200);
  }
});

// first call
randomValueGenerator();
