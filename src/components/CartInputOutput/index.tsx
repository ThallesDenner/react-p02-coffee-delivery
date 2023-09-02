import { Minus, Plus, ShoppingCart, Trash } from "phosphor-react";

import { AddButton, CartInputOutputContainer, RemoveButton } from "./styles";

type ActionButtonType = "add" | "remove";

interface CartInputOutputProps {
  action?: ActionButtonType;
}

export function CartInputOutput({ action = "add" }: CartInputOutputProps) {
  return (
    <CartInputOutputContainer>
      <div>
        <button title="Diminuir quantidade de copos de café">
          <Minus size={14} />
        </button>
        <input
          type="text"
          inputMode="numeric"
          min={1}
          max={99}
          defaultValue={1}
        />
        <button title="Aumentar quantidade de copos de café">
          <Plus size={14} />
        </button>
      </div>
      {action === "add" ? (
        <AddButton title="Adicionar ao carrinho">
          <ShoppingCart size={22} weight="fill" />
        </AddButton>
      ) : (
        <RemoveButton>
          <Trash size={16} /> Remover
        </RemoveButton>
      )}
    </CartInputOutputContainer>
  );
}
