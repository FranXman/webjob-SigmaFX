document.addEventListener("DOMContentLoaded", function () {
    // Menús desplegables independientes
    document.querySelectorAll('.dropdown-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isOpen = content.style.maxHeight;

            if (isOpen && isOpen !== "0px") {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // WhatsApp
    document.querySelectorAll('.service-item').forEach(item => {
        item.addEventListener('click', function () {
            const serviceName = encodeURIComponent(this.getAttribute('data-service'));
            const whatsappURL = ` https://wa.me/63642087?text=Hola,%20me%20interesa%20el%20servicio:%20${serviceName}`;
            window.open(whatsappURL, '_blank');
        });
    });

    // Toggle redes sociales
    const toggleBtn = document.getElementById('socialBtn');
    const icons = document.getElementById('socialIcons');

    toggleBtn?.addEventListener('click', () => {
        icons.style.display = icons.style.display === 'flex' ? 'none' : 'flex';
    });
});

// Animación Matrix
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = '01'.split('');
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff00';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 50);
document.addEventListener("DOMContentLoaded", function () {
    // Inicializar contador
    const visitorKey = 'sigmaFX_visited';
    const countKey = 'sigmaFX_totalVisits';

    if (!localStorage.getItem(visitorKey)) {
        // Es nueva visita
        localStorage.setItem(visitorKey, 'true');

        // Incrementar contador global
        let totalVisits = parseInt(localStorage.getItem(countKey)) || 0;
        totalVisits++;
        localStorage.setItem(countKey, totalVisits.toString());
    }

    // Mostrar el contador
    const counterElement = document.getElementById('visitorCount');
    if (counterElement) {
        const currentCount = localStorage.getItem(countKey) || '0';
        counterElement.textContent = currentCount;
    }
});