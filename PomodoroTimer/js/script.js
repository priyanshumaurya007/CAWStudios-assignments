import {
  disable_button_off,
  disable_button_on,
  validate_for_seconds,
  set_to_zero,
  validate_time
} from './utilities.js';

// to store the interval and we can kill it whenever required
let check;

// functions to check for seconds greater than 60;

document.getElementById('start_stop').onclick = function () {
  let value_of_start_stpop = document.getElementById('start_stop');

  if (value_of_start_stpop.innerHTML == 'Start') {
    let value_of_minutes = document.getElementById('minutes_input').value;

    if (value_of_minutes < 0) {
      document.getElementById('minutes_input').value = 15;
    }

    if (validate_for_seconds()) {
      let value_of_seconds = document.getElementById('seconds_input').value;
      alert(
        'You have enter ' +
          value_of_seconds +
          ' that is greater than 60, Please enter in the correct format'
      );
      disable_button_off();
      set_to_zero();
      return;
    }

    if (validate_time()) {
      alert('please enter in the correct format (numbers in 2 digits)');
      disable_button_off();
      set_to_zero();
      return;
    }
    disable_button_on();
    value_of_start_stpop.innerHTML = 'Stop';
    document.querySelector('.ring').style.stroke = 'green';

    check = setInterval(start_counter, 1000);
  } else {
    clearInterval(check);
    value_of_start_stpop.innerHTML = 'Start';
  }
};

// function to run the clock and check the condition

const start_counter = () => {
  let minutes = document.getElementById('minutes_input');
  let seconds = document.getElementById('seconds_input');

  let minutes_value = minutes.value;
  let seconds_value = seconds.value;

  // when both seconds and minutes reaches to 0
  if (seconds_value == 0 && minutes_value == 0) {
    document.querySelector('.ring').style.stroke = 'red';
    setTimeout(function () {
      alert('Time over');
    }, 100);
    clearInterval(check);
    disable_button_off();
    document.getElementById('start_stop').innerHTML = 'Start';
  }

  // if seconds reaches to 0 but minutes still left
  else {
    if (seconds_value == 0) {
      minutes_value--;
      minutes_value = ('0' + minutes_value).slice(-2);
      minutes.value = minutes_value;
      seconds.value = 60;
    }

    // otherwise reduced the seconds
    else {
      seconds_value--;
      seconds_value = ('0' + seconds_value).slice(-2);
      seconds.value = seconds_value;
    }
  }
};

// function to change the value of timing by setting button

document.getElementById('settings').onclick = function () {
  let disabled = document.getElementById('minutes_input').disabled;
  clearInterval(check);
  set_to_zero();
  document.getElementById('start_stop').innerHTML = 'Start';
  if (disabled) {
    disable_button_off();
  } else {
    disable_button_on();
  }
};
