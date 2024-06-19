import "./App.css";
import { useState } from "react";
export default function App() {
  const [page, setPage] = useState("About Me");
  function handleClick(e) {
    e.stopPropagation();
    setPage(e.target.innerHTML);
  }

  return (
    <div className="App">
      <Header handleClick={handleClick} />
      <section>
        <PageBody myPage={page} />
      </section>
      <Footer />
    </div>
  );
}

function Header({ handleClick }) {
  return (
    <header>
      <h1>Daniel Cross</h1>
      <Nav className="Nav" handleClick={handleClick} />
    </header>
  );
}

function Nav({ handleClick }) {
  return (
    <nav>
      <ul>
        <li onClick={handleClick}>About Me</li>
        <li onClick={handleClick}>Portfolio</li>
        <li onClick={handleClick}>Contact</li>
        <li onClick={handleClick}>Resumé</li>
      </ul>
    </nav>
  );
}

function Project() {
  return (
    <div>
      <img
        src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
        alt="react-logo"
      />
    </div>
  );
}

function PageBody({ myPage }) {
  switch (myPage) {
    case "About Me":
      return (
        <div>
          <h1>About Me</h1>
        </div>
      );
    case "Portfolio":
      return (
        <div>
          <h1>Portfolio</h1>
          <Project />
        </div>
      );
    case "Contact":
      return (
        <div>
          <h1>Contact</h1>
        </div>
      );
    case "Resumé":
      return (
        <div>
          <h1>Resumé</h1>
        </div>
      );
    default:
      console.log("no page chosen");
  }
}

function Footer() {
  return <footer>Here is the footer</footer>;
}
