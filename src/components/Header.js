import "./header.css";

import { createElement } from "../utils/elements";

function Header() {
  const header = createElement("h3", {
    innerText: "Rick and Morty",
    alt: "title",
    className: "headline",
  });

  return header;
}

export default Header;
