import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar"
export default function AuthLayout() {
  return (
    <>
      <NavBar/>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
