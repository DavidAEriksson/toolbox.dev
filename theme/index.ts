// Main theme entrypoint.
// All other overrides should be defined elsewhere in /theme

import { extendTheme } from "@chakra-ui/react"

import styles from "./styles"

const overrides = {
  styles,
  fonts: {
    heading: `'Familjen Grotesk', sans-serif`,
    body: `'Gothic A1', sans-serif`

  }
};

export default extendTheme(overrides);
