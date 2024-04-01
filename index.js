const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

document.getElementById('submitButton').addEventListener('click', function() {
  const numInputValue = document.getElementById('numInput').value.trim();
  const pizzaContainer = document.getElementById('pizzaContainer');
  pizzaContainer.innerHTML = '';

  if (!isNaN(numInputValue) && numInputValue !== '') {
    const numInputNumber = parseInt(numInputValue);
  
    const IDPizza = pizzas.find(pizza => pizza.id === numInputNumber);

    if (IDPizza) {
      const pizzaCard = document.createElement('div');
      pizzaCard.innerHTML = `
        <h2>${IDPizza.nombre}</h2>
        <img src="${IDPizza.imagen}" alt="${IDPizza.nombre}">
        <p>Precio: $${IDPizza.precio}</p>
      `;
      pizzaContainer.appendChild(pizzaCard);

      localStorage.setItem('lastPizzaId', numInputNumber);

    } else {
      pizzaContainer.innerHTML = '<p>No se encontró ninguna pizza con ese ID.</p>';
    }
  } else {
    pizzaContainer.innerHTML = '<p>Por favor ingrese un número válido.</p>';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const pizzaContainer = document.getElementById('pizzaContainer');
  const lastPizzaId = localStorage.getItem('lastPizzaId');

  if (lastPizzaId) {
    const numInputNumber = parseInt(lastPizzaId);
    const foundPizza = pizzas.find(pizza => pizza.id === numInputNumber);

    if (foundPizza) {
      const pizzaCard = document.createElement('div');
      pizzaCard.innerHTML = `
        <h2>${foundPizza.nombre}</h2>
        <img src="${foundPizza.imagen}" alt="${foundPizza.nombre}">
        <p>Precio: $${foundPizza.precio}</p>
      `;
      pizzaContainer.appendChild(pizzaCard);

      localStorage.setItem('lastPizzaId', numInputNumber);

    } 
  }
});
