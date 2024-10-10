document.getElementById('feni-donate-btn').addEventListener('click', function(){
    const totalDonation = getInnerTextValueById('total-donation')
    const feniAmount = getInnerTextValueById('feni-amount');
    // console.log('fghgh')
    const feniDonation = getInputValueById('feni-donation')
    if (feniDonation <= 0 || isNaN(feniDonation) || feniDonation > feniAmount) {
        alert('Invalid Input');
        return;
    }
    // console.log(feniDonation)
    my_modal_1.showModal()
    document.getElementById('btn').addEventListener('click', function(){
        const totalAmount = totalDonation - feniDonation;
        console.log(totalAmount)
        document.getElementById('total-donation').innerText = totalAmount;
        const restFeniAmount = feniAmount + feniDonation;
        document.getElementById('feni-amount').innerText = restFeniAmount;
    
        const heading = document.querySelector('.feni-heading').innerText;
        const historyContainer = document.getElementById('history-container')
        const div = document.createElement('div');
        div.className = 'border-2 border-blue-500 p-5 rounded-lg'
        div.innerHTML = `
        <p class="text-lg font-bold">${feniDonation} Taka is ${heading}.</p>
        <p>Data:${new Date().toLocaleDateString()}</p>
        `
        historyContainer.appendChild(div);
    })
})