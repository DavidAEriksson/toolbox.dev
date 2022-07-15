import { Box } from "@chakra-ui/react";
import React from "react";

export default function Layout({ children }: any): JSX.Element {
  return (
    <>
      <Box>
        <section>{children}</section>
      </Box>
    </>
  );
}
