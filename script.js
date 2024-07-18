function displaynumber(num){
    result.value+=num;
}


function clearbox(){
    result.value=''
}

function evaluateExp(){
    exp=result.value
    out=eval(exp)
    result.value=out

    //or
    // result.value=eval(result.value)
}
function removelastitem(){
    result.value=result.value.slice(0,-1)
}