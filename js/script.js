// function to change start to stop and vice versa

var check;

function change_start_stop()
{

    var value_of_start_stpop = document.getElementById("start_stop");

    if(value_of_start_stpop.innerHTML == "Start")
    {
        document.getElementById("minutes_input").disabled = true;
        value_of_start_stpop.innerHTML = "Stop";

        check = setInterval(start_counter,1000);
    }
    else
    {
        clearInterval(check);
        value_of_start_stpop.innerHTML = "Start"; 
    }
}


function start_counter()
{
    var minutes = document.getElementById("minutes_input");
    var seconds = document.getElementById("seconds_input");

    var minutes_value = minutes.value;
    var seconds_value = seconds.value;


    // when both seconds and minutes reaches to 0
    if(seconds_value == 0 && minutes_value == 0)
    {
        alert("aap pahuch chuke hain");
        clearInterval(check);   

    }

    // if seconds reaches to 0 but minutes still left
    else
    {
        if(seconds_value == 0)
        {
            minutes_value--;
            minutes.value = minutes_value;
            seconds.value = 60;
        }

        // otherwise reduced the seconds
        else
        {
            seconds_value--;
            seconds.value = seconds_value;
        }
    }

}

// function to change the value of timing by setting button

document.getElementById('settings').onclick = function() {
    var disabled = document.getElementById("minutes_input").disabled;
    clearInterval(check);
    document.getElementById("start_stop").innerHTML = "Start";
    if (disabled) {
        document.getElementById("minutes_input").disabled = false;
        document.getElementById("seconds_input").disabled = false;
    }
    else {
        document.getElementById("minutes_input").disabled = true;
        document.getElementById("seconds_input").disabled = true;
    }
}