// Main theme entrypoint.
// All other overrides should be defined elsewhere in /theme

import { extendTheme } from "@chakra-ui/react"

import styles from "./styles"

const overrides = {
  styles,
  fonts: {
    heading: `'Familjen Grotesk', sans-serif`,
    body: `'Gothic A1', sans-serif`
  },
  colors: {
    blue: {
      50: '#7DEFFF',
      100: '#81BBF0',
      150: '#7698B3'
    },
    gray: {
      50: '#A2A2A9',
      100: '#4B4B59',
      150: '#333640',
      200: '#2D3236',
      250: '#303441',
      300: '#2A2C34',
      350: '#21232A',
      400: '#272A33',
      500: '#24262E',
      550: '#363b49',
      600: '#20242e'
    },
    green: {
      50: '#73DDC2',
      100: '#7FD1B9'
    },
    red: {
      50: '#F4616F',
      100: '#E62E4F'
    },
    white: {
      50: "#F1F0FA"
    }
  }
};

export default extendTheme(overrides);
