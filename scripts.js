document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.btn-cta');
    ctaButton.addEventListener('click', () => {
        alert('¡Descubre todo lo que tenemos para ti!');
        window.location.href = '#services';
    });
});