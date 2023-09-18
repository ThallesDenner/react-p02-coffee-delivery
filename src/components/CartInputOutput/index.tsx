import { ChangeEvent, FormEvent, useState } from "react";

import { Minus, Plus, ShoppingCart, Trash } from "phosphor-react";

import { useOrderContext } from "../../hooks/useOrderContext";

import { AddButton, CartInputOutputContainer, RemoveButton } from "./styles";

interface CartInputOutputProps {
  coffeeId: number;
  amountOfCoffee?: number;
  isAtCheckout?: boolean;
}

export function CartInputOutput({
  coffeeId,
  amountOfCoffee = 1,
  isAtCheckout = false,
}: CartInputOutputProps) {
  const [counter, setCounter] = useState(amountOfCoffee);

  const { addCoffee, removeCoffee, updateAmountOfCoffee } = useOrderContext();

  function handleAddCoffee(event: FormEvent) {
    event.preventDefault();
    addCoffee({ id: coffeeId, amount: counter });
  }

  function handleRemoveCoffee(event: FormEvent) {
    event.preventDefault();
    removeCoffee(coffeeId);
  }

  function handleChangeCounter(event: ChangeEvent<HTMLInputElement>) {
    const amountOfCoffeeRequested = parseInt(event.target.value);

    if (amountOfCoffeeRequested > 0 && amountOfCoffeeRequested <= 99) {
      setCounter(amountOfCoffeeRequested);
      updateCoffeeQuantityAtCheckout(coffeeId, amountOfCoffeeRequested);
    }
  }

  function handleIncrementCounter() {
    if (counter < 99) {
      setCounter((counterValue) => counterValue + 1);
      updateCoffeeQuantityAtCheckout(coffeeId, counter + 1);
    }
  }

  function handleDecrementCounter() {
    if (counter > 1) {
      setCounter((counterValue) => counterValue - 1);
      updateCoffeeQuantityAtCheckout(coffeeId, counter - 1);
    }
  }

  function updateCoffeeQuantityAtCheckout(
    coffeeId: number,
    amountOfCoffee: number
  ) {
    if (isAtCheckout) {
      updateAmountOfCoffee({ id: coffeeId, amount: amountOfCoffee });
    }
  }

  return (
    <CartInputOutputContainer>
      <div>
        <button
          type="button"
          title="Diminuir quantidade de copos de café"
          onClick={handleDecrementCounter}
        >
          <Minus size={14} />
        </button>
        <input
          type="text"
          inputMode="numeric"
          min={1}
          max={99}
          value={counter}
          onChange={handleChangeCounter}
        />
        <button
          type="button"
          title="Aumentar quantidade de copos de café"
          onClick={handleIncrementCounter}
        >
          <Plus size={14} />
        </button>
      </div>
      {isAtCheckout ? (
        <RemoveButton type="submit" onClick={handleRemoveCoffee}>
          <Trash size={16} /> Remover
        </RemoveButton>
      ) : (
        <AddButton
          type="submit"
          title="Adicionar ao carrinho"
          onClick={handleAddCoffee}
        >
          <ShoppingCart size={22} weight="fill" />
        </AddButton>
      )}
    </CartInputOutputContainer>
  );
}
