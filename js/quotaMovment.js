
document.getElementById('quota-movement-donate-btn').addEventListener('click', function(){
    const totalDonation = getInnerTextValueById('total-donation');
    // console.log(totalDonation)
    const quotaMovementAmount = getInnerTextValueById('quota-movement-amount');
    // console.log(quotaMovementAmount)
    // console.log('hi')
    const quotaMovementDonation = getInputValueById('quota-movement-donation')
    // console.log(quotaMovementDonation)
    if (quotaMovementDonation <= 0 || isNaN(quotaMovementDonation) || quotaMovementDonation > quotaMovementAmount) {
        alert('Invalid Input');
        return;
    }
    my_modal_1.showModal();
    
    document.getElementById('btn').addEventListener('click', function(){
        const totalAmount = totalDonation - quotaMovementDonation;
        // console.log(totalAmount)
        document.getElementById('total-donation').innerText = totalAmount;
        const restQuotaMovementAmount = quotaMovementAmount + quotaMovementDonation;
        document.getElementById('quota-movement-amount').innerText = restQuotaMovementAmount;
    
    
        const heading = document.querySelector('.quota-movement-heading').innerText;
        const historyContainer = document.getElementById('history-container')
        const div = document.createElement('div');
        div.className = 'border-2 border-blue-500 p-5 rounded-lg'
        div.innerHTML = `
        <p class="text-lg font-bold">${quotaMovementDonation} Taka is ${heading}.</p>
        <p>Data:${new Date().toLocaleDateString()}</p>
        `
        historyContainer.appendChild(div);
    })
})