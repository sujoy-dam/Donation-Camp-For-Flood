

document.getElementById('noakhali-donate-btn').addEventListener('click', function () {
    const totalDonation = getInnerTextValueById('total-donation')
    const noakhaliAmount = getInnerTextValueById('noakhali-amount');
    const noakhaliDonation = getInputValueById('noakhali-donation')
    const heading = document.querySelector('.noakhali-heading').innerText;
    if (noakhaliDonation <= 0 || isNaN(noakhaliDonation) || noakhaliDonation > noakhaliAmount) {
        alert('Invalid Input');
        return;
    }
    my_modal_1.showModal()
    document.getElementById('btn').addEventListener('click', function () {

        const totalAmount = totalDonation - noakhaliDonation;
        document.getElementById('total-donation').innerText = totalAmount;
        const restNoakhaliAmount = noakhaliAmount + noakhaliDonation;
        document.getElementById('noakhali-amount').innerText = restNoakhaliAmount;

        const historyContainer = document.getElementById('history-container')
        const div = document.createElement('div');
        div.className = 'border-2 border-blue-500 p-5 rounded-lg'
        div.innerHTML = `
        <p class="text-lg font-bold">${noakhaliDonation} Taka is ${heading}.</p>
        <p>Data: ${new Date()}</p>
        `
        historyContainer.appendChild(div)
    })
})