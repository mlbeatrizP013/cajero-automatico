

var operacionesDiv = document.querySelector('.opcion');

function mostrarOpciones() {
    operacionesDiv.style.display = 'block';
  }

  function ocultarOpciones() {
    operacionesDiv.style.display = 'none';
  }

  function consultarSaldo() {
    alert("Saldo actual: $" + cuentaSeleccionada.saldo);
    preguntarNuevaAccion();
  }

  function ingresarMonto() {
    var monto = prompt("Ingrese el monto:");
    monto = parseFloat(monto);

    if (!isNaN(monto) && monto > 0) {
        cuentaSeleccionada.saldo += monto;
        alert("Monto ingresado: $" + monto + "\nNuevo saldo: $" + cuentaSeleccionada.saldo);
        preguntarNuevaAccion();
    } else {
        alert("Ingrese un monto válido.");
    }
  }

  function retirarMonto() {
    var monto = prompt("Ingrese el monto a retirar:");
    monto = parseFloat(monto);

    if (!isNaN(monto) && monto > 0 && cuentaSeleccionada.saldo - monto >= 10 && cuentaSeleccionada.saldo - monto <= 990) {
        cuentaSeleccionada.saldo -= monto;
        alert("Monto retirado: $" + monto + "\nNuevo saldo: $" + cuentaSeleccionada.saldo);
        preguntarNuevaAccion();
    } else {
        alert("Monto inválido o excede los límites permitidos.");
    }
  }

 // function cerrarCuenta() {
 //   ocultarOpciones();
 //   alert("Cuenta cerrada. Seleccione otra cuenta para continuar.");
 // }

  function preguntarNuevaAccion() {
    var opcion = confirm("¿Desea realizar otra operación?");
    if (opcion) {
      mostrarOpciones();
    } else {
      //cerrarCuenta();
      window.location.href = "login.html";
    }
  }