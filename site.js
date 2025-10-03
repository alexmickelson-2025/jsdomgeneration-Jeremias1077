import { animals } from "./animals.js";

console.log(animals[0]); // example showing you can use the animals array and that this code is running correctly

const createCardElement = (animal) => {
  const cardElement = document.createElement("div");
  cardElement.className = "card";

  const imgElement = document.createElement("img");
  imgElement.src = animal.image;

  const cardTextElement = document.createElement("div");
  cardTextElement.className = "card-text";

  const headerElement = document.createElement("h3");
  headerElement.textContent = animal.title;

  const textElement = document.createElement("p");
  textElement.textContent = animal.description;

  cardElement.appendChild(imgElement);
  cardElement.appendChild(cardTextElement);

  cardTextElement.appendChild(headerElement);
  cardTextElement.appendChild(textElement);

  console.log(cardElement);

  return cardElement;
};

const cardContainerElement = document.getElementById("card-container-id");
// cardContainerElement.replaceChildren();

// animals.forEach((animal) => {
//   const animalCard = createCardElement(animal);
//   cardContainerElement.appendChild(animalCard);
// });

const queryString = new URLSearchParams(window.location.search);
const filterString = queryString.get("filter");
const searchTerm = filterString ? filterString.toLowerCase() : null;

console.log(searchTerm);

const filteredAnimals = animals.filter((animal) => {
  if (!searchTerm) {
    return true;
  }
  return (
    animal.title.toLowerCase().includes(searchTerm) ||
    animal.description.toLowerCase().includes(searchTerm)
  );
});

console.log(filteredAnimals);
cardContainerElement.replaceChildren();

filteredAnimals.forEach((animal) => {
  const animalCard = createCardElement(animal);
  cardContainerElement.appendChild(animalCard);
});
