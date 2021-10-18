import { useState } from 'react';
import { FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import { containerPadding } from '..';
import axios from 'axios';
import { Button } from '@chakra-ui/button';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
      .then((response) => {
        console.log(response);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
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
      </Box>
    </Box>
  );
};

export default Contact;
