import { ReactNode } from 'react';
import { List, Text } from '@chakra-ui/layout';

const TechList = ({ name, children }: { name: string; children: ReactNode }) => {
  return (
    <>
      <Text
        color="gray.600"
        casing="uppercase"
        letterSpacing="0.03em"
        fontSize="sm"
        mb="2"
      >
        {name}
      </Text>
      <List
        display="grid"
        gridTemplateColumns={{
          base: 'repeat(3, 1fr)',
          sm: 'repeat(4, 1fr)',
          md: 'repeat(6, 1fr)',
        }}
        gridAutoRows="60px"
        gridGap={{ base: '2', md: '4' }}
        px={{ base: 0, md: '4' }}
        mb="6"
      >
        {children}
      </List>
    </>
  );
};

export default TechList;
