console.log('connet')
// console.log(typeof feniAmount, feniAmount)

document.getElementById('feni-donate-btn').addEventListener('click', function(){
    const totalDonation = getInnerTextValueById('total-donation')
    const feniAmount = getInnerTextValueById('feni-amount');
    console.log('fghgh')
    const feniDonation = getInputValueById('feni-donation')
    console.log(feniDonation)
    const totalAmount = totalDonation + feniDonation;
    console.log(totalAmount)
    document.getElementById('total-donation').innerText = totalAmount;
    const restFeniAmount = feniAmount - feniDonation;
    document.getElementById('feni-amount').innerText = restFeniAmount
})