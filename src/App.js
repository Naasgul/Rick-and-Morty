import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import Character from "./components/Character";
import { getCharacterById } from "./utils/api";

function App() {
  const header = Header();
  const main = createElement("main");

  async function getCharacters(id) {
    const character = await getCharacterById(id);

    main.append(
      Character({
        name: character.name,
        imgSrc: character.image,
      })
    );
  }

  /*  const IDs = [1, 2, 3, 4, 5, 6];

  IDs.forEach(getCharacters); */

  for (let i = 1; i <= 15; i++) {
    getCharacters(i);
  }

  const container = createElement("div", {
    children: [header, main],
  });
  return container;
}

export default App;
