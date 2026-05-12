// Este evento corre quando a App é "instalada" no telemóvel
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("intro").textContent = data.introducao;
    document.getElementById("objetivo").textContent = data.objetivo;
    document.getElementById("publico").textContent = data.publico;
  });
