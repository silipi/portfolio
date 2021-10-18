import { ReactNode } from 'react';
import { ListItem, Text } from '@chakra-ui/layout';

const TechBadge = ({ icon, tech }: { icon: ReactNode; tech: string }) => {
  return (
    <ListItem
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      color="gray.500"
      bgColor="#32344b"
      borderRadius="md"
      transition="all 150ms ease"
      _hover={{
        color: 'gray.300',
        bgColor: '#3f4161',
      }}
    >
      {icon}
      <Text letterSpacing="0.08em" fontSize="small" pt="1">
        {tech}
      </Text>
    </ListItem>
  );
};

export default TechBadge;
