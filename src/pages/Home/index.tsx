import { Box } from '@chakra-ui/layout';
import Initial from './Sections/Initial';
import FeatProjects from './Sections/FeatProjects';
import About from './Sections/About';
import Contact from './Sections/Contact';

export const containerPadding = {
  base: '4',
  sm: '8',
  md: '20',
  lg: '32',
};

const Home = () => {
  return (
    <Box w="100vw" h="100vh" css={{ scrollSnapType: 'y mandatory', overflowY: 'auto' }}>
      <Initial />
      <FeatProjects />
      <About />
      <Contact />
    </Box>
  );
};

export default Home;
