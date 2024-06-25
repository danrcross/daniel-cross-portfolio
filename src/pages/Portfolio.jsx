import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Flex, Box } from "@radix-ui/themes";
export default function Portfolio() {
  return (
    <Flex direction="row" justify="between" mx="9">
      <Box align="left">
        <div>
          <h1 className="pf-header">Portfolio</h1>
          <Project />
        </div>
      </Box>
    </Flex>
  );
}

function Project() {
  return (
    <div className="grid-container">
      <div className="img-container">
        <img
          src={`${process.env.PUBLIC_URL}/project-images/tz-gif-crop.gif`}
          alt="tone-zone-gif"
          className="pf-item"
        />

        <p className="over-text">
          <a
            href="https://tone-zone-1314e3af579c.herokuapp.com/3"
            className="app-link"
          >
            TONE ZONE
          </a>
          <a href="https://github.com/danrcross/tone-zone" className="app-link">
            <GitHubLogoIcon className="little-logo" />
          </a>
        </p>
      </div>
      <div className="img-container">
        <img
          src={`${process.env.PUBLIC_URL}/project-images/datasnake-home.png`}
          alt="datasnake-img"
          className="pf-item"
        />

        <p className="over-text">
          <a
            href="https://group4-project2-c23a5470e6d9.herokuapp.com/"
            className="app-link"
          >
            DATASNAKE
          </a>
          <a href="https://github.com/ajprobel/datasnake" className="app-link">
            <GitHubLogoIcon className="little-logo" />
          </a>
        </p>
      </div>
      <div className="img-container">
        <img
          src={`${process.env.PUBLIC_URL}/project-images/ex-bud.png`}
          alt="exercise-buddy-img"
          className="pf-item"
        />

        <p className="over-text">
          <a
            href=" https://ralphmolu.github.io/exercise_buddy/"
            className="app-link"
          >
            Exercise Buddy
          </a>
          <a
            href="https://github.com/ralphmolu/exercise_buddy"
            className="app-link"
          >
            <GitHubLogoIcon className="little-logo" />
          </a>
        </p>
      </div>
      <div className="img-container">
        <img
          src={`${process.env.PUBLIC_URL}/project-images/weather-dash.png`}
          alt="weather-dashboard-img"
          className="pf-item"
        />

        <p className="over-text">
          <a
            href="https://danrcross.github.io/daniel-weather-dashboard/"
            className="app-link"
          >
            Daniel's Weather Dashboard
          </a>
          <a
            href="https://github.com/danrcross/daniel-weather-dashboard"
            className="app-link"
          >
            <GitHubLogoIcon className="little-logo" />
          </a>
        </p>
      </div>
      <div className="img-container">
        <img
          src={`${process.env.PUBLIC_URL}/project-images/regex-tut.png`}
          alt="weather-dashboard-img"
          className="pf-item"
        />

        <p className="over-text">
          <a
            href="https://gist.github.com/danrcross/5722e80665e74a8d90bf7ea2c842c0d8"
            className="app-link"
          >
            Regex Tutorial
          </a>
          <a
            href="https://gist.github.com/danrcross/5722e80665e74a8d90bf7ea2c842c0d8"
            className="app-link"
          >
            <GitHubLogoIcon className="little-logo" />
          </a>
        </p>
      </div>
      <div className="img-container">
        <img
          src={`${process.env.PUBLIC_URL}/project-images/code-quiz.png`}
          alt="weather-dashboard-img"
          className="pf-item"
        />

        <p className="over-text">
          <a
            href="https://danrcross.github.io/daniel-code-quiz/"
            className="app-link"
          >
            Coding Quiz
          </a>
          <a
            href="https://github.com/danrcross/daniel-code-quiz"
            className="app-link"
          >
            <GitHubLogoIcon className="little-logo" />
          </a>
        </p>
      </div>
    </div>
  );
}
