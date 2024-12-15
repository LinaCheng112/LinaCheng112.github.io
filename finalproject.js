const bg1 = document.querySelector('.bg1');
const bg2 = document.querySelector('.bg2');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const division3Top = document.querySelector('.division3').offsetTop;
    const division3Height = document.querySelector('.division3').offsetHeight;

    if (scrollY > division3Top && scrollY < division3Top + division3Height) {
        const progress = (scrollY - division3Top) / division3Height;
        bg2.style.opacity = progress;
    }
});
