import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Flex, Box } from "@radix-ui/themes";
export default function Portfolio() {
  return (
    <>
      <Flex direction="row" justify="between" mx="9">
        <h1 className="pf-header">Portfolio</h1>
      </Flex>
      <Flex className="grid-container" direction="row" mx="9" wrap="wrap">
        <Box>
          <Project
            title="TONE ZONE"
            img="tz-gif-crop.gif"
            alt="tone-zone-gif"
            appLink="https://tone-zone-1314e3af579c.herokuapp.com/"
            ghLink="https://github.com/danrcross/tone-zone"
          />
        </Box>
        <Box>
          <Project
            title="DATASNAKE"
            img="datasnake-home.png"
            alt="datasnake-img"
            appLink="https://group4-project2-c23a5470e6d9.herokuapp.com/"
            ghLink="https://github.com/ajprobel/datasnake"
          />
        </Box>
        <Box>
          <Project
            title="Exercise Buddy"
            img="ex-bud.png"
            alt="exercise-buddy-img"
            appLink="https://ralphmolu.github.io/exercise_buddy/"
            ghLink="https://github.com/ralphmolu/exercise_buddy"
          />
        </Box>
        <Box>
          <Project
            title="Daniel's Weather Dashboard"
            img="weather-dash.png"
            alt="weather-dashboard-img"
            appLink="https://danrcross.github.io/daniel-weather-dashboard/"
            ghLink="https://github.com/danrcross/daniel-weather-dashboard"
          />
        </Box>
        <Box>
          <Project
            title="Regex Tutorial"
            img="regex-tut.png"
            alt="regex-tutorial-img"
            appLink="https://gist.github.com/danrcross/5722e80665e74a8d90bf7ea2c842c0d8"
            ghLink="https://gist.github.com/danrcross/5722e80665e74a8d90bf7ea2c842c0d8"
          />
        </Box>
        <Box>
          <Project
            title="Coding Quiz"
            img="code-quiz.png"
            alt="coding-quiz-img"
            appLink="https://danrcross.github.io/daniel-code-quiz/"
            ghLink="https://github.com/danrcross/daniel-code-quiz"
          />
        </Box>
      </Flex>
    </>
  );
}

function Project(props) {
  const { title, img, alt, appLink, ghLink } = props;
  return (
    <div className="grid-container">
      <div className="img-container">
        <img
          src={`${process.env.PUBLIC_URL}/project-images/${img}`}
          alt={alt}
          className="pf-item"
        />

        <p className="over-text">
          <a href={appLink} className="app-link">
            {title}
          </a>
          <a href={ghLink} className="app-link">
            <GitHubLogoIcon className="little-logo" />
          </a>
        </p>
      </div>
    </div>
  );
}
