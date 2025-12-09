function openModal(imageSrc, title, specialty, description) {
    const modal = document.getElementById('projectModal');
    
    document.getElementById('modal-img').src = imageSrc;
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

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    
    window.onclick = null;
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});