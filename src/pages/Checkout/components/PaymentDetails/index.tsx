import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

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
      </header>
      <div>
        <div>
          <CreditCard size={16} />
          <input
            type="radio"
            id="creditPayment"
            name="paymentMethods"
            value="Cartão de Crédito"
          />
          <label htmlFor="creditPayment">Cartão de Crédito</label>
        </div>
        <div>
          <Bank size={16} />
          <input
            type="radio"
            id="debitPayment"
            name="paymentMethods"
            value="Cartão de Débito"
          />
          <label htmlFor="debitPayment">Cartão de Débito</label>
        </div>
        <div>
          <Money size={16} />
          <input
            type="radio"
            id="cashPayment"
            name="paymentMethods"
            value="Dinheiro"
          />
          <label htmlFor="cashPayment">Dinheiro</label>
        </div>
      </div>
    </PaymentDetailsContainer>
  );
}
