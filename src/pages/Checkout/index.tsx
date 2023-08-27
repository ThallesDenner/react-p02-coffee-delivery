import { OrderDetails } from "./components/OrderDetails";
import { DeliveryAddress } from "./components/DeliveryAddress";
import { PaymentDetails } from "./components/PaymentDetails";

import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <DeliveryAddress />
        <PaymentDetails />
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <OrderDetails />
      </div>
    </CheckoutContainer>
  );
}
