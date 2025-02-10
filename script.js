document.getElementById("searchBtn").addEventListener("click", function() {
  var query = document.getElementById("searchInput").value;
  if (query) {
      document.getElementById("searchResults").innerHTML = "Поиск выполняется...";
      
      var delay = Math.floor(Math.random() * 3000) + 3000; // Задержка 3-6 секунд

      setTimeout(function() {
          window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      }, delay);
  }
});
