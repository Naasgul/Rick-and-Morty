import { createElement } from "../utils/elements";

function Search({ onchange }) {
  const input = createElement("input", {
    type: "text",
    className: "search__input",
  });
  const button = createElement("button", {
    className: "search__submit",
    innerText: "Go!!!!!",
  });
  const form = createElement("form", {
    className: "search",
    children: [input, button],
    onsubmit: (event) => {
      onchange(input.value);
      event.preventDefault();
    },
  });

  return form;
}

export default Search;
