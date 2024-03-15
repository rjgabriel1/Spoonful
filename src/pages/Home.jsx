import {
  Button,
  Container,
  Heading,
  Image,
  Highlight,
  Text,
  Flex,
  Divider,
  Center,
  Box,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import CookingPic from "../assets/cooking.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Container centerContent flexWrap={"wrap"} mb={"20px"}>
        <Image
          src={CookingPic}
          boxSize={{ base: "200px", lg: "300" }}
          objectFit={"cover"}
        />

        <Heading
          as={"h3"}
          fontSize={{ base: "22px", lg: "46px" }}
          lineHeight="tall"
          textAlign={"center"}
        >
          <Highlight
            query={"Discover"}
            styles={{
              px: "3",
              py: "1",
              rounded: "full",
              bg: "green.500",
              color: "white",
            }}
          >
            Discover, Create, and Share Delicious
          </Highlight>
          <Highlight
            query={"Recipes"}
            styles={{ px: "2", py: "1", rounded: "full", bg: "orange" }}
          >
            Recipes with Spoonful.
          </Highlight>
        </Heading>

        <Button
          rightIcon={<ArrowForwardIcon />}
          mt={"25px"}
          variant={"outline"}
          borderRadius={"full"}
          colorScheme="blue"
          onClick={() => {
            navigate("auth/login");
          }}
        >
          Get Started
        </Button>
      </Container>
    </>
  );
}
