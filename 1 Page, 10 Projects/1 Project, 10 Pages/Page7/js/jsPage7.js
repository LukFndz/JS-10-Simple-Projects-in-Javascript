const chk = document.getElementById("chk_change");

chk.addEventListener('change', () => {
    document.body.classList.toggle('activo');
});