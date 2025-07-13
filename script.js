const container = document.getElementById("malla-container");

const agrupadas = {};
materias.forEach(m => {
  if (!agrupadas[m.ciclo]) agrupadas[m.ciclo] = [];
  agrupadas[m.ciclo].push(m);
});

Object.keys(agrupadas).forEach(ciclo => {
  const div = document.createElement("div");
  div.className = "ciclo";
  const titulo = document.createElement("h3");
  titulo.textContent = ciclo;
  div.appendChild(titulo);

  agrupadas[ciclo].forEach(m => {
    const matDiv = document.createElement("div");
    matDiv.className = "materia";
    matDiv.innerHTML = `<strong>${m.id}</strong>: ${m.nombre}`;
    div.appendChild(matDiv);
  });

  container.appendChild(div);
});
