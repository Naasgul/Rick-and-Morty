import { createElement } from "../utils/elements";

function Character({ name, imgSrc }) {
  const characterName = createElement("h3", {
    innerText: name,
  });
  const characterImg = createElement("img", {
    src: imgSrc,
    alt: name,
  });

  const container = createElement("div", {
    className: "characterCard",
    children: [characterName, characterImg],
  });

  return container;
}
export default Character;
