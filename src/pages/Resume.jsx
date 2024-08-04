import { Flex, Box } from "@radix-ui/themes";
export default function Resume() {
  return (
    <div>
      <Flex direction="row" justify="between" mx="9">
        <Box align="left">
          <h2>Resumé</h2>
          <div className="res-page">
            <h4>
              Click to{" "}
              <a
                href={`${process.env.PUBLIC_URL}/documents/danielcResume-CURRENT.pdf`}
                download
              >
                download resumé
              </a>
            </h4>
            <div>
              <h3>Front-End Proficiencies</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Radix UI</li>
                <li>Bootstrap</li>
                <li>Figma</li>
              </ul>
            </div>
            <div>
              <h3>Back-End Proficiencies</h3>
              <ul>
                <li>Node.js</li>
                <li>APIs</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>JSON Web Tokens</li>
                <li>Apollo</li>
                <li>GraphQL</li>
                <li>Handlebars.js</li>
              </ul>
            </div>
          </div>
        </Box>
      </Flex>
    </div>
  );
}
