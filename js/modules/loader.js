export function initLoader() {
    window.addEventListener("load", function () {
        const loadingOverlay = document.querySelector(".loading-overlay");
        if (loadingOverlay) {
            // Eliminar el timeout artificial. Si la página cargó, mostramos el contenido.
            loadingOverlay.style.opacity = "0";
            loadingOverlay.style.transition = "opacity 0.5s ease";

            setTimeout(() => {
                loadingOverlay.style.display = "none";
            }, 500);
        }
    });
}
