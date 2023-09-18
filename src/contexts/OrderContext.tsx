import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";

import { orderReducer } from "../reducers/order/reducer";
import { add, confirm, empty, remove, update } from "../reducers/order/actions";
import {
  getDeliveryAddressFromSessionStorage,
  getPaymentMethodFromSessionStorage,
  getShoppingCartFromLocalStorage,
  saveShoppingCartToLocalStorage,
} from "../utils/storage";

export interface CartItemType {
  id: number;
  amount: number;
}

export interface DeliveryAddresType {
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

export type PaymentMethodType =
  | "Cartão de Crédito"
  | "Cartão de Débito"
  | "Dinheiro";

export interface OrderType {
  shoppingCart: CartItemType[];
  deliveryAddress: DeliveryAddresType | undefined;
  paymentMethod: PaymentMethodType | undefined;
}

interface OrderContextType {
  orderState: OrderType;
  addCoffee: (coffee: CartItemType) => void;
  removeCoffee: (coffeeId: number) => void;
  updateAmountOfCoffee: (coffee: CartItemType) => void;
  confirmOrder: (
    deliveryAddress: DeliveryAddresType,
    paymentMethod: PaymentMethodType
  ) => void;
  emptyTheCart: () => void;
}

interface OrderContextProviderProps {
  children: ReactNode; // ReactNode é um tipo que representa um elemento React, uma matriz de elementos React ou uma string, número ou boolean
}

// Criação de um objeto de contexto (o valor passado, {}, é o valor que o contexto terá quando não houver nenhum provedor de contexto correspondente na árvore
// acima do componente que lê o contexto - quando não existir um valor padrão significativo, especifique null)
export const OrderContext = createContext({} as OrderContextType);

const initialOrderState: OrderType = {
  shoppingCart: getShoppingCartFromLocalStorage(),
  deliveryAddress: getDeliveryAddressFromSessionStorage(),
  paymentMethod: getPaymentMethodFromSessionStorage(),
};

// Provedor de contexto (esse componente fornece o contexto OrderContext para os componentes que ele envolve)
export function OrderContextProvider({ children }: OrderContextProviderProps) {
  // useReducer retorna o estado (orderState) e uma função que dispara ações (dispatch)
  const [orderState, dispatch] = useReducer(
    orderReducer,
    initialOrderState
    //, (initialState) => {
    //   const shoppingCart = getShoppingCartFromLocalStorage();

    //   return { ...initialState, shoppingCart: shoppingCart };
    // }
  );

  // useEffect irá chamar a função saveShoppingCartToLocalStorage após a montagem do componente e quando houver uma atualização de dependências (orderState.shoppingCart)
  useEffect(
    () => saveShoppingCartToLocalStorage(orderState.shoppingCart),
    [orderState.shoppingCart]
  );

  // console.log("orderState: ", orderState);

  // As funções abaixo alteram o estado (orderState) de uma maneira particular

  function addCoffee(coffee: CartItemType) {
    dispatch(add(coffee));
  }

  function removeCoffee(coffeeId: number) {
    dispatch(remove(coffeeId));
  }

  function updateAmountOfCoffee(coffee: CartItemType) {
    dispatch(update(coffee));
  }

  function confirmOrder(
    deliveryAddress: DeliveryAddresType,
    paymentMethod: PaymentMethodType
  ) {
    dispatch(confirm(deliveryAddress, paymentMethod));
  }

  // function emptyTheCart() {
  //   dispatch(empty());
  // }

  // useCallback irá memorizar a função passada no primeiro parâmetro e não irá recriá-la entre as renderizações, pois o array de dependências está vazio.
  const emptyTheCart = useCallback(() => dispatch(empty()), []);

  return (
    // A propriedade value contém o que os componentes envolvidos por OrderContextProvider podem acessar de OrderContext
    <OrderContext.Provider
      value={{
        orderState,
        addCoffee,
        removeCoffee,
        updateAmountOfCoffee,
        confirmOrder,
        emptyTheCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
