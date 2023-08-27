import { Minus, Plus } from "phosphor-react";

import { CounterContainer } from "./styles";

export function Counter() {
  return (
    <CounterContainer>
      <button title="Diminuir quantidade de copos de café">
        <Minus size={14} />
      </button>
      <input type="text" inputMode="numeric" min={1} max={100} />
      <button title="Aumentar quantidade de copos de café">
        <Plus size={14} />
      </button>
    </CounterContainer>
  );
}
