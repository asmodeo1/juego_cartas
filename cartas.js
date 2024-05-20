
function mover(evt) {
    let fuerza = document.getElementById("fuerza");
    const elegidos = document.getElementById("elegidos");
    if (evt.currentTarget.parentNode.id === "elegidos") {
        const disponibles = document.getElementById("disponibles");
        disponibles.appendChild(evt.currentTarget);
        fuerza.textContent = parseInt(fuerza.textContent) - parseInt(evt.currentTarget.dataset.fuerza);
    } else if (elegidos.querySelector(`[data-planeta=${evt.currentTarget.dataset.planeta}`)) {
        document.getElementById("mensaje").style.display = "block";
    } else {
        elegidos.appendChild(evt.currentTarget);
        fuerza.textContent = parseInt(fuerza.textContent) + parseInt(evt.currentTarget.dataset.fuerza);
    }
}

function cerrarMensaje() {
    document.getElementById("mensaje").style.display = "none";
}

const cartas = document.getElementsByClassName("carta");
for (const carta of cartas) {
    carta.addEventListener("click", mover);
}
document.getElementById("cerrar").addEventListener("click", cerrarMensaje);