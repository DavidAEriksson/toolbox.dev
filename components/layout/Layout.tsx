import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";

export default function Layout({ children }: any): JSX.Element {
  return (
    <Grid
      minH="100vh"
      w="full"
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={'70px 1fr 70px'}
      gridTemplateColumns={'250px 1fr'}
    >
        <GridItem pl='10' pt="3" bg='gray.500' shadow="base" area={'header'}>
          <Heading>Toolbox.dev 🛠️</Heading>
        </GridItem>
        <GridItem pl='2' bg='gray.300' shadow="base" area={'nav'}>
        </GridItem>
        <GridItem pl='2' area={'main'} >
          { children }
        </GridItem>
        <GridItem pl='2' bg='blue.150' area={'footer'}>
        </GridItem> 
    </Grid>
  );
}
