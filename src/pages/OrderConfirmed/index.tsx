import { DeliveryInformation } from "./components/DeliveryInformation";

import orderDelivery from "../../assets/images/entrega-do-pedido.svg";

import { OrderConfirmedContainer } from "./sytles";

export function OrderConfirmed() {
  return (
    <OrderConfirmedContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div>
        <DeliveryInformation />
        <img
          src={orderDelivery}
          alt="Motoboy levando o pedido para o cliente"
        />
      </div>
    </OrderConfirmedContainer>
  );
}
