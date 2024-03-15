import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useBoolean,
  useToast,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form, Link } from "react-router-dom";
export default function Register() {
  const [isFormValid, setFormValid] = useState(true);
  const [flag, setFlag] = useBoolean();
  

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
      <Heading mb={"50px"}>Register</Heading>
      <Form>
        <FormControl mb={"20px"} isRequired>
          <InputGroup>
            <InputLeftElement>
              <EmailIcon />
            </InputLeftElement>
            <Input type="email" name="email" placeholder="Email" />
          </InputGroup>
        </FormControl>
        <FormControl mb={"20px"} isRequired>
          <InputGroup>
            <InputLeftElement>
              <LockIcon />
            </InputLeftElement>
            <Input
              type={flag ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
          </InputGroup>
        </FormControl>
        <FormControl mb={"20px"} isRequired>
          <InputGroup>
            <InputLeftElement>
              <LockIcon />
            </InputLeftElement>
            <Input
              type={flag ? "text" : "password"}
              name="password"
              placeholder=" Confirm password"
            />
          </InputGroup>
        </FormControl>
        <FormControl
          display={"flex"}
          alignItems={"center"}
          mb={"20px"}
        >
          <Checkbox size={"md"} colorScheme="orange" onChange={setFlag.toggle}/>
          <FormLabel mb={"0"} ml={"10px"} fontSize={"sm"} color={"gray.700"}>
            Show password
          </FormLabel>
        </FormControl>

        <Button
          colorScheme="orange"
          size={"md"}
          w={{ base: "300px", lg: "200" }}
          mb={"10px"}
          mx={"auto"}
          onClick={showToast}
        >
          Register
        </Button>

        <Text>
          Already have an account?{" "}
          <Link to="../login" style={{ color: "orangered"}} >
          Login
          </Link>
        </Text>
      </Form>
    </Container>
  );}

