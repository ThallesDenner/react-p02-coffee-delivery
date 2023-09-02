import "styled-components";
import { defaultTheme } from "../styles/themes/default";

// O TypeScript faz a inferência do tipo da variável defaultTheme. A palavra-chave typeof atribui o tipo da variável defaultTheme à variável ThemeType
type ThemeType = typeof defaultTheme;

// Essa é a definição de tipos que será puxada quando importarmos styled-components em algum arquivo
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
