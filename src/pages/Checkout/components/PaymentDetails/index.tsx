import { CurrencyDollar } from "phosphor-react";

import { PaymentDetailsContainer } from "./styles";

export function PaymentDetails() {
  return (
    <PaymentDetailsContainer>
      <header>
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paymentMethods"
              name="paymentMethods"
              value="Cartão de Crédito"
            />
            <label htmlFor="paymentMethods">Cartão de Crédito</label>
          </div>
          <div>
            <input
              type="radio"
              id="paymentMethods"
              name="paymentMethods"
              value="Cartão de Débito"
            />
            <label htmlFor="paymentMethods">Cartão de Débito</label>
          </div>
          <div>
            <input
              type="radio"
              id="paymentMethods"
              name="paymentMethods"
              value="Dinheiro"
            />
            <label htmlFor="paymentMethods">Dinheiro</label>
          </div>
        </div>
      </header>
    </PaymentDetailsContainer>
  );
}
