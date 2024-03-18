import {
  Grid,
  GridItem,
  SimpleGrid,
 
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import SideNav from "../components/SideNav";
import RecipeCard from "../components/RecipeCard";


export default function Feed() {
  return (
    <>
      <NavBar />

      <Grid templateColumns={"repeat(6,1fr)"}>
        <GridItem
          colSpan={{ base: 6, lg: 2, xl: 1 }}
          as={"aside"}
          minHeight={{ lg: "100vh" }}
          p={{ base: "10px", lg: "30px" }}
          mb={{ xs: "10px" }}
          mt={{ xs: "-40px" }}
          borderRight={{ lg: "0.1em solid #e5e7eb" }}
        >
          <SideNav />
        </GridItem>
        <GridItem colSpan={{ base: 6, lg: 4, xl: 5 }} as={"main"} p={"30px"}>
          <SimpleGrid spacing={8} minChildWidth={"300px"}>
           <RecipeCard/>
           <RecipeCard/>
           <RecipeCard/>
          </SimpleGrid>
        </GridItem>
      </Grid>
    </>
  );
}
