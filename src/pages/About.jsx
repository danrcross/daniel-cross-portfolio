import { Flex, Box, Text } from "@radix-ui/themes";
export default function About() {
  return (
    <Flex direction="row" justify="between" mx="9">
      <Box align="left">
        <h1>About Me</h1>
        <img
          alt="profile-pic"
          src={`${process.env.PUBLIC_URL}/project-images/profile_2.png`}
          className="profile-pic"
        />
        <Text size="5" className="about-para">
          I am a budding full stack developer, specializing in JavaScript- and
          React-related technologies. I take pleasure in the process of creating
          user-friendly and aesthetically-pleasing websites. As I work my way
          through a bootcamp program, I am developing a number of important web
          development skills. Most notably, I am learning the art of team
          development. It is a joy to work with other developers to build
          outstanding applications, sharing and building upon each others'
          ideas. <br />
          <br />
          As a solo developer, I am currently building a unique music
          application, called{" "}
          <a href="https://tone-zone-1314e3af579c.herokuapp.com/3">Tone Zone</a>
          . As music is a great passion of mine (especially music composition
          and pedagogy), I feel motivated to use and hone my web development
          skills by engineering a useful tool for music students and educators
          alike.
        </Text>
      </Box>
    </Flex>
  );
}
