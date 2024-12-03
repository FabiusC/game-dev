document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".nav-buttons button"); // Selecciona los botones del header
    // Función para desplazarse suavemente a la sección seleccionada
    const scrollToSection = (sectionId) => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth", // Desplazamiento suave
                block: "start", // Alinea la sección al inicio de la ventana
            });
        }
    };

    // Agrega eventos de clic a los botones de navegación
    navButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-target"); // Obtén el ID del objetivo
            scrollToSection(targetId); // Llama a la función para desplazarse
        });
    });

    // --- Lógica del Carrusel ---
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    if (carouselItems.length > 0 && prevBtn && nextBtn) {
        let currentIndex = 0;

        const updateCarousel = () => {
            carouselItems.forEach((item, index) => {
                // Restablece los estilos de todas las tarjetas
                item.style.opacity = "0"; // Elementos no enfocados tienen opacidad 0
                item.style.transform = "translateX(0) scale(0.8)";
                item.style.zIndex = "0";

                if (index === currentIndex) {
                    // Elemento enfocado
                    item.style.opacity = "1"; // 100% de opacidad
                    item.style.transform = "translateX(0) scale(1)";
                    item.style.zIndex = "2"; // Llevar al frente
                }
            });
        };

        const navigateCarousel = (direction) => {
            if (direction === "prev") {
                currentIndex =
                    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            } else if (direction === "next") {
                currentIndex = (currentIndex + 1) % carouselItems.length;
            }
            updateCarousel();
        };

        prevBtn.addEventListener("click", () => navigateCarousel("prev"));
        nextBtn.addEventListener("click", () => navigateCarousel("next"));

        // Estado inicial del carrusel
        updateCarousel();

        // Cambio automático de tarjeta cada 5 segundos
        setInterval(() => navigateCarousel("next"), 5000);
    } else {
        console.error("Carousel elements not found!");
    }

    // --- Lógica del Carrusel de Game Cards ---
    const gameCards = document.querySelectorAll(".game-card");

    if (gameCards.length > 0) {
        let activeIndex = 0;

        const updateGameCards = () => {
            gameCards.forEach((card, index) => {
                card.style.opacity = "0.5";
                card.style.transform = "scale(0.8)";
                card.style.zIndex = "0";

                if (index === activeIndex) {
                    card.style.opacity = "1";
                    card.style.transform = "scale(1)";
                    card.style.zIndex = "2";
                } else if (
                    index ===
                    (activeIndex - 1 + gameCards.length) % gameCards.length
                ) {
                    card.style.transform = "translateX(-110%) scale(0.9)";
                } else if (index === (activeIndex + 1) % gameCards.length) {
                    card.style.transform = "translateX(110%) scale(0.9)";
                }
            });
        };

        // Cambio automático de tarjetas
        setInterval(() => {
            activeIndex = (activeIndex + 1) % gameCards.length;
            updateGameCards();
        }, 3000);

        // Estado inicial
        updateGameCards();
    } else {
        console.error("Game preview elements not found!");
    }

    // --- Lógica del Formulario de Contacto ---
    const sendButton = document.getElementById("send-button");
    const messageBox = document.getElementById("message");

    sendButton.addEventListener("click", () => {
        const message = messageBox.value.trim();
        if (message) {
            messageBox.value = ""; // Limpia el cuadro de texto
        } else {
            alert("Please write a message before sending.");
        }
    });
});
