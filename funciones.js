function borrar() {
    document.getElementById("viviendas").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("Edad").value = "";
  }

  function verificar(){
    var op1=document.getElementById("perro").checked;
    var op2=document.getElementById("gato").checked;
    var op3=document.getElementById("pajaro").checked;
    var op4=document.getElementById("pez").checked;
    var op5=document.getElementById("tortuga").checked;
  }
  function enviar() {
    var nombre=document.getElementById('nombre').value;
    var edad=document.getElementById('Edad').value;
    var vivienda=document.getElementById('viviendas').value;

    if (nombre === ''|| edad === ' '|| vivienda === '') {
        alert('Por favor, complete todos los campos obligatorios.');
    } else {
        alert('Sus datos han sido enviados.');
        document.getElementById('datos').submit();
    }
}
