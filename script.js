window.sr = ScrollReveal({ reset: true});
sr.reveal('.aboutme', {delay: 200})
sr.reveal('.projects',{delay: 400});
sr.reveal('#myImg', {
    delay: 200,
    distance: '50px',
    duration: 600,
    easing: 'ease-out',
    origin: 'right'
});

// Revela o parágrafo #textoAboutme com um atraso de 500ms e animação de baixo para cima
sr.reveal('.textoAboutme', {
    delay: 200,
    distance: '50px',
    duration: 600,
    easing: 'ease-out',
    origin: 'bottom'
});

sr.reveal('.parteBaixo', {
    delay: 200,
    distance: '50px',
    duration: 600,
    easing: 'ease-out',
    origin: 'bottom'
});

sr.reveal('.cardContainer', {
    delay: 200,
    distance: '50px',
    duration: 600,
    easing: 'ease-out',
    origin: 'bottom'
});

sr.reveal('.divProjetos', {
    delay: 200,
    distance: '50px',
    duration: 600,
    easing: 'ease-out',
    origin: 'top'
});




