import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import Character from "./components/Character";
import { getAllCharacters } from "./utils/api";

function App() {
  const header = Header();
  const characterContainer = createElement("section", {
    className: "allCharacterCards",
  });
  const searchField = createElement("input", {
    className: "searchField",
    type: "search",
    placeholder: "Search Rick and Morty Database",
  });
  const main = createElement("main", {
    children: [searchField, characterContainer],
    className: "main",
  });

  async function allCharacters() {
    const characters = await getAllCharacters();
    const characterElements = characters.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
      })
    );
    characterContainer.append(...characterElements);
  }
  allCharacters();

  /*  const IDs = [1, 2, 3, 4, 5, 6];

  IDs.forEach(getCharacters); */

  /*  for (let i = 1; i <= 15; i++) {
    getCharacters(i);
  } */

  const container = createElement("div", {
    children: [header, main],
  });
  return container;
}

export default App;
