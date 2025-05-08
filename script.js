function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const isActive = element.classList.toggle('active');

    if (isActive) {
        answer.style.display = 'block'; // Mostrar respuesta
    } else {
        answer.style.display = 'none'; // Ocultar respuesta
    }
}