import { useEffect, useState } from 'react';
import { FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import { containerPadding } from '..';
import axios from 'axios';
import { Button } from '@chakra-ui/button';
import { HiOutlineCheck, HiOutlineExclamationCircle } from 'react-icons/hi';
import { useToken } from '@chakra-ui/system';

interface MessageSubmit {
  type: 'error' | 'success';
  message: string;
}

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState<MessageSubmit | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [green400, red400] = useToken('colors', ['green.400', 'red.400']);

  useEffect(() => {
    if (showMessage !== null) {
      setTimeout(() => {
        setShowMessage(null);
      }, 6000);
    }
  }, [showMessage]);

  const handleSubmitContact = () => {
    if (message.length < 2 || name.length < 2 || email.length < 2) {
      return;
    }

    setLoading(true);
    axios
      .post('/api/contact', {
        name,
        email,
        message,
      })
      .then(() => {
        setLoading(false);
        setShowMessage({ type: 'success', message: 'Message sent successfully!' });
      })
      .catch(() => {
        setLoading(false);
        setShowMessage({
          type: 'error',
          message:
            "Something went wrong :(, but you can still message me at: 'gabriel.silipi@gmail.com'.",
        });
      });
  };

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
        as="h2"
        color="white"
        left="18%"
        casing="uppercase"
        fontWeight="light"
        letterSpacing="0.165em"
      >
        Contact &#8211;
      </Text>
      <Text fontSize="sm" color="gray.500" casing="uppercase">
        Let's chat!
      </Text>

      <Box display={{ md: 'flex' }} gridColumnGap="6" mt="6">
        <Box flex="1">
          <FormLabel for="name" color="gray.400" fontWeight="normal">
            Name
          </FormLabel>
          <Input
            id="name"
            border="1px solid"
            borderColor="gray.700"
            css={{ color: '#d0ced6', caretColor: 'white' }}
            _hover={{ borderColor: 'gray.600' }}
            _placeholder={{ color: 'gray.600' }}
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>

        <Box flex="1">
          <FormLabel for="email" color="gray.400" fontWeight="normal">
            Email
          </FormLabel>
          <Input
            id="email"
            border="1px solid"
            borderColor="gray.700"
            css={{ color: '#d0ced6', caretColor: 'white' }}
            _hover={{ borderColor: 'gray.600' }}
            _placeholder={{ color: 'gray.600' }}
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
      </Box>

      <Box mt={{ md: '4' }}>
        <FormLabel for="message" color="gray.400" fontWeight="normal">
          What we're gonna talk about?
        </FormLabel>
        <Textarea
          id="message"
          border="1px solid"
          borderColor="gray.700"
          css={{ color: '#d0ced6', caretColor: 'white' }}
          _hover={{ borderColor: 'gray.600' }}
          _placeholder={{ color: 'gray.600' }}
          placeholder="Leave a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></Textarea>
      </Box>
      <Box textAlign="center" mt="6">
        <Button
          bgColor="gray.600"
          color="gray.200"
          _hover={{ bgColor: 'gray.500' }}
          fontWeight="normal"
          fontSize="small"
          letterSpacing="0.08em"
          width={{ base: '100%', md: '45%' }}
          isLoading={loading}
          onClick={handleSubmitContact}
          isDisabled={message.length < 2 || name.length < 2 || email.length < 2}
        >
          Submit
        </Button>
        <Text
          color="green.400"
          fontSize="sm"
          letterSpacing="0.05em"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt="2"
        >
          {showMessage !== null && (
            <>
              {showMessage?.type === 'error' ? (
                <HiOutlineCheck color={green400} style={{ marginRight: '8px' }} />
              ) : (
                <HiOutlineExclamationCircle
                  color={red400}
                  style={{ marginRight: '8px' }}
                />
              )}
              {showMessage?.message}
            </>
          )}
        </Text>
      </Box>
    </Box>
  );
};

export default Contact;
