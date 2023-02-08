const API = "https://rickandmortyapi.com/api/character";

async function fetchData() {
  const response = await fetch(API);
  const data = await response.json();
  const items = [];

  num = 1;
  const image = () => {
    while (num <= 20) {
        return num++;
    }
  };

  data.results.forEach((item) => {
    const nombre = document.createElement("h5");
    nombre.className = "card-title";
    nombre.textContent = `Name: ${item.name}`;

    const specie = document.createElement("div");
    specie.className = "card-text";
    specie.textContent = `Species: ${item.species}`;

    const gender = document.createElement('div');
    gender.className = 'card-text';
    gender.textContent = `Gender: ${item.gender}`;

    const imagen = document.createElement("img");
    imagen.src = `${API}/avatar/${image()}.jpeg`;
    imagen.className = "card-img-top";

    const cardBody = document.createElement("div");
    cardBody.append(imagen, nombre, specie, gender);
    cardBody.className = "card-body";

    const container = document.createElement("div");
    container.className = "card m-4";
    container.style.width = "18rem";
    container.append(cardBody);
    items.push(container);
  });
  document.body.append(...items);
}

fetchData(API);
