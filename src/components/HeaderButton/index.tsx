import { Button } from '@chakra-ui/button';
import { ReactElement } from 'react';

const HeaderButton = ({
  text,
  onClick,
  icon,
}: {
  text: string;
  onClick: () => void;
  icon?: ReactElement;
}) => {
  return (
    <Button variant="ghost" onClick={onClick} fontWeight="normal" leftIcon={icon}>
      {text}
    </Button>
  );
};

export default HeaderButton;
