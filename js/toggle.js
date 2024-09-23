console.log('connet');
// const donationBtn = document.getElementById
document.getElementById('donation-btn').addEventListener('click', function(){
    const donationContainer = document.getElementById('donation-container')
    const historyContainer = document.getElementById('history-container');
    const donationBtn = document.getElementById('donation-btn');
    const historyBtn = document.getElementById('history-btn');

    donationBtn.classList.add('bg-[#B4F461]')
    donationBtn.classList.remove('border-2')
    // historyBtn.classList.remove('hidden')
    historyBtn.classList.remove('bg-[#B4F461]')
    historyBtn.classList.add('border-2')

    historyContainer.classList.add('hidden')
    donationContainer.classList.remove('hidden')
    
})
document.getElementById('history-btn').addEventListener('click', function(){
    const donationContainer = document.getElementById('donation-container')
    const historyContainer = document.getElementById('history-container');
    const donationBtn = document.getElementById('donation-btn');
    const historyBtn = document.getElementById('history-btn');

    historyBtn.classList.add('bg-[#B4F461]')
    historyBtn.classList.remove('border-2')
    // historyContainer.classList.add()
    donationBtn.classList.remove('bg-[#B4F461]');
    donationBtn.classList.add('border-2');
    donationContainer.classList.add('hidden')
})