import { Box, Text, Flex } from '@chakra-ui/layout';
import Color from 'color';
import { HiExternalLink } from 'react-icons/hi';
import { BsGithub } from 'react-icons/bs';

const ProjectCard = ({
  gradientColors,
  text,
  description,
  techs,
  links,
}: {
  gradientColors: [string, string];
  text: string;
  description?: string;
  techs?: string[];
  links: {
    github: string;
    website: string;
  };
}) => {
  const handleClick = (type: 'github' | 'website') => {
    if (!links[type]) {
      return;
    }

    window.open(links[type], '_blank');
  };

  return (
    <Flex
      h={{ base: '220px', lg: '240px' }}
      w="100%"
      flexDir="column"
      bgGradient={`linear(to-b, ${gradientColors[0]}, ${gradientColors[1]})`}
      pb="6"
      transition="all 200ms ease-out"
      _hover={{
        borderRadius: '15px 15px 0 15px',
        transform: 'scale(1.02)',
        borderBottom: `8px solid ${Color(gradientColors[1]).darken(0.5)}`,
        borderRight: `8px solid ${Color(gradientColors[1]).darken(0.5)}`,
      }}
    >
      <Flex align="center" flexDir="row-reverse" p="4">
        <BsGithub
          size="24px"
          cursor="pointer"
          style={{ marginLeft: '4px' }}
          onClick={() => handleClick('github')}
        />
        <HiExternalLink
          size="30px"
          cursor="pointer"
          onClick={() => handleClick('website')}
        />
      </Flex>
      <Box mt="auto">
        <Text
          as="h4"
          fontSize="3xl"
          textAlign="center"
          casing="lowercase"
          fontWeight="semibold"
          letterSpacing="-0.1em"
        >
          {text}.
        </Text>
        <Text
          as="p"
          fontSize="sm"
          textAlign="center"
          px={{ base: '4', md: '6', lg: '12' }}
          mb="16"
          textDecoration="underline"
        >
          {description}
        </Text>
        <Text as="p" fontSize="sm" textAlign="center" px="4">
          {techs?.join(' | ')}
        </Text>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
