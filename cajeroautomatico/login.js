//const abtn = document.getElementById('btnaceptar');
//abtn.addEventListener('click', iniciarSesion);

var cuentas = [
    { nombre: "Mali",usuario:"mali654@gmail.com", saldo: 200, contrasenia: "2578"},
    { nombre: "Gera",usuario:"gera603@gmail.com", saldo: 290, contrasenia: "8506"},
    { nombre: "Maui",usuario:"maui5874@gmail.com", saldo: 67, contrasenia: "6397"}
  ];

var cuentaSeleccionada;
var passwordInput = document.getElementById('password');

function pagopciones(){
 iniciarSesion()
}

function iniciarSesion() {
    var username = document.getElementsByName("username")[0];
    var username = usernameInput ? usernameInput.value : '';

cuentaSeleccionada = cuentas.find(cuenta => cuenta.usuario === username);
    cuentaSeleccionada = cuentas.find(cuenta => cuenta.usuario === username);

    var password = passwordInput.value;

    if (cuentaSeleccionada && password === cuentaSeleccionada.contrasenia) {
        window.location.href = "opciones.html";
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
} 