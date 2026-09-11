// NOVA BARBERS
// Funciones básicas de la página

document.addEventListener("DOMContentLoaded", () => {

    console.log("NOVA BARBERS cargado correctamente.");

    const buttons = document.querySelectorAll("a[href^='#']");

    buttons.forEach(button => {

        button.addEventListener("click", event => {

            const target = document.querySelector(button.getAttribute("href"));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});
