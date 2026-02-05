let imagensAtuais = [];
let indiceAtual = 0;

/**
 * @param {string|string[]} imagens 
 * @param {string} title 
 * @param {string} specialty 
 * @param {string} description 
 */

function openModal(imagens, title, specialty, description) {
    const modal = document.getElementById('projectModal');

    if (Array.isArray(imagens)) {
        imagensAtuais = imagens;
    } else {
        imagensAtuais = [imagens];
    }

    indiceAtual = 0;

    atualizarImagemModal();

    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-specialty').innerText = specialty;
    document.getElementById('modal-description').innerText = description;

    modal.style.display = 'block';

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
}

function mudarImagem(direcao) {
    indiceAtual += direcao;
    if (indiceAtual >= imagensAtuais.length) {
        indiceAtual = 0;
    } else if (indiceAtual < 0) {
        indiceAtual = imagensAtuais.length - 1;
    }

    atualizarImagemModal();
}

function atualizarImagemModal() {
    const imgElement = document.getElementById('modal-img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    imgElement.src = imagensAtuais[indiceAtual];
    if (imagensAtuais.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    window.onclick = null;
}

document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('projectModal');
    if (modal.style.display === 'block') {
        if (event.key === "Escape") {
            closeModal();
        } else if (event.key === "ArrowLeft") {
            mudarImagem(-1);
        } else if (event.key === "ArrowRight") {
            mudarImagem(1);
        }
    }
});