import { Box, Grid, Text } from '@chakra-ui/layout';
import ProjectCard from '@/components/ProjectCard';
import { containerPadding } from '..';

const FeatProjects = () => {
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
        Featured projects &#8211;
      </Text>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
        }}
        columnGap={{ sm: '6', lg: '10', xl: '20' }}
        rowGap="6"
      >
        <ProjectCard
          gradientColors={['#5cd3f7', '#ff7171']}
          text="todo apps"
          description="comparison beetwen UI frameworks: React, Vue and Svelte"
          techs={['HTML', 'CSS', 'JS and TS', 'REACT', 'VUE', 'SVELTE']}
          links={{
            github: 'https://github.com/silipi/todos-react-vue-svelte-app',
          }}
        />
      </Grid>
      <Text
        color="white"
        pt="6"
        letterSpacing="0.08em"
        fontWeight="300"
        cursor="pointer"
        transition="color 150ms ease"
        _hover={{ color: 'gray.400' }}
      >
        Want to see more?
      </Text>
    </Box>
  );
};

export default FeatProjects;
