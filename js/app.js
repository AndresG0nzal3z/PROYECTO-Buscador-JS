/* VARIABLES */

// Contenedor de los resultados
const resultado = document.querySelector("#resultado");

// Selects
const SelectMarca = document.querySelector("#marca");
const SelectYear = document.querySelector("#year");
const SelectMinimo = document.querySelector("#minimo");
const SelectMaximo = document.querySelector("#maximo");
const SelectPuertas = document.querySelector("#puertas");
const SelectTransmision = document.querySelector("#transmision");
const SelectColor = document.querySelector("#color");

const max = new Date().getFullYear();
const min = max - 10;

// Generar los datos de la busqueda
const datosBusqueda = {
  marca: "",
  modelo: "",
  year: "",
  maximo: "",
  minimo: "",
  puertas: "",
  color: "",
  transmision: "",
};

/* EVENTOS */

// Eventos de los select de datosBusqueda
SelectMarca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;
  filtrarAuto();
});
SelectColor.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
  filtrarAuto();
});
SelectYear.addEventListener("change", (e) => {
  datosBusqueda.year = e.target.value;
  filtrarAuto();
});
SelectMaximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
  filtrarAuto();
});
SelectMinimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
  filtrarAuto();
});
SelectPuertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = e.target.value;
  filtrarAuto();
});
SelectTransmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
  filtrarAuto();
});

document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos); //Muestra los autos al cargar
  llenarSelect(); //LLena las opciónes de los select
});

/* FUNCIONES */

function mostrarAutos(autos) {
  // Limpiar html previo
  limpiarHtml();

  autos.forEach((auto) => {
    const { marca, modelo, year, precio, puertas, color, transmision } = auto;
    const autoHTML = document.createElement("p");
    autoHTML.textContent = `Marca: ${marca} - Modelo: ${modelo} - Año: ${year} - Precio: ${precio} - Puertas: ${puertas} - Color: ${color} - Transmision: ${transmision}`;

    //Insertar en el html
    resultado.appendChild(autoHTML);
  });
}

function limpiarHtml() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion); //Agrega las opciónes de año al select
  }
}

function filtrarAuto() {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);
    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        sinResultados();
    }
}
function sinResultados(){
    limpiarHtml();

    // creando mensaje 
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados';
    resultado.appendChild(noResultado);
}
function filtrarMarca(auto) {
  if (datosBusqueda.marca) {
    return auto.marca === datosBusqueda.marca;
  } else {
    return auto;
  }
}
function filtrarYear(auto) {
  if (datosBusqueda.year) {
    return auto.year === parseInt(datosBusqueda.year);
  } else {
    return auto;
  }
}
function filtrarMinimo(auto) {
  if (datosBusqueda.minimo) {
    return auto.precio >= parseInt(datosBusqueda.minimo);
  } else {
    return auto;
  }
}
function filtrarMaximo(auto) {
  if (datosBusqueda.maximo) {
    return auto.precio <= parseInt(datosBusqueda.maximo);
  } else {
    return auto;
  }
}
function filtrarPuertas(auto) {
  if (datosBusqueda.puertas) {
    return auto.puertas === parseInt(datosBusqueda.puertas);
  } else {
    return auto;
  }
}
function filtrarTransmision(auto) {
  if (datosBusqueda.transmision) {
    return auto.transmision === datosBusqueda.transmision;
  } else {
    return auto;
  }
}
function filtrarColor(auto) {
    if (datosBusqueda.color) {
      return auto.color === datosBusqueda.color;
    } else {
      return auto;
    }
  }
