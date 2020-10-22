import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import Character from "./components/Character";
import { getAllCharacters } from "./utils/api";
import Search from "./components/Search";

function App() {
  const header = Header();
  let lastName = null;
  let nextPage = null;

  const characterContainer = createElement("section", {
    className: "allCharacterCards",
  });

  const loadMoreButton = createElement("button", {
    className: "button",
    innerText: "Load more",
    onclick: () => {
      allCharacters(lastName, nextPage);
    },
  });

  const main = createElement("main", {
    children: [characterContainer, loadMoreButton],
    className: "main",
  });

  async function allCharacters(name, page) {
    const characters = await getAllCharacters(name, page);
    const characterElements = characters.results.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
      })
    );

    characterContainer.append(...characterElements);
    lastName = name;
    nextPage = characters.info.next?.match(/\d+/)[0];
    loadMoreButton.disabled = !characters.info.next;
  }
  const search = Search({
    onchange: (value) => {
      characterContainer.innerHTML = "";
      allCharacters(value);
    },
  });

  allCharacters();

  const container = createElement("div", {
    children: [header, search, main],
  });
  return container;
}

export default App;
