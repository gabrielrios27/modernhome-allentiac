function cerrar() {
    document.getElementById('cerrar-menu-lateral').style.display='none';
    document.getElementById('menu-vertical').style.display='none';
    document.getElementById('contenedor-general').style.width="100%";
    document.getElementById('contenedor-general').style.paddingLeft="42px";
    document.getElementById('abrir-menu-lateral').style.display='flex';
}
function abrir() {
    document.getElementById('abrir-menu-lateral').style.display='none';
    document.getElementById('cerrar-menu-lateral').style.display='inline-block';
    document.getElementById('menu-vertical').style.display='inline-block';
    document.getElementById('contenedor-general').style.width="80%";
    document.getElementById('contenedor-general').style.paddingLeft="0";
}

