import { animals } from "./animals.js";

console.log(animals[0]); // example showing you can use the animals array and that this code is running correctly

const createCardElement = (animal) => {
  const cardElement = document.createElement("div");
  const cardContainerElement = document.createElement("div");
  const imgElement = document.createElement("img");
  const textElement = document.createElement("p");
  const headerElement = document.createElement("h3");

  imgElement.src = animal.image;
  headerElement.textContent = animal.title;
  textElement.textContent = animal.description;

  cardElement.appendChild(imgElement);
  cardContainerElement.appendChild(headerElement);
  cardContainerElement.appendChild(textElement);

  cardElement.appendChild(cardContainerElement);

  console.log(cardElement);

  return cardElement;
};
const firstAnimalElement = createCardElement(animals[0]);

const cardContainerElement = document.getElementById("card-container-id");
cardContainerElement.replaceChildren();
cardContainerElement.appendChild(firstAnimalElement);

animals.forEach((animal) => {
    animal = createCardElement;
});
