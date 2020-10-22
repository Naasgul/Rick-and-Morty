import "./header.css";

import { createElement } from "../utils/elements";

function Header() {
  const header = createElement("div", {
    innerText: "Rick and Morty",
    alt: "title",
    className: "headline",
  });

  return header;
}

export default Header;
