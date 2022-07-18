import { Flex } from "@chakra-ui/react";
import { CloseIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { AiOutlineFieldString, AiOutlineFieldBinary } from 'react-icons/ai'
import { VscJson } from 'react-icons/vsc'
import React, { useState } from "react";
import NavItem from "./NavItem";

export default function NavBar(): JSX.Element {
  const [navWidth, setNavWidth] = useState<string>('15vw')

  return (
    <Flex flexDirection="column" transition="width 0.2s ease-in" w={navWidth} h="100vh" backgroundColor="gray.250">
      {navWidth === '15vw' ? 
        <CloseIcon w={5} h={5} transition="0.3s" alignSelf="flex-end" mt="4" mr="4" _hover={{color: "red.50"}} onClick={() => setNavWidth('5vw')}/>
        : <ArrowRightIcon w={5} h={5} transition="0.3s" alignSelf="flex-end" mt="4" mr="4" _hover={{color: "green.100"}} onClick={() => setNavWidth('15vw')}/>
      }
      <Flex mt="10"/>
      <NavItem route="/strings" name="Strings" icon={AiOutlineFieldString}/>
      <NavItem route="/numbers" name="Numbers" icon={AiOutlineFieldBinary}/>
      <NavItem route="/json" name="JSON" icon={VscJson}/>
    </Flex>
  );
}
