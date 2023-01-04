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

/**
 * Todos los eventos de los select
 */
eventos.forEach(element => {
  element.addEventListener('change', e => {
    /**
     * e.target.id devuelve el select que se ha seleccionado
     * e.target.value devuelve el valor del select
     */
    datos[e.target.id] = e.target.value;
    datos[e.target.id] = e.target.value;
    datos[e.target.id] = e.target.value;
    datos[e.target.id] = e.target.value;
    datos[e.target.id] = e.target.value;
    datos[e.target.id] = e.target.value;
    filtroCoches();
  });
});

/**
 * Crea estructura HTML para mostrar los coches de la lista
 */
const resultados = (autos) => {
  limpiarAutos();
  autos.forEach(coche => {
    const mostrarResultados = document.createElement('p');
    const { marca, modelo, year, precio, puertas, color, transmision } = coche;
    mostrarResultados.textContent = `
          Marca:        ${marca}
          Modelo:       ${modelo}
          Año:          ${year}
          Precio:       ${precio}
          Puertas:      ${puertas}
          Color:        ${color}
          Transmisión:  ${transmision}
        `
    resultado.appendChild(mostrarResultados);
  })
}

/**
 * Limpia el bloque resultado
 */
const limpiarAutos = () => {
  resultado.innerHTML = '';
}

/**
 * Filtro por marca
 * @param {Array} auto coches filtrados, dependiendo de la marca
 * @returns Array con los coches filtrados por marca
 */
const filtrarMarca = (auto) => {
  const { marca } = datos;
  if (marca) {
    return auto.marca === marca;
  }
  return auto;
}

/**
 * Filtro por anio
 * @param {Array} auto coches filtrados, dependiendo del anio
 * @returns Array con los coches filtrados por anio
 */
const filtrarYear = (auto) => {
  const { year } = datos;
  if (year) {
    return auto.year === parseInt(year);
  }
  return auto;
}

/**
 * Filtro por precio minimo
 * @param {Array} auto coches filtrados, dependiendo del precio minimo
 * @returns Array con los coches filtrados por precio minimo
 */
const filtrarMinimo = (auto) => {
  const { minimo } = datos;
  const { precio } = auto;
  if (minimo) {
    return precio >= minimo;
  }
  return auto;
}

/**
 * Filtro por precio maximo
 * @param {Array} auto coches filtrados, dependiendo del precio maximo
 * @returns Array con los coches filtrados por precio maximo
 */
const filtrarMaximo = (auto) => {
  const { maximo } = datos;
  const { precio } = auto;
  if (maximo) {
    return precio <= maximo;
  }
  return auto;
}

/**
 * Filtro por cantidad de puertas
 * @param {Array} auto coches filtrados, dependiendo de la cantidad de puertas
 * @returns Array con los coches filtrados por cantidad de puertas
 */
const filtrarPuertas = (auto) => {
  const { puertas } = datos;
  if (puertas) {
    return auto.puertas === parseInt(puertas);
  }
  return auto;
}

/**
 * Filtro por transmision uatomatica o manual
 * @param {Array} auto coches filtrados, dependiendo de la transmision
 * @returns Array con los coches filtrados por tipo de transmision
 */
const filtrarTransmision = (auto) => {
  const { transmision } = datos;
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}

/**
 * Filtro por color
 * @param {Array} auto coches filtrados, dependiendo del color
 * @returns Array con los coches filtrados por color
 */
const filtrarColor = (auto) => {
  const { color } = datos;
  if (color) {
    return auto.color === color;
  }
  return auto;
}

/**
 * Todos los filtros de los selects anidados
 * Si el resultado esta vacio, muestra mensaje al usuario
 */
const filtroCoches = () => {
  const cochesFiltrados = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
  cochesFiltrados.length === 0 ? noHayResultados() : resultados(cochesFiltrados);
}

/**
 * Muestra mensaje de busqueda en caso de que no haya resultados de la busqueda
 */
const noHayResultados = () => {
  limpiarAutos();
  const mostrarResultados = document.createElement('p');
  mostrarResultados.classList.add('alerta', 'error');
  mostrarResultados.textContent = 'No hay resultados para esta búsqueda';
  resultado.appendChild(mostrarResultados);
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
resultados(autos);
