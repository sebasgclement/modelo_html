const $titulo = document.getElementById('titular');

function cambiar(){
    if ($titulo.innerText === 'Hola Mundo'){
        $titulo.innerText = 'Hola Mundo con Javascript';
        $titulo.style.color = 'red';
        $titulo.style.textAlign = 'center';
    } else if ($titulo.innerText === 'Hola Mundo con Javascript'){
        $titulo.innerText = 'Hola Mundo';
        $titulo.style.color = 'black';
        $titulo.style.textAlign = 'left';
    }
}

function crearDiv(){
    var txt = document.createTextNode("Javascript permite crear páginas dinámicaas");
    var bloque = document.createElement('div');
    bloque.setAttribute("style", 'background: red; color: withTheme; text-align:center');
    bloque.appendChild(txt);
    document.body.appendChild(bloque);
}

