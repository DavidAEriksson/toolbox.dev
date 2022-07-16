import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function Layout({ children }: any): JSX.Element {
  return (
    <>
      <Box>
        <Heading>New font please</Heading>
        <section>{children}</section>
      </Box>
    </>
  );
}
