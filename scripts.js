//En pruebas y proceso de funcionalidad
function validarFormulario() {
  // Validar archivos
  var archivos = document.getElementById('pregunta');
  if (archivos.files.length === 0) {
      alert('Por favor, sube al menos un archivo.');
      return false;
  }

  // Validar radios
  var opciones = document.getElementsByName('pregunta');
  var radioSeleccionado = false;
  for (var i = 0; i < opciones.length; i++) {
      if (opciones[i].checked) {
          radioSeleccionado = true;
          break;
      }
  }
  if (!radioSeleccionado) {
      alert('Por favor, selecciona una opción en el campo de radio.');
      return false;
  }

  // Validar campo escrito
  var escrito = document.getElementById('pregunta').value;
  if (escrito.trim() === '') {
      alert('Por favor, completa el campo escrito.');
      return false;
  }

  // Validar preguntas de opción múltiple dinámicamente
  var numPreguntas = 5; // Cambia esto al número real de preguntas que tienes
  for (var j = 0; j < numPreguntas; j++) {
      var preguntaID = 'pregunta_' + j;
      var radiosPregunta = document.getElementsByName(preguntaID);
      var radioPreguntaSeleccionado = false;

      for (var k = 0; k < radiosPregunta.length; k++) {
          if (radiosPregunta[k].checked) {
              radioPreguntaSeleccionado = true;
              break;
          }
      }

      if (!radioPreguntaSeleccionado) {
          alert('Por favor, selecciona una opción en la pregunta ' + (j + 1));
          return false;
      }
  }

  // Si todos los campos están completos, el formulario se envía
  return true;
}