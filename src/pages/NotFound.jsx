import { Heading, Container, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <Container mt={"250px"}  centerContent>
          <Heading>Page Not Found</Heading>
          <Link>
          <Button mt={"16px"} colorScheme="orange">Back Home</Button>
          </Link>
    </Container>
  );
}
