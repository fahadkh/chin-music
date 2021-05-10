// import original module declarations
import "styled-components";

import { ChinTheme } from "./styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ChinTheme {}
}
