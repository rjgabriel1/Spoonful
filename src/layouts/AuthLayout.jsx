import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
