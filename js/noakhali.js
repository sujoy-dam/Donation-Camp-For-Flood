console.log('connect noa')
// console.log(typeof noakhaliAmount, noakhaliAmount)

document.getElementById('noakhali-donate-btn').addEventListener('click', function(){
    const totalDonation = getInnerTextValueById('total-donation')
    const noakhaliAmount = getInnerTextValueById('noakhali-amount');
    const noakhaliDonation = getInputValueById('noakhali-donation')
    console.log(noakhaliDonation)
    const totalAmount = totalDonation + noakhaliDonation;
    console.log(totalAmount)
    document.getElementById('total-donation').innerText = totalAmount;
    const restNoakhaliAmount = noakhaliAmount - noakhaliDonation;
    document.getElementById('noakhali-amount').innerText = restNoakhaliAmount
})