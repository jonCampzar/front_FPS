document.getElementById("liveToastBtn").addEventListener("click", function() {
  $('#liveToast').toast('show'); // Muestra el toast
  setTimeout(function() {
    window.location.href = "index.html"; // Redirige después de que el toast desaparezca
  }, 3000); // Redirige después de 2 segundos
});