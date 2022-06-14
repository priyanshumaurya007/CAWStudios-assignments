function change_start_stop()
{
    var value_of_start_stpop = document.getElementById("start_stop");

    if(value_of_start_stpop.innerHTML == "Start")
    {
        value_of_start_stpop.innerHTML = "Stop";
    }
    else
    {
        value_of_start_stpop.innerHTML = "Start"; 
    }
}