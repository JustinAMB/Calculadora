const operacion = document.getElementById('operacion');
const botones = document.querySelectorAll('div.botones > button:not(.borrar,.igual)');
const igual = document.querySelector('.igual');
const borrar = document.querySelector('.borrar');
borrar.addEventListener('click', () => {
    operacion.value = '';
});
igual.addEventListener('click', () => {
    try {
        operacion.value = eval(operacion.value);
    } catch (err) {
        console.error(err);
        operacion.value = 'Formato incorrecto';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    botones.forEach((boton) => {
        boton.addEventListener('click', mostrar);
    });

});
const mostrar = (e) => {
    operacion.value += e.target.innerText;
}