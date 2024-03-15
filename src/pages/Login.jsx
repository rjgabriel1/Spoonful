import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useBoolean,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form, Link } from "react-router-dom";

export default function Login() {
  const [flag, setFlag] = useBoolean();
  const [isFormValid, setFormValid] = useState(false);

  const toast = useToast();
  const showToast = () => {
    toast({
      title: isFormValid ? "Success" : "Error",
      description: isFormValid
        ? "Successfully logged in!"
        : "Incorrect email or password",
      status: isFormValid ? "success" : "error",
      duration: isFormValid ? 2000 : 5000,
      position: "top",
    });
  };
  return (
    <Container maxW={"480px"}  py={"100px"} centerContent>
      <Heading mb={"20px"}>Login</Heading>
      <Form>
        <FormControl mb={"20px"} isRequired>
          <InputGroup>
            <InputLeftElement>
              <EmailIcon />
            </InputLeftElement>
            <Input type="email" name="email" placeholder="Email" />
          </InputGroup>
        </FormControl>
        <FormControl mb={"10px"} isRequired>
          <InputGroup>
            <InputLeftElement>
              <LockIcon />
            </InputLeftElement>
            <Input
              type={flag ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
            <InputRightElement onClick={setFlag.toggle}>
              {flag ? <ViewOffIcon /> : <ViewIcon />}
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Text color="orange.600" mb={"20px"}>
        <Link to="#">Forgot password?</Link>
        </Text>

        <Button
          colorScheme="orange"
          size={"md"}
          w={{ base: "300px", lg: "200" }}
          mb={"10px"}
          mx={"auto"}
          onClick={showToast}
        >
          Login
        </Button>

        <Text>
          {`Don't have an account? `}
          <Link to="../register" style={{color:"orangered"}}>Register</Link>
        </Text>
      </Form>
    </Container>
  );
}
