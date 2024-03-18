import { Icon } from "@chakra-ui/icons";
import { ImSpoonKnife } from "react-icons/im";


import Av from "../assets/cooking.png"

import {
  Avatar,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  
} from "@chakra-ui/react";
import { useState } from "react";


export default function NavBar() {
 const [isAuthenticated,setAuthenticated]=useState(true)
  return (
    <Flex
      p={"20px"}
      bg={"#fff"}
      mb={"50px"}
      alignItems={"center"}
      borderBottom={"0.1em solid #e5e7eb"}
    >
      <Heading as={"h3"} size={{ base: "md", md: "sm", lg: "lg" }}>
        spoonFu
        <Icon as={ImSpoonKnife} />
      </Heading>
      <Spacer />
      {isAuthenticated && (
        <HStack spacing={"20px"} mr={"20px"}>
          <Avatar
            size={"sm"}
            name="John Doe"
            fontSize={"medium"}
            src={Av}
            bg={"gray.500"}
          />
          <Text>Username</Text>
        </HStack>
      )}
    </Flex>
  );
}
