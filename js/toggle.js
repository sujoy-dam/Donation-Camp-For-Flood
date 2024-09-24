document.getElementById('donation-btn').addEventListener('click', function(){
    const donationContainer = document.getElementById('donation-container')
    const historyContainer = document.getElementById('history-container');
    const donationBtn = document.getElementById('donation-btn');
    const historyBtn = document.getElementById('history-btn');

    donationBtn.classList.add('bg-[#B4F461]')
    donationBtn.classList.remove('border-2')
    historyBtn.classList.remove('bg-[#B4F461]')
    historyBtn.classList.add('border-2')

    donationContainer.classList.remove('hidden');
    historyContainer.classList.add('hidden')
    
})
document.getElementById('history-btn').addEventListener('click', function(){
    const donationContainer = document.getElementById('donation-container')
    const historyContainer = document.getElementById('history-container');
    const donationBtn = document.getElementById('donation-btn');
    const historyBtn = document.getElementById('history-btn');

    historyBtn.classList.add('bg-[#B4F461]')
    historyBtn.classList.remove('border-2')
    donationBtn.classList.remove('bg-[#B4F461]');
    donationBtn.classList.add('border-2');
    donationContainer.classList.add('hidden')
    historyContainer.classList.remove('hidden')
})

// blog button
document.getElementById('blog-btn').addEventListener('click', function(){
    const homeBtn = document.getElementById('home-btn')
    const blogBtn = document.getElementById('blog-btn')
    const donationSection = document.getElementById('donation-section');
    const accordianSection = document.getElementById('accordian-section')
    blogBtn.classList.add('hidden')
    homeBtn.classList.remove('hidden')
    donationSection.classList.add('hidden')
    accordianSection.classList.remove('hidden')
})

document.getElementById('home-btn').addEventListener('click', function(){
    const homeBtn = document.getElementById('home-btn');
    const blogBtn = document.getElementById('blog-btn');
    const donationSection = document.getElementById('donation-section');
    const accordianSection = document.getElementById('accordian-section');
    donationSection.classList.remove('hidden')
    accordianSection.classList.add('hidden')
    homeBtn.classList.add('hidden')
    blogBtn.classList.remove('hidden')
})

// document.getElementById('donation-btn').addEventListener('click', function(){
//     showSectionById('donation-section')
// })
// document.getElementById('history-btn').addEventListener('click', function(){
//     showSectionById('history-container')
// })
// document.getElementById('blog-btn').addEventListener('click', function(){
//     showSectionById('accordian-section')
//     showSectionById('home-btn')
// })
// document.getElementById('home-btn').addEventListener('click', function(){
//     showSectionById('donation-section')
//     showSectionById('blog-btn')
// })