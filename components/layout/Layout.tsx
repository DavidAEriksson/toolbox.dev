import { Flex } from "@chakra-ui/react";
import NavBar from "../nav/NavBar";

export default function Layout({ children }: any): JSX.Element {
  return (
    <Flex flexDirection="row">
      <NavBar />
      <Flex>
        {children}
      </Flex>
    </Flex>   
  );
}
