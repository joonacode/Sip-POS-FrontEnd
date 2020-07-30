const hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('active')
    document.querySelector('.content-left').classList.toggle('active')
})
document
    .querySelector('#btn-checkout-mobile')
    .addEventListener('click', (e) => {
        $('#modalCart').modal('hide')
    })