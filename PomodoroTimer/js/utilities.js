// function to check that second should be less than or equal to 60

const validate_for_seconds = ()=>{

    let value_of_seconds = document.getElementById("seconds_input").value; 
    let returnValue;
    
    if(value_of_seconds > 60)
        returnValue = true;
    
    else
        returnValue = false;
    
    return returnValue;
}

// to take input 

const disable_button_off = ()=>{

    document.getElementById("minutes_input").disabled = false;
    document.getElementById("seconds_input").disabled = false;

}

// not to take input

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

    let value_of_seconds = document.getElementById("seconds_input").value;
    let value_of_minutes = document.getElementById("minutes_input").value;
    let returnValue = false;

    if(!(value_of_seconds >=0 && value_of_seconds <= 60) || !(value_of_minutes >= 0 && value_of_minutes <= 60))
    {
        returnValue = true;
    }

    return returnValue;
}




export {disable_button_off, disable_button_on, validate_for_seconds, set_to_zero, validate_time};