// =====================================
// PROGRESO DE LA GRAN AVENTURA
// =====================================


// =====================================
// PUNTOS
// =====================================

const PUNTOS_NECESARIOS = 80;

function obtenerPuntos() {

    return Number(
        localStorage.getItem("puntosAlgebra")
    ) || 0;

}


function guardarPuntos(puntos) {

    localStorage.setItem(
        "puntosAlgebra",
        puntos
    );

}


function sumarPuntos(cantidad) {

    let puntosActuales =
        obtenerPuntos();

    puntosActuales += cantidad;

    guardarPuntos(
        puntosActuales
    );

    return puntosActuales;

}


// =====================================
// CAPÍTULOS COMPLETADOS
// =====================================

function obtenerCapitulosCompletados() {

    return Number(
        localStorage.getItem(
            "capitulosCompletados"
        )
    ) || 0;

}


function completarCapitulo(numero) {

    let completados =
        obtenerCapitulosCompletados();

    if (numero > completados) {

        localStorage.setItem(
            "capitulosCompletados",
            numero
        );

    }

}


function capituloDesbloqueado(numero) {

    if (numero === 1) {

        return true;

    }

    return obtenerCapitulosCompletados()
        >= numero - 1;

}


// =====================================
// ❤️ VIDAS
// =====================================

const VIDAS_MAXIMAS = 3;


function obtenerVidas() {

    const vidasGuardadas =
        localStorage.getItem(
            "vidasAlgebra"
        );

    // Si todavía no existen vidas,
    // comenzamos con 3.

    if (vidasGuardadas === null) {

        localStorage.setItem(
            "vidasAlgebra",
            VIDAS_MAXIMAS
        );

        return VIDAS_MAXIMAS;

    }

    return Number(vidasGuardadas);

}


function guardarVidas(vidas) {

    localStorage.setItem(
        "vidasAlgebra",
        vidas
    );

}


function perderVida() {

    let vidas =
        obtenerVidas();

    if (vidas > 0) {

        vidas--;

        guardarVidas(vidas);

    }

    return vidas;

}


function recuperarVidas() {

    guardarVidas(
        VIDAS_MAXIMAS
    );

    return VIDAS_MAXIMAS;

}


// =====================================
// 🔄 REINICIAR AVENTURA
// =====================================

function reiniciarAventura() {

    localStorage.removeItem(
        "puntosAlgebra"
    );

    localStorage.removeItem(
        "capitulosCompletados"
    );

    localStorage.removeItem(
        "nombreEstudiante"
    );

    localStorage.removeItem(
        "vidasAlgebra"
    );

    location.reload();

}