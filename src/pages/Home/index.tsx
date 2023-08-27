import { Banner } from "./components/Banner";
import { CoffeeMenu } from "./components/CoffeMenu";

import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <CoffeeMenu />
    </HomeContainer>
  );
}
