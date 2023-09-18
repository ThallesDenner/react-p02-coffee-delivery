import { CartInputOutput } from "../../../../components/CartInputOutput";

import { priceFormatter } from "../../../../utils/formatter";

import { CartItemContainer } from "./styles";

export interface OrderItemType {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  amount: number;
}

interface OrderItemProps {
  coffee: OrderItemType;
}

export function CartItem({ coffee }: OrderItemProps) {
  const { id, imageUrl, title, price, amount } = coffee;
  const totalValue = price * amount;

  return (
    <CartItemContainer>
      <div>
        <img src={imageUrl} alt="Xícara com café" />
        <div>
          <h3>{title}</h3>
          <CartInputOutput coffeeId={id} amountOfCoffee={amount} isAtCheckout />
        </div>
      </div>
      <span>{priceFormatter.format(totalValue)}</span>
    </CartItemContainer>
  );
}
