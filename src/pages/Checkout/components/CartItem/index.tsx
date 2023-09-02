import { CartInputOutput } from "../../../../components/CartInputOutput";
import { CartItemContainer } from "./styles";

export function CartItem() {
  return (
    <CartItemContainer>
      <div>
        <img src="src/assets/images/capuccino.png" alt="Xícara com café" />
        <div>
          <h3>Cappucino</h3>
          <CartInputOutput action="remove" />
        </div>
      </div>
      <span>R$ 9,90</span>
    </CartItemContainer>
  );
}
