import { Box, Text } from '@chakra-ui/layout';
import { containerPadding } from '..';
import {
  SiCss3,
  SiCypress,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiNodedotjs,
  SiReact,
  SiTestinglibrary,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWebpack,
} from 'react-icons/si';
import TechBadge from '@/components/TechBadge';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import TechList from '@/components/TechList';

const About = () => {
  return (
    <Box
      w="100%"
      minH="100%"
      css={{ scrollSnapAlign: 'start' }}
      bgColor="blackAlt"
      px={containerPadding}
    >
      <Text
        pt="12"
        mb="6"
        as="h2"
        color="white"
        left="18%"
        casing="uppercase"
        fontWeight="light"
        letterSpacing="0.165em"
      >
        About me &#8211;
      </Text>
      <Text color="gray.500" letterSpacing="0.08em" fontSize="small" lineHeight={2}>
        Hey! My name is Gabriel Silipi, a passionated developer who is always trying and
        learning something. <br /> Focused on front-end and UI/UX but I can deal with
        back-end too.
      </Text>

      <Text
        pt="12"
        mb="6"
        as="h2"
        color="white"
        left="18%"
        casing="uppercase"
        fontWeight="light"
        letterSpacing="0.165em"
      >
        Some techs that I've worked &#8211;
      </Text>

      <TechList name="_Front-end:">
        <TechBadge icon={<SiHtml5 />} tech="HTML5" />
        <TechBadge icon={<SiCss3 />} tech="CSS3" />
        <TechBadge icon={<SiJavascript />} tech="JavaScript" />
        <TechBadge icon={<SiTypescript />} tech="TypeScript" />
        <TechBadge icon={<SiReact />} tech="React" />
        <TechBadge icon={<SiVuedotjs />} tech="Vue.js" />
      </TechList>

      <TechList name="_Back-end:">
        <TechBadge icon={<SiNodedotjs />} tech="Node.js" />
        <TechBadge icon={<SiExpress />} tech="Express" />
        <TechBadge icon={<SiJsonwebtokens />} tech="JWT" />
      </TechList>

      <TechList name="_Testing, Architecture and Misc:">
        <TechBadge icon={<SiJest />} tech="Jest" />
        <TechBadge icon={<SiCypress />} tech="Cypress" />
        <TechBadge icon={<SiWebpack />} tech="Webpack" />
        <TechBadge icon={<SiVite />} tech="Vite" />
        <TechBadge icon={<HiOutlineDesktopComputer />} tech="Micro-Frontend" />
        <TechBadge icon={<SiTestinglibrary />} tech="BDD and TDD" />
      </TechList>
    </Box>
  );
};

export default About;
