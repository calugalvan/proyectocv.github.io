document.getElementById("btn-name").addEventListener("click", function(){
    let text = 'Ingeniera Industrial con 15 años de experiencia en Project Management de I+D, en el sector de construcción.';
    setData(text);
});

document.getElementById("btn-birthday").addEventListener("click", function(){
    let text = 'Si justo estás leyendo el día de mi cumpleaños y me querés llamar, perdona si no te contesto.';
    setData(text);
});

document.getElementById("btn-address").addEventListener("click", function(){
    let text = 'Puedes pasar a visitarme el día que quieras. Menos el de mi cumpleaños que estaré ocupada.';
    setData(text);
});

function setData(text) {
    document.getElementsByClassName("text-info")[0].style.display = 'block';
    document.getElementById("text").innerHTML = text;
}