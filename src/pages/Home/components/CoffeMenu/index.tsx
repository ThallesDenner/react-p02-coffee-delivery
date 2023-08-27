import { CoffeeCard } from "../CoffeeCard";

import { cardapio } from "../../../../assets/data/cardapio";

import { CoffeeMenuContainer } from "./styles";

export function CoffeeMenu() {
  return (
    <CoffeeMenuContainer>
      <h2>Nossos cafés</h2>
      <div>
        {cardapio.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </CoffeeMenuContainer>
  );
}
