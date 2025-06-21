const trailers = {
    '1': 'https://www.youtube.com/embed/C0BMx-qxsP4',
    '2': 'https://www.youtube.com/embed/XGk2EfbD_Ps',
    '3': 'https://www.youtube.com/embed/M7XM597XO94',
    '4': 'https://www.youtube.com/embed/qEVUtrk8_B4'
};

let trailerAbierto = null;

function mostrarTrailer(id) {
    const trailerContainer = document.getElementById('trailer-container');
    const iframeContainer = document.getElementById('iframe-container');

    if (trailerContainer.style.display === 'block' && trailerAbierto === id) {
        cerrarTrailer();
        return;
    }

    iframeContainer.innerHTML = `
        <iframe width="100%" height="500" 
            src="${trailers[id]}" 
            title="Trailer John Wick ${id}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;

    trailerContainer.style.display = 'block';
    trailerAbierto = id;

    trailerContainer.scrollIntoView({ behavior: 'smooth' });
}

function cerrarTrailer() {
    const trailerContainer = document.getElementById('trailer-container');
    const iframeContainer = document.getElementById('iframe-container');

    trailerContainer.style.display = 'none';
    iframeContainer.innerHTML = '';
    trailerAbierto = null;

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

