document.getElementById("liveToastBtn").addEventListener("click", function() {
  $('#liveToast').toast('show'); // Muestra el toast
  setTimeout(function() {
    window.location.href = "index.html"; // Redirige después de que el toast desaparezca
  }, 3000); // Redirige después de 2 segundos
});

function updateClock() {
  const now = new Date(); // Obtiene la fecha y hora actuales
  const hours = now.getHours().toString().padStart(2, '0'); // Obtiene las horas (formato 24h)
  const minutes = now.getMinutes().toString().padStart(2, '0'); // Obtiene los minutos
  const seconds = now.getSeconds().toString().padStart(2, '0'); // Obtiene los segundos

  // Actualiza el contenido del elemento con id "clock"
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);

// Llama inmediatamente para mostrar la hora sin esperar el primer segundo
updateClock();

document.addEventListener("DOMContentLoaded", function() {
  flatpickr("#fechauser", {
    mode: "range",           // Activa el modo de selección de rango
    dateFormat: "Y-m-d",     // Formato de fecha
    locale: "es"             // Opcional: cambia el idioma a español
  });

});