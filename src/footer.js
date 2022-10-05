import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

function Footer() {
  return (
    <footer className="footer">
      <p>
        Birthdays can't be lucky, right? This is just for fun!
        <span role="img" aria-label="smiley">
          😚
        </span>
        No data is being stored.
      </p>
      <hr />
      <ul>
        <li>
          <a
            href="https://github.com/naveenkumarr12"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/naveen-kumar-27b1b164/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/naveen_kumar12"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
