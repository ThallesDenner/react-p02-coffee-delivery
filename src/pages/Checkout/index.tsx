import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { OrderDetails } from "./components/OrderDetails";
import { DeliveryAddress } from "./components/DeliveryAddress";
import { PaymentOptions } from "./components/PaymentOptions";

import { CheckoutContainer } from "./styles";
import { useOrderContext } from "../../hooks/useOrderContext";

const states = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
]; // adicionar as const aqui se usar validação com enum

const checkoutFormValidationScheme = zod.object({
  zipCode: zod
    .string()
    .regex(new RegExp("^[0-9]{8}$"), "Formato de CEP inválido"),
  street: zod.string().min(1, "Informe a rua"),
  number: zod
    .string()
    .regex(new RegExp("^[0-9]+$"), "Apenas números são aceitos"),
  complement: zod.string(),
  neighborhood: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  // state: zod.enum(states, {
  //   errorMap: () => ({ message: "Sigla incorreta" }),
  // }).transform(fieldValue => fieldValue.toLocaleUpperCase()),
  state: zod
    .string()
    .transform((fieldValue) => fieldValue.toLocaleUpperCase())
    .refine((fieldValue) => states.includes(fieldValue), "Sigla incorreta"),
  paymentMethod: zod.enum([
    "Cartão de Crédito",
    "Cartão de Débito",
    "Dinheiro",
  ]),
});

export type CheckoutFormDataType = zod.infer<
  typeof checkoutFormValidationScheme
>;

const checkoutFormDefaultValues = Object();
Object.keys(checkoutFormValidationScheme.shape).forEach(
  (field) => (checkoutFormDefaultValues[field] = "")
);

export function Checkout() {
  const {
    orderState: { shoppingCart },
    confirmOrder,
  } = useOrderContext();

  // useNavigate retorna uma função que permite navegar programaticamente
  const navigate = useNavigate();

  // useEffect irá chamar a função passada no primeiro parâmetro toda vez que o componente for renderizado
  useEffect(() => {
    if (shoppingCart.length === 0) {
      navigate("/");
    }
  });

  const checkoutForm = useForm<CheckoutFormDataType>({
    resolver: zodResolver(checkoutFormValidationScheme),
    defaultValues: checkoutFormDefaultValues,
  });

  const { handleSubmit } = checkoutForm;

  function handleConfirmOrder(data: CheckoutFormDataType) {
    const { paymentMethod, ...deliveryAddress } = data;
    confirmOrder(deliveryAddress, paymentMethod);
    // console.log(data);
    navigate("/order-confirmed");
  }

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <form id="checkoutForm" onSubmit={handleSubmit(handleConfirmOrder)}>
          <FormProvider {...checkoutForm}>
            <DeliveryAddress />
            <PaymentOptions />
          </FormProvider>
        </form>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <OrderDetails />
      </div>
    </CheckoutContainer>
  );
}
