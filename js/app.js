/* =========================================
   APLICACIÓN PRINCIPAL
========================================= */

function comenzarAventura() {

    const nombre =
        prompt(
            "🧭 Antes de comenzar la aventura,\n\n" +
            "¿Cuál es tu nombre?"
        );

    if (!nombre) {

        alert(
            "⚠️ Necesitas ingresar tu nombre " +
            "para comenzar."
        );

        return;

    }

    localStorage.setItem(
        "nombreEstudiante",
        nombre
    );

    alert(
        "🎉 ¡Bienvenido, " +
        nombre +
        "!\n\n" +
        "Tu aventura por el mundo del " +
        "álgebra comienza ahora."
    );

}
/* =========================================
   ABRIR CAPÍTULO
========================================= */

function abrirCapitulo(numero) {

    if (!capituloDesbloqueado(numero)) {

        alert(
            "🔒 Este capítulo todavía está bloqueado.\n\n" +
            "Primero debes superar el capítulo anterior."
        );

        return;
    }


    window.location.href =
        "capitulos/capitulo" +
        numero +
        ".html";

}
/* =========================================
   ACTUALIZAR MAPA
========================================= */

function actualizarMapa() {

    const completados =
        obtenerCapitulosCompletados();

    const puntos =
        obtenerPuntos();

const nombre =
    localStorage.getItem(
        "nombreEstudiante"
    ) || "Explorador";


const nombreMostrar =
    document.getElementById(
        "nombreMostrar"
    );


if (nombreMostrar) {

    nombreMostrar.textContent =
        nombre;

}
    /* -----------------------------
       ACTUALIZAR PUNTOS
    ----------------------------- */

    const elementoPuntos =
        document.getElementById("puntos");

    if (elementoPuntos) {

        elementoPuntos.textContent =
            puntos;

    }


    /* -----------------------------
       ACTUALIZAR CAPÍTULOS
    ----------------------------- */

    for (let numero = 1; numero <= 5; numero++) {

        const tarjeta =
            document.getElementById(
                "capitulo" + numero
            );

        if (!tarjeta) continue;


        const estado =
            tarjeta.querySelector(".estado");


        /* CAPÍTULO COMPLETADO */

        if (numero <= completados) {

            tarjeta.classList.remove(
                "bloqueado"
            );

            tarjeta.classList.add(
                "completado"
            );

            tarjeta.onclick = function() {

                abrirCapitulo(numero);

            };


            if (estado) {

                estado.textContent =
                    "⭐ Completado";

                estado.className =
                    "estado disponible";

            }

        }


        /* CAPÍTULO DESBLOQUEADO */

        else if (
            capituloDesbloqueado(numero)
        ) {

            tarjeta.classList.remove(
                "bloqueado"
            );

            tarjeta.classList.add(
                "disponible"
            );

            tarjeta.onclick = function() {

                abrirCapitulo(numero);

            };


            if (estado) {

                estado.textContent =
                    "🔓 Jugar";

                estado.className =
                    "estado disponible";

            }

        }


        /* CAPÍTULO BLOQUEADO */

        else {

            tarjeta.classList.remove(
                "disponible",
                "completado"
            );

            tarjeta.classList.add(
                "bloqueado"
            );

            tarjeta.onclick = function() {

                alert(
                    "🔒 Capítulo bloqueado.\n\n" +
                    "Supera el capítulo anterior " +
                    "para continuar."
                );

            };


            if (estado) {

                estado.textContent =
                    "🔒 Bloqueado";

                estado.className =
                    "estado bloqueado";

            }

        }

    }


    /* -----------------------------
       BARRA DE PROGRESO
    ----------------------------- */

    const barra =
        document.getElementById(
            "barraProgreso"
        );

    const textoProgreso =
        document.getElementById(
            "textoProgreso"
        );


    const porcentaje =
        (completados / 5) * 100;


    if (barra) {

        barra.style.width =
            porcentaje + "%";

    }


    if (textoProgreso) {

        textoProgreso.textContent =
            completados + " / 5 capítulos";

    }

}


/* =========================================
   EJECUTAR AL CARGAR LA PÁGINA
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    actualizarMapa
);