function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = Number(inputValue);
    return inputValueNumber;
}

function getInnerTextValueById(id){
    const innerTextValue = document.getElementById(id).innerText;
    const innerTextValueNumber  = Number(innerTextValue);
    return innerTextValueNumber;
}