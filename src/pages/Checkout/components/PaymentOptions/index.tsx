import { useFormContext } from "react-hook-form";
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

import { CheckoutFormDataType } from "../..";

import { PaymentOptionsContainer } from "./styles";

export function PaymentOptions() {
  const { register } = useFormContext<CheckoutFormDataType>();

  return (
    <PaymentOptionsContainer>
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
            value="Cartão de Crédito"
            required
            {...register("paymentMethod")}
          />
          <label htmlFor="creditPayment">Cartão de Crédito</label>
        </div>
        <div>
          <Bank size={16} />
          <input
            type="radio"
            id="debitPayment"
            value="Cartão de Débito"
            {...register("paymentMethod")}
          />
          <label htmlFor="debitPayment">Cartão de Débito</label>
        </div>
        <div>
          <Money size={16} />
          <input
            type="radio"
            id="cashPayment"
            value="Dinheiro"
            {...register("paymentMethod")}
          />
          <label htmlFor="cashPayment">Dinheiro</label>
        </div>
      </div>
    </PaymentOptionsContainer>
  );
}
