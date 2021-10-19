import HeaderButton from '@/components/HeaderButton';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { containerPadding } from '..';
import { RiBook2Fill } from 'react-icons/ri';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Initial = () => {
  return (
    <Box w="100%" h="100%" css={{ scrollSnapAlign: 'start' }}>
      <Box bgColor="white" h="45%" position="relative" px={containerPadding}>
        <Flex pt="2" flexDirection="row-reverse" css={{ gap: '20px' }}>
          <HeaderButton text="PROJECTS" onClick={() => console.log('Click!')} />
          <HeaderButton
            text="MY RESUME"
            icon={<RiBook2Fill />}
            onClick={() => window.open('/GabrielSilipi-Resume.pdf', '_blank')}
          />
        </Flex>
        <Text
          as="h1"
          fontWeight="semibold"
          letterSpacing="-0.08em"
          fontSize="8xl"
          position="absolute"
          lineHeight="none"
          bottom={0}
          left="18%"
          transition="color 275ms ease-in"
          _hover={{
            color: '#FF375B',
          }}
        >
          silipi
        </Text>
      </Box>

      <Box bgColor="blackAlt" h="55%" position="relative" px={containerPadding}>
        <Text
          pt="4"
          as="h2"
          fontWeight="semibold"
          color="white"
          position="absolute"
          left="18%"
          casing="uppercase"
        >
          Front-end Developer ‍💻
        </Text>
        <BsGithub
          color="white"
          style={{ position: 'absolute', top: '44px', left: '18%', cursor: 'pointer' }}
          onClick={() => window.open('https://github.com/silipi/', '_blank')}
        />
        <BsLinkedin
          color="white"
          style={{
            position: 'absolute',
            top: '44px',
            left: 'calc(18% + 24px)',
            cursor: 'pointer',
          }}
          onClick={() => window.open('https://linkedin.com/in/gabriel-silipi/', '_blank')}
        />
      </Box>
    </Box>
  );
};

export default Initial;
