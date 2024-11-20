function displaycontent(content){
    result.value +=content
}
//clear the input
function clcclear(){
    result.value =""

}
//
    function calcoutput(){
        result.value=eval(result.value)
    }

//backspace
function removedigit(){
    result.value=result.value.slice(0,-1)
}

