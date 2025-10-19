const links = document.querySelectorAll('.menus a');
const secao = document.querySelectorAll('section');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('ativo'));

        link.classList.add('ativo');
    })
})

window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 150;

    secao.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            links.forEach(link => {
                link.classList.remove('ativo');
                if (link.getAttribute('href') === '#' + section.id) {
                    link.classList.add('ativo');
                }
            });
        }
    });
});