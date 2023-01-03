const resultado = document.querySelector('#resultado');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;
const divSelector = document.querySelector('.row');
const marca = divSelector.querySelector('#marca');
const year = divSelector.querySelector('#year');
const precioMin = divSelector.querySelector('#minimo');
const precioMax = divSelector.querySelector('#maximo');
const puertas = divSelector.querySelector('#puertas');
const transmision = divSelector.querySelector('#transmision');
const color = divSelector.querySelector('#color');
const eventos = [marca, year, precioMin, precioMax, puertas, transmision, color];

const datos = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmision: '',
  color: ''
}

eventos.forEach(element => {
  element.addEventListener('change', e => {
    datos[e.target.id] = e.target.value;
    datos[e.target.id] = e.target.value;
    datos[e.target.id] = e.target.value;
    datos[e.target.id] = e.target.value;
    datos[e.target.id] = e.target.value;
    datos[e.target.id] = e.target.value;
    filtroCoches(e.target.id, e.target.value);
  });
});

/**
 * Crea estructura HTML para mostrar los coches de la lista
 */
const resultados = () => {
  autos.forEach(coche => {
    const mostrarResultados = document.createElement('p');
    const { marca, modelo, year, precio, puertas, color, transmision } = coche;
    mostrarResultados.textContent = `
          Marca :        ${marca}
          Modelo :       ${modelo}
          Año :          ${year}
          Precio :       ${precio}
          Puertas :      ${puertas}
          Color :        ${color}
          Transmisión :  ${transmision}
        `
    resultado.appendChild(mostrarResultados);
  })
}

const filtroCoches = (elemento, valor) => {
  const cochesFiltrados = autos.filter(autos => autos[elemento] === valor);
  console.log(cochesFiltrados);
}

/**
 * Genera un array con los ultimos 10 anios desde el anio actual
 * @returns Array con los 10 ultimos anios
 */
const generarYears = () => {
  const lastYears = [];
  for (let i = maxYear; i > minYear; i--) {
    lastYears.push(i);
  }
  return lastYears;
}

/**
 * incrusta en el select year los 10 ultimos anios
 */
const rellenarOption = () => {
  generarYears().forEach(anio => {
    const option = document.createElement('option');
    option.value = anio;
    option.textContent = anio;
    year.appendChild(option);
  });
}

rellenarOption();
resultados();
