
function moverCarta(evento) {
    const elegidos = document.getElementById('elegidos');
    const disponibles = document.getElementById('disponibles');
    const fuerza = document.getElementById("fuerza");
    // currentTarget es el elemento sobre el que se produjo el evento
    const carta = evento.currentTarget;
    // parentNode es el nodo padre de un elemento
    if(carta.parentNode == elegidos) {
        // Como está en elegidos lo muevo a disponibles
        // appendChild mueve un elemento si está en otro nodo
        disponibles.appendChild(carta);
        // Resto la fuerza que hay en las cartas elegidas
        // Con dataset accedemos al valor del atributo data- indicado (en este caso data-fuerza)
        // Solo al sumar hay que hacer los parseInt
        fuerza.textContent = fuerza.textContent - carta.dataset.fuerza;

    } else {
        // Vamos a ver si hay una carta del mimo planeta en elegidos
        const cartas = elegidos.getElementsByClassName("carta");
        for (const c of cartas) {
            if(c.dataset.planeta == carta.dataset.planeta) {
                // Mostramos el mensaje de error
                const mensaje = document.getElementById('mensaje');
                mensaje.style.display = "block";
                // Salimos de la función para que no haga luego el appendChild
                return;
            }
        }
        /* Otra manera de comprobar si ya hay una carta de ese planeta en elegidos 
       if(elegidos.querySelector(`[data-planeta='${carta.dataset.planeta}']`) != null) {
         // Mostramos el mensaje de error
         const mensaje = document.getElementById('mensaje');
         mensaje.style.display = "block";
         // Salimos de la función para que no haga luego el appendChild
         return;
       }
       */

        // Como está en disponibles lo muevo a elegidos
        elegidos.appendChild(carta);
        // Sumamos la fuerza que hay en las cartas elegidas
        fuerza.textContent = parseInt(fuerza.textContent) + parseInt(carta.dataset.fuerza);
    }
}

function cerrarMensaje() {
    const mensaje = document.getElementById('mensaje');
    mensaje.style.display = "none";
}

const cartas = document.getElementsByClassName('carta');
for (const carta of cartas) {
    carta.addEventListener("click", moverCarta);
    /* Como no hemos añadido el planeta de cada carta en HTML, lo añadimos ahora con
    JavaScript */
    const p = document.createElement("p")
    p.textContent = carta.dataset.planeta;
    carta.appendChild(p);
}

document.getElementById('cerrar').addEventListener("click", cerrarMensaje);