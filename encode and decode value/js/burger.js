var burger = document.querySelector('.burger');


burger.addEventListener('click', () => {
    var side_nav = document.querySelector('.side-navbar');
    side_nav.style.display = 'block';
    console.log(burger);
    console.log(side_nav);
})
document.getElementById('close-btn').addEventListener('click', () => {
    document.querySelector('.side-navbar').style.display = 'none';
})