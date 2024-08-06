import "./App.css";
import { Outlet, Link, useLocation } from "react-router-dom";
// import radix components
import { Flex, Heading, Button } from "@radix-ui/themes";
// import radix
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  // DiscordLogoIcon,
} from "@radix-ui/react-icons";
export default function App() {
  return (
    <div className="App">
      <Header className="header" />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}

function Header() {
  const { pathname } = useLocation();
  return (
    <Flex direction="row" justify="between" m="4">
      <Heading as="h1" weight="bold" size="8">
        Daniel Cross
      </Heading>
      <Nav currentTab={pathname} />
    </Flex>
  );
}

function Nav({ currentTab }) {
  return (
    <nav>
      <Flex direction="row" gap="2">
        <Link key={1} className="nav-link text-light" to="/about">
          <Button
            color={
              currentTab === "/about" || currentTab === "/" ? "red" : "iris"
            }
            className="nav-btn"
          >
            About Me
          </Button>
        </Link>
        <Link key={2} className="nav-link text-light" to="/portfolio">
          <Button
            color={currentTab === "/portfolio" ? "red" : "iris"}
            className="nav-btn"
          >
            Portfolio
          </Button>
        </Link>

        <Link key={3} className="nav-link text-light" to="/contact">
          <Button
            color={currentTab === "/contact" ? "red" : "iris"}
            className="nav-btn"
          >
            Contact
          </Button>
        </Link>

        <Link key={4} className="nav-link text-light" to="/resume">
          <Button
            color={currentTab === "/resume" ? "red" : "iris"}
            className="nav-btn"
          >
            Resumé
          </Button>
        </Link>
      </Flex>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <a href="https://github.com/danrcross">
        <GitHubLogoIcon className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/daniel-cross-6312891b0/">
        <LinkedInLogoIcon className="icon" />
      </a>
      {/* <a href="https://discord.gg/HappJMYm">
        <DiscordLogoIcon className="icon" />
      </a> */}
    </footer>
  );
}
