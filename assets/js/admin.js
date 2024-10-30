document.addEventListener("DOMContentLoaded", function() {
  // Agrega el evento de clic al botón "btnadmin"
  function updateClock() {
      const now = new Date(); // Obtiene la fecha y hora actuales
      const hours = now.getHours().toString().padStart(2, '0'); // Obtiene las horas (formato 24h)
      const minutes = now.getMinutes().toString().padStart(2, '0'); // Obtiene los minutos
      const seconds = now.getSeconds().toString().padStart(2, '0'); // Obtiene los segundos
    
      // Actualiza el contenido del elemento con id "clockadmin"
      document.getElementById('clockadmin').textContent = `${hours}:${minutes}:${seconds}`;
  }

  // Actualiza el reloj cada segundo
  setInterval(updateClock, 1000);

  // Llama inmediatamente para mostrar la hora sin esperar el primer segundo
  updateClock();
});

document.getElementById("btnadmin").addEventListener("click", function() {
  window.location.href = "index.html"; 
});