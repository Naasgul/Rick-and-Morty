import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import Character from "./components/Character";
import { getCharacterById } from "./utils/api";

function App() {
  const header = Header();
  const main = createElement("main");

  async function getCharacters() {
    const firstCharacter = await getCharacterById(1);
    const secondCharacter = await getCharacterById(2);
    main.append(
      Character({
        name: firstCharacter.name,
        imgSrc: firstCharacter.image,
      }),
      Character({
        name: secondCharacter.name,
        imgSrc: secondCharacter.image,
      })
    );
  }

  getCharacters();
  const container = createElement("div", {
    children: [header, main],
  });
  return container;
}

export default App;
