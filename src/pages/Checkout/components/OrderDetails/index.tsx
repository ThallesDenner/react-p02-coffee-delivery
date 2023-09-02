import { CartItem } from "../CartItem";
import { OrderDetailsContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function OrderDetails() {
  return (
    <OrderDetailsContainer>
      <div>
        <CartItem />
        <hr />
        <CartItem />
        <hr />
      </div>
      <div>
        <div>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </div>
        <div>
          <span>Total</span>
          <span>R$ 33,20</span>
        </div>
      </div>
      {/* <button>CONFIRMAR PEDIDO</button> */}
      <NavLink to="/order-confirmed">Confirmar Pedido</NavLink>
    </OrderDetailsContainer>
  );
}
