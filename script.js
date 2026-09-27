/* =========================================
   PROYEC LAB V9
   DIRECTORIO DE SAUSAL
========================================= */


/* =========================================
   DATOS DE LOS LUGARES
========================================= */

const places = {

  /* =========================
     COMIDA
  ========================== */

  comida: [

    {
      icon: "🍗",

      name: "Mari Mar Restaurante",

      type: "Restaurante",

      location: "Sausal 13700",

      history:
        "Espacio gastronómico local incluido en el directorio de ProyecLab.",

      description:
        "Opción de comida local para consultar y visitar.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Mari+Mar+Restaurante+Sausal+La+Libertad"
    },


    {
      icon: "🍤",

      name: "Restaurante & Cevichería Keylita",

      type: "Restaurante y cevichería",

      location: "Sausal 13700",

      history:
        "Establecimiento gastronómico registrado en la zona de Sausal.",

      description:
        "Lugar para consultar opciones de comida y ceviche.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Restaurante+Cevicheria+Keylita+Sausal+La+Libertad"
    },


    {
      icon: "🍽️",

      name: "Restaurant Liz",

      type: "Restaurante",

      location: "C. La Libertad 37, Sausal 13700",

      history:
        "Negocio gastronómico ubicado en Sausal.",

      description:
        "Alternativa local para conocer y consultar.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Restaurant+Liz+C+La+Libertad+37+Sausal"
    },


    {
      icon: "🍗",

      name: "Pollería Bendición de Dios",

      type: "Pollería",

      location: "C. Lima 35, Sausal 13700",

      history:
        "Establecimiento de comida registrado en Sausal.",

      description:
        "Pollería local para consultar sus opciones.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Polleria+Bendicion+de+Dios+C+Lima+35+Sausal"
    },


    {
      icon: "🍗",

      name: "Pollería Yayita",

      type: "Pollería",

      location:
        "Ubicación registrada: Chicama 13700",

      history:
        "Establecimiento identificado públicamente como Pollería Yayita.",

      description:
        "Se incluye en ProyecLab, pero la ubicación registrada públicamente corresponde a Chicama; su ubicación exacta en Sausal debe confirmarse.",

      note:
        "Ubicación en Sausal por confirmar.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Polleria+Yayita+Chicama+La+Libertad"
    }

  ],


  /* =========================
     SERVICIOS
  ========================== */

  servicios: [

    {
      icon: "🛒",

      name: "Bodega / comercio local",

      type: "Comercio",

      location: "Sausal",

      history:
        "Los pequeños comercios forman parte de la actividad cotidiana de la comunidad.",

      description:
        "Busca productos de uso diario y comercios de la localidad.",

      map:
        "https://www.google.com/maps/search/?api=1&query=bodegas+Sausal+Chicama+La+Libertad"
    },


    {
      icon: "🧺",

      name: "Lavandería de Ropa Doña Luzmila",

      type: "Servicio",

      location: "Sausal",

      history:
        "Servicio local incluido como opción para los habitantes.",

      description:
        "Servicio de lavandería registrado en directorios locales.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Lavanderia+de+Ropa+Dona+Luzmila+Sausal"
    }

  ],


  /* =========================
     EDUCACIÓN
  ========================== */

  educacion: [

    {
      icon: "🎓",

      name: "I.E. José Carlos Mariátegui",

      type: "Institución educativa",

      location:
        "Sausal, Chicama, Ascope, La Libertad",

      history:
        "Fue creada el 17 de octubre de 1965 y atiende a estudiantes de Sausal y sus anexos.",

      description:
        "Institución educativa importante en la historia educativa de la comunidad.",

      map:
        "https://www.google.com/maps/search/?api=1&query=I.E.+Jose+Carlos+Mariategui+Sausal+La+Libertad"
    },


    {
      icon: "🏫",

      name: "I.E. 81971 Alfonso Ugarte",

      type: "Institución educativa",

      location:
        "Sausal, Chicama, La Libertad",

      history:
        "Centro educativo incluido en el directorio local.",

      description:
        "Opción educativa de la comunidad.",

      map:
        "https://www.google.com/maps/search/?api=1&query=I.E.+81971+Alfonso+Ugarte+Sausal"
    },


    {
      icon: "🧒",

      name: "Jardines de Sausal",

      type: "Educación inicial",

      location: "Sausal",

      history:
        "Los servicios de educación inicial forman parte de la atención educativa de la comunidad.",

      description:
        "Directorio de jardines y educación inicial. Verifica la institución exacta antes de acudir.",

      note:
        "Nombre usado como búsqueda de referencia; confirmar institución exacta.",

      map:
        "https://www.google.com/maps/search/?api=1&query=jardin+inicial+Sausal+Chicama+La+Libertad"
    }

  ],


  /* =========================
     LUGARES
  ========================== */

  lugares: [

    {
      icon: "🏛️",

      name: "Plaza de Sausal",

      type: "Espacio público",

      location:
        "Sausal, Chicama",

      history:
        "Espacio central de encuentro de la comunidad.",

      description:
        "Lugar para recorrer y conocer el centro de Sausal.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Plaza+de+Sausal+Chicama+La+Libertad"
    },


    {
      icon: "🌳",

      name: "Parque Infantil Noli",

      type: "Parque",

      location: "Sausal",

      history:
        "Espacio recreativo de la comunidad.",

      description:
        "Área destinada al encuentro y recreación.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Parque+Infantil+Noli+Sausal"
    },


    {
      icon: "🌳",

      name: "Plazuela El Maestro",

      type: "Plazuela",

      location: "Sausal",

      history:
        "Espacio público local incluido en el directorio de ProyecLab.",

      description:
        "Punto de encuentro y espacio urbano de la comunidad.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Plazuela+El+Maestro+Sausal"
    },


    {
      icon: "🏊",

      name: "Piscina de Sausal",

      type: "Espacio recreativo",

      location: "Sausal",

      history:
        "Espacio recreativo utilizado para actividades acuáticas y comunitarias.",

      description:
        "Lugar para actividades recreativas. Consulta previamente su funcionamiento.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Piscina+de+Sausal+La+Libertad"
    },


    {
      icon: "⛰️",

      name: "Cerro 1 de Mayo",

      type: "Lugar natural / cultural",

      location: "Sausal",

      history:
        "Lugar mencionado en fuentes locales en relación con actividades y tradiciones de la comunidad.",

      description:
        "Espacio de referencia local vinculado a actividades comunitarias.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Cerro+1+de+Mayo+Sausal+La+Libertad"
    }

  ],


  /* =========================
     INSTITUCIONES
  ========================== */

  instituciones: [

    {
      icon: "🏛️",

      name: "Municipalidad de Sausal",

      type: "Institución pública",

      location:
        "Sausal, Chicama, Ascope",

      history:
        "Institución vinculada a la gestión y atención de la comunidad.",

      description:
        "Consulta trámites, actividades y servicios públicos.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Municipalidad+Sausal+Chicama+La+Libertad"
    },


    {
      icon: "🏥",

      name: "Centro de Salud Alto Perú Sausal",

      type: "Salud",

      location: "Sausal",

      history:
        "Establecimiento de salud identificado para la atención de la población.",

      description:
        "Centro de referencia para servicios de salud.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Centro+de+Salud+Alto+Peru+Sausal"
    },


    {
      icon: "👮",

      name: "Comisaría Rural Sausal",

      type: "Seguridad",

      location: "Sausal",

      history:
        "Dependencia policial para la atención y seguridad de la comunidad.",

      description:
        "Punto institucional relacionado con seguridad ciudadana.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Comisaria+Rural+Sausal+La+Libertad"
    }

  ],


  /* =========================
     TRANSPORTE
  ========================== */

  transporte: [

    {
      icon: "🚌",

      name: "Terminal Terrestre Sausal",

      type: "Transporte",

      location: "Sausal",

      history:
        "Punto local utilizado para el desplazamiento de pasajeros.",

      description:
        "Referencia para consultar rutas y movilidad.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Terminal+Terrestre+Sausal+La+Libertad"
    },


    {
      icon: "🚐",

      name: "Estación de Colectivos Sausal – Casa Grande",

      type: "Colectivos",

      location: "Sausal",

      history:
        "Punto de referencia para el transporte hacia Casa Grande y zonas cercanas.",

      description:
        "Consulta localmente horarios y disponibilidad.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Estacion+de+Colectivos+Sausal+Casa+Grande"
    }

  ],


  /* =========================
     CULTURA
  ========================== */

  cultura: [

    {
      icon: "🙏",

      name: "Virgen del Rosario",

      type: "Festividad",

      location: "Sausal",

      history:
        "Festividad religiosa mencionada entre las principales celebraciones de Sausal.",

      description:
        "Forma parte de las expresiones religiosas y culturales de la comunidad.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Virgen+del+Rosario+Sausal+La+Libertad"
    },


    {
      icon: "🕊️",

      name: "Señor de los Milagros",

      type: "Festividad",

      location: "Sausal",

      history:
        "Celebración religiosa mencionada por fuentes vinculadas a la comunidad.",

      description:
        "Tradición que forma parte de la identidad cultural local.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Senor+de+los+Milagros+Sausal+La+Libertad"
    },


    {
      icon: "🌹",

      name: "Virgen de la Puerta",

      type: "Festividad",

      location: "Sausal",

      history:
        "Celebración religiosa presente entre las tradiciones locales mencionadas por fuentes educativas y comunitarias.",

      description:
        "Expresión de la tradición religiosa de la comunidad.",

      map:
        "https://www.google.com/maps/search/?api=1&query=Virgen+de+la+Puerta+Sausal+La+Libertad"
    }

  ]

};


/* =========================================
   INFORMACIÓN DE CATEGORÍAS
========================================= */

const meta = {

  comida: [
    "Comida",
    "Restaurantes, cevicherías y pollerías."
  ],

  servicios: [
    "Servicios",
    "Comercios y servicios útiles para la comunidad."
  ],

  educacion: [
    "Educación",
    "Colegios, escuelas y educación inicial."
  ],

  lugares: [
    "Lugares",
    "Parques, plazas, piscina y espacios para conocer."
  ],

  instituciones: [
    "Instituciones",
    "Entidades públicas, salud y seguridad."
  ],

  transporte: [
    "Transporte",
    "Terminales y puntos de movilidad local."
  ],

  cultura: [
    "Cultura",
    "Tradiciones, festividades y expresiones de identidad."
  ]

};


/* =========================================
   ELEMENTOS
========================================= */

let currentCategory = "comida";

const grid =
  document.getElementById("placesGrid");

const title =
  document.getElementById("categoryTitle");

const description =
  document.getElementById("categoryDescription");

const search =
  document.getElementById("searchInput");

const noResults =
  document.getElementById("noResults");


/* =========================================
   MOSTRAR CATEGORÍA
========================================= */

function render(category, term = "") {

  currentCategory = category;

  const [label, desc] =
    meta[category];

  title.textContent =
    label;

  description.textContent =
    desc;


  const clean =
    term.trim().toLowerCase();


  const items =
    places[category].filter(place => {

      return `${place.name}
        ${place.type}
        ${place.location}
        ${place.description}`
        .toLowerCase()
        .includes(clean);

    });


  /* =========================
     CREAR TARJETAS
  ========================== */

  grid.innerHTML =
    items.map((place, index) => {

      return `

        <article class="place-card">

          <div class="place-head">

            <span class="place-icon">
              ${place.icon}
            </span>

            <div class="place-type">
              ${place.type}
            </div>

            <h3>
              ${place.name}
            </h3>

          </div>


          <div class="place-body">

            <p>
              <b>📍</b>
              ${place.location}
            </p>

            <p>
              ${place.description}
            </p>

            <p>
              <b>Historia:</b>
              ${place.history}
            </p>

            ${
              place.note
                ? `
                  <p class="note">
                    ⚠️ ${place.note}
                  </p>
                `
                : ""
            }

          </div>


          <div class="place-actions">

            <a
              class="map-btn"
              href="${place.map}"
              target="_blank"
              rel="noopener"
            >
              🗺️ Google Maps
            </a>


            <button
              class="info-btn"
              data-info="${category}-${index}"
            >
              ℹ️
            </button>

          </div>

        </article>

      `;

    }).join("");


  /* =========================
     SIN RESULTADOS
  ========================== */

  noResults.classList.toggle(
    "hidden",
    items.length !== 0
  );


  /* =========================
     BOTONES DE INFORMACIÓN
  ========================== */

  grid
    .querySelectorAll(".info-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const [cat, idx] =
            button.dataset.info.split("-");

          const place =
            places[cat][Number(idx)];


          alert(
            `${place.name}

${place.history}

${place.description}`
          );

        }
      );

    });

}


/* =========================================
   BOTONES DE CATEGORÍAS
========================================= */

document
  .querySelectorAll(".category")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".category")
          .forEach(btn => {

            btn.classList.remove(
              "active"
            );

          });


        button.classList.add(
          "active"
        );


        search.value = "";


        render(
          button.dataset.category
        );


        document
          .querySelector(".explorer")
          .scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

      }
    );

  });


/* =========================================
   BUSCADOR
========================================= */

search.addEventListener(
  "input",
  () => {

    render(
      currentCategory,
      search.value
    );

  }
);


/* =========================================
   LIMPIAR BÚSQUEDA
========================================= */

document
  .getElementById("clearSearch")
  .addEventListener(
    "click",
    () => {

      search.value = "";

      render(
        currentCategory
      );

      search.focus();

    }
  );


/* =========================================
   MENÚ MÓVIL
========================================= */

const menuToggle =
  document.getElementById(
    "menuToggle"
  );

const nav =
  document.getElementById(
    "mainNav"
  );


menuToggle.addEventListener(
  "click",
  () => {

    nav.classList.toggle(
      "open"
    );

  }
);


nav
  .querySelectorAll("a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        nav.classList.remove(
          "open"
        );

      }
    );

  });


/* =========================================
   PARTÍCULAS
========================================= */

const particles =
  document.getElementById(
    "particles"
  );


for (
  let i = 0;
  i < 22;
  i++
) {

  const dot =
    document.createElement(
      "span"
    );


  dot.className =
    "particle";


  dot.style.left =
    `${Math.random() * 100}%`;


  dot.style.animationDelay =
    `${Math.random() * 9}s`;


  dot.style.animationDuration =
    `${7 + Math.random() * 7}s`;


  dot.style.opacity =
    (
      0.25 +
      Math.random() * 0.6
    ).toFixed(2);


  particles.appendChild(
    dot
  );

}


/* =========================================
   INICIAR EN COMIDA
========================================= */

render("comida");
