
document.getElementById('quota-movement-donate-btn').addEventListener('click', function(){
    const totalDonation = getInnerTextValueById('total-donation');
    console.log(totalDonation)
    const quotaMovementAmount = getInnerTextValueById('quota-movement-amount');
    console.log(quotaMovementAmount)
    console.log('hi')
    const quotaMovementDonation = getInputValueById('quota-movement-donation')
    console.log(quotaMovementDonation)
    const totalAmount = totalDonation + quotaMovementDonation;
    console.log(totalAmount)
    document.getElementById('total-donation').innerText = totalAmount;
    const restQuotaMovementAmount = quotaMovementAmount - quotaMovementDonation;
    document.getElementById('quota-movement-amount').innerText = restQuotaMovementAmount;
})