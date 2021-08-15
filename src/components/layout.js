/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";

import { Link } from "gatsby";

const bodyStyles = {
  mx: `2rem`,
  padding: `1rem`,
};

const headerStyles = {
  paddingLeft: `10px`,
};

const mainStyles = {
  maxWidth: `container`,
  padding: `1rem`,
  mx: `auto`,
  // textAlign: `center`,
};

const footerStyles = {
  textAlign: `center`,
  background: `lightgrey`,
};

const Layout = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode();
  const nextColorMode = colorMode === "default" ? "dark" : "default";

  return (
    <div sx={bodyStyles}>
      <header sx={headerStyles}>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <button
          onClick={(e) => {
            setColorMode(nextColorMode);
          }}
        >
          Toggle {colorMode === "default" ? "Dark" : "Light"}
        </button>
      </header>
      <main sx={mainStyles}>{children}</main>
      <footer>
        <p sx={footerStyles}>This is a footer</p>
      </footer>
    </div>
  );
};

export default Layout;
