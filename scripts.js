document.getElementById('submitBtn').addEventListener('click', function() {
    var confirmacion = confirm('¿Estás seguro de enviar el formulario?');
    if (confirmacion) {
      // Obtener el formulario
      var formulario = document.forms[0]; // Puedes ajustar el índice si hay varios formularios en la página
  
      // Enviar el formulario
      formulario.submit();
    }
  });
  