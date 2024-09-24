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

function showSectionById(id){
    document.getElementById('accordian-section').classList.add('hidden');
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden')
    document.getElementById('blog-btn').classList.add('remove')
    document.getElementById('home-btn').classList.add('remove')

    document.getElementById(id).classList.remove('hidden')
}