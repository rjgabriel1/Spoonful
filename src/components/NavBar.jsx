import { EditIcon, Icon, } from "@chakra-ui/icons";
import { ImSpoonKnife } from "react-icons/im";


import {
  Avatar,
  Flex,
  HStack,
  Heading,
  Spacer,
  IconButton,
  Image,
} from "@chakra-ui/react";


export default function NavBar() {
  return (
    <Flex
      p={"10px"}
      bg={"#fff"}
      mb={"50px"}
      alignItems={"center"}
      borderBottom={"0.1em solid #e5e7eb"}
    >
      <Heading as={"h3"} size={{ base: "sm", lg: "md" }}>
        spoonFu
        <Icon as={ImSpoonKnife} />
      </Heading>
      <Spacer />
      <HStack spacing={"20px"} mr={"20px"}>
        <IconButton icon={<EditIcon />} variant={"outline"} />

        <Avatar
          size={"sm"}
          name="John Doe"
          fontSize={"medium"}
          src=""
          bg={"gray.500"}
        />
      </HStack>
    </Flex>
  );
}
