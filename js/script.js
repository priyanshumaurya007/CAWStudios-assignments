// function to change start to stop and vice versa

var check;

// function to check that second should be less than or equal to 60

function validate_for_seconds()
{
    var value_of_seconds = document.getElementById("seconds_input").value; 
    
    if(value_of_seconds > 60)
        return true;
    
    else
        return false;
    
}

// functions to check for seconds greater than 60;

function change_start_stop()
{

    var value_of_start_stpop = document.getElementById("start_stop");

    if(value_of_start_stpop.innerHTML == "Start")
    {
        var value_of_minutes = document.getElementById("minutes_input").value;

        if(value_of_minutes < 0)
        {
            document.getElementById("minutes_input").value = 00;
        }

        if(validate_for_seconds())
        {
            var value_of_seconds = document.getElementById("seconds_input").value; 
            alert("You have enter "+ value_of_seconds + " that is greater than 60, Please enter in the correct format");
            return ;
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

// function to run the clock and check the condition

function start_counter()
{
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

function disable_button_off()
{
    document.getElementById("minutes_input").disabled = false;
    document.getElementById("seconds_input").disabled = false;

}

function disable_button_on()
{
    document.getElementById("minutes_input").disabled = true;
    document.getElementById("seconds_input").disabled = true;

}

// function to change the value of timing by setting button

document.getElementById('settings').onclick = function() {
    var disabled = document.getElementById("minutes_input").disabled;
    clearInterval(check);
    document.getElementById("start_stop").innerHTML = "Start";
    if (disabled) {
        disable_button_off();
    }
    else {
        disable_button_on();
    }
}