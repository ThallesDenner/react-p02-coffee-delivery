import { Fragment, useEffect, useState } from "react";

import { useOrderContext } from "../../../../hooks/useOrderContext";
import { CartItem, OrderItemType } from "../CartItem";

import { priceFormatter } from "../../../../utils/formatter";
import { cardapio } from "../../../../assets/data/cardapio";

import { OrderDetailsContainer } from "./styles";

export function OrderDetails() {
  const {
    orderState: { shoppingCart },
  } = useOrderContext();
  const [order, setOrder] = useState<OrderItemType[]>([]);
  const totalValueOfCoffees = order.reduce(
    (totalValue, coffee) => totalValue + coffee.price * coffee.amount,
    0
  );
  const deliveryFee = (10 - 5) * Math.random() + 5; // o valor está entre [5, 10)
  const totalOrderAmount = totalValueOfCoffees + deliveryFee;

  // useEffect irá chamar a função getOrderDetails após a montagem do componente e quando houver uma atualização de dependências (shoppingCart)
  useEffect(() => {
    function getOrderDetails() {
      const coffees = shoppingCart.map((requestedCoffee) => {
        const coffeeDetails = cardapio.find(
          (coffee) => coffee.id === requestedCoffee.id
        )!; // O ! informa ao compilador que o valor não será indefinido
        return {
          id: coffeeDetails.id,
          imageUrl: coffeeDetails.imageUrl,
          title: coffeeDetails.title,
          price: coffeeDetails.price,
          amount: requestedCoffee.amount,
        };
      });
      setOrder(coffees);
    }

    getOrderDetails();
  }, [shoppingCart]);

  return (
    <OrderDetailsContainer>
      <div>
        {order.map((coffee) => (
          <Fragment key={coffee.id}>
            <CartItem coffee={coffee} />
            <hr />
          </Fragment>
        ))}
      </div>
      <div>
        <div>
          <span>Total de itens</span>
          <span>{priceFormatter.format(totalValueOfCoffees)}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>{priceFormatter.format(deliveryFee)}</span>
        </div>
        <div>
          <span>Total</span>
          <span>{priceFormatter.format(totalOrderAmount)}</span>
        </div>
      </div>
      <button type="submit" form="checkoutForm">
        Confirmar Pedido
      </button>
    </OrderDetailsContainer>
  );
}
