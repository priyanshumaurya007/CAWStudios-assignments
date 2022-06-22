// import { disable_button_off, disable_button_on } from "./utilities.js";

// function to change start to stop and vice versa

let check;

// function to check that second should be less than or equal to 60

const validate_for_seconds = ()=>{

    var value_of_seconds = document.getElementById("seconds_input").value; 
    
    if(value_of_seconds > 60)
        return true;
    
    else
        return false;
    
}

const disable_button_off = ()=>{

    document.getElementById("minutes_input").disabled = false;
    document.getElementById("seconds_input").disabled = false;

}

const disable_button_on = ()=>{
    
    document.getElementById("minutes_input").disabled = true;
    document.getElementById("seconds_input").disabled = true;

}

// function to set minutes and seconds to 0

const set_to_zero = ()=>{

    document.getElementById("minutes_input").value = "0" + 0;
    document.getElementById("seconds_input").value = "0" + 0;
}

// functions to validate time 

const validate_time = ()=>{

    var value_of_seconds = document.getElementById("seconds_input").value;
    var value_of_minutes = document.getElementById("minutes_input").value;

    if(!(value_of_seconds >=0 && value_of_seconds <= 60) || !(value_of_minutes >= 0 && value_of_minutes <= 60))
    {
        return true;
    }

    return false;
}

// functions to check for seconds greater than 60;

const startingButton = document.querySelector("#start_stop");

const change_start_stop = ()=>{

    var value_of_start_stpop = document.getElementById("start_stop");

    if(value_of_start_stpop.innerHTML == "Start")
    {
          
        var value_of_minutes = document.getElementById("minutes_input").value;

        if(value_of_minutes < 0)
        {
            document.getElementById("minutes_input").value = 15;
        }

        if(validate_for_seconds())
        {
            var value_of_seconds = document.getElementById("seconds_input").value; 
            alert("You have enter "+ value_of_seconds + " that is greater than 60, Please enter in the correct format");
            disable_button_off();
            set_to_zero();
            return ;
        }

        if(validate_time())
        {
            alert("please enter in the correct format (numbers in 2 digits)");
            disable_button_off();
            set_to_zero();
            return;
        }
        disable_button_on();
        value_of_start_stpop.innerHTML = "Stop";
        document.querySelector(".ring").style.stroke = "green";

        check = setInterval(start_counter,1000);
    }
    else
    {
        clearInterval(check);
        value_of_start_stpop.innerHTML = "Start"; 
    }
}

startingButton.addEventListener('click', change_start_stop());

// function to run the clock and check the condition

const start_counter = ()=>{

    var minutes = document.getElementById("minutes_input");
    var seconds = document.getElementById("seconds_input");

    var minutes_value = minutes.value;
    var seconds_value = seconds.value;


    // when both seconds and minutes reaches to 0
    if(seconds_value == 0 && minutes_value == 0)
    {
        document.querySelector(".ring").style.stroke = "red";
        setTimeout(function() {
            alert("Time over");
        },100);
        clearInterval(check);  
        disable_button_off();
        document.getElementById("start_stop").innerHTML = "Start";

    }

    // if seconds reaches to 0 but minutes still left
    else
    {
        if(seconds_value == 0)
        {
            minutes_value--;
            minutes_value = ("0" + minutes_value).slice(-2);
            minutes.value = minutes_value;
            seconds.value = 60;
        }

        // otherwise reduced the seconds
        else
        {
            seconds_value--;
            seconds_value = ("0" + seconds_value).slice(-2);
            seconds.value = seconds_value;
        }
    }

}



// function to change the value of timing by setting button

document.getElementById('settings').onclick = function() {
    var disabled = document.getElementById("minutes_input").disabled;
    clearInterval(check);
    set_to_zero();
    document.getElementById("start_stop").innerHTML = "Start";
    if (disabled) {
        disable_button_off();
    }
    else {
        disable_button_on();
    }
}