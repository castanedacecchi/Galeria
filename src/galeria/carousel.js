const galeria = document.getElementById('galeria');
const carousel = (direccion) => {

    const opciones = {
        root: document.querySelector('.galeria__carousel'),
        rootMargin: '0px',
        threshold: 0.9,
    }
    const observer = new IntersectionObserver((entradas) => {
        const slidesVisibles = entradas.filter((entrada) => {
            if (entrada.isIntersecting === true) {
                return entrada;
            }
        });

        if (direccion === 'atras') {

        } else if (direccion === 'adelante') {
            const ultimoSlideVisible = slidesVisibles[slidesVisibles.length - 1];
            const indexUltimoSlideVisible = entradas.indexOf(ultimoSlideVisible);

            if (entradas.length - 1 > indexUltimoSlideVisible) {
                entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start',
                });
            }

        }

        const slides = galeria.querySelectorAll('.galeria__carousel-slide');
        slides.forEach((slide) => {
            observer.unobserve(slide);
        });

    }, opciones);

    const slides = galeria.querySelectorAll('.galeria__carousel-slide');
    slides.forEach((slide) => {
        observer.observe(slide);
    });

}



export default carousel;