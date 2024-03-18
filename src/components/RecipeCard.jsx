import {
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Flex,
  Avatar,
  Box,
  Text,
  Image,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FaRegComment } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";

export default function RecipeCard({
  createdBy,
  createdAt,
  cover,
  recipeName,
  description,
  likeCount,
  commentCount,
}) {
  return (
    <Card borderTop={"8px"} borderColor={"orange.400"} bg={"white"}>
      <CardHeader>
        <Flex alignItems={"center"} gap={5}>
          <Avatar size={"sm"} src="" />
          <Box>
            <Heading size={"sm"} as={"h3"}>
              {createdBy}
            </Heading>
            <Text fontSize={{ base: "12px", lg: "14px" }} color={"GrayText"}>
              {createdAt} ago
            </Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody color={"gray.500"}>
        <Image src={cover} objectFit={""} borderRadius="lg" />

        <Stack mt="6" spacing="4">
          <Heading size="md" color="gray.900">
            {recipeName}
          </Heading>
          <Text textAlign={"justify"} noOfLines={4} overflow={"hidden"}>
            {description}
          </Text>
        </Stack>
      </CardBody>

      <CardFooter>
        <HStack>
          <Button
            leftIcon={<AiOutlineLike />}
            colorScheme="orange"
            variant={"ghost"}
            border={"none"}
          >
            {likeCount}
          </Button>
          <Button
            leftIcon={<FaRegComment />}
            colorScheme="orange"
            variant={"ghost"}
            border={"none"}
          >
            {commentCount}
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
}
