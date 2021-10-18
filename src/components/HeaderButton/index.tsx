import { Button } from '@chakra-ui/button';

const HeaderButton = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <Button variant="ghost" onClick={onClick} fontWeight="normal">
      {text}
    </Button>
  );
};

export default HeaderButton;
