import {
  CartItemType,
  DeliveryAddresType,
  PaymentMethodType,
} from "../../contexts/OrderContext";

// Ações que podem ser disparadas pela função dispatch
// export enum Action {
//   ADD_COFFEE = "ADD_COFFEE",
//   REMOVE_COFFEE = "REMOVE_COFFEE",
//   UPDATE_AMOUNT_OF_COFFEE = "UPDATE_AMOUNT_OF_COFFEE",
//   CONFIRM_ORDER: "CONFIRM_ORDER",
// }

// Tipagem de ações
// type PayloadType =
//   | { coffee: CartItemType }
//   | { coffeeId: number }
//   | { deliveryAddress: DeliveryAddresType, paymentMethod: PaymentMethodType }

// interface ActionType {
//   type: Action; // mesmo resultado de type: keyof typeof Action;
//   payload: PayloadType;
// }

/*
Observação:
O problema de usar enum é que o tipo da propriedade type do objeto retornado pelas funções abaixo é Action e o tipo da 
propriedade type na definição da tipagem do parâmetro action da função orderReducer é, por exemplo, Action.ADD_COFFEE. 
Daí ocorre um erro ao passar o argumento para a função dispatch (a função dispatch recebe qualquer um dos objetos 
retornados pelas funções abaixo). Não ocorre erros de tipo ao passar o argumento para a função dispatch se na definição 
da tipagem do parâmetro action for especificado que a propriedade type é do tipo Action, porém, desse modo o TypeScript 
não consegue inferir quais são as propriedades de payload (o tipo de payload é constituído por uma união de tipos). 

Uniões e Tipos de Interseção
Se um valor tiver o tipo A | B, só sabemos com certeza que ele possui membros que ambos A e B possuem. 

Uma técnica comum para trabalhar com uniões é ter um único campo que usa tipos literais que você pode usar para permitir 
que o TypeScript restrinja o possível tipo atual. 

Fonte:
https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html
*/

// Ações que podem ser disparadas pela função dispatch
export const Action = {
  ADD_COFFEE: "ADD_COFFEE",
  REMOVE_COFFEE: "REMOVE_COFFEE",
  UPDATE_AMOUNT_OF_COFFEE: "UPDATE_AMOUNT_OF_COFFEE",
  CONFIRM_ORDER: "CONFIRM_ORDER",
  EMPTY_THE_CART: "EMPTY_THE_CART",
} as const;

// Tipagem de ações
type InclusionOfCoffee = {
  type: typeof Action.ADD_COFFEE;
  payload: { coffee: CartItemType };
};

type ExclusionOfCoffee = {
  type: typeof Action.REMOVE_COFFEE;
  payload: { coffeeId: number };
};

type CoffeeQuantityUpdate = {
  type: typeof Action.UPDATE_AMOUNT_OF_COFFEE;
  payload: { coffee: CartItemType };
};

type OrderConfirmation = {
  type: typeof Action.CONFIRM_ORDER;
  payload: {
    deliveryAddress: DeliveryAddresType;
    paymentMethod: PaymentMethodType;
  };
};

type CartEmptying = {
  type: typeof Action.EMPTY_THE_CART;
};

export type ActionType =
  | InclusionOfCoffee
  | ExclusionOfCoffee
  | CoffeeQuantityUpdate
  | OrderConfirmation
  | CartEmptying;

// As funções abaixo retornam um objeto que contém as informações sobre a ação que será passada para a função dispatch

export function add(coffee: CartItemType) {
  return {
    type: Action.ADD_COFFEE,
    payload: { coffee },
  };
}

export function remove(coffeeId: number) {
  return {
    type: Action.REMOVE_COFFEE,
    payload: { coffeeId },
  };
}

export function update(coffee: CartItemType) {
  return {
    type: Action.UPDATE_AMOUNT_OF_COFFEE,
    payload: { coffee },
  };
}

export function confirm(
  deliveryAddress: DeliveryAddresType,
  paymentMethod: PaymentMethodType
) {
  return {
    type: Action.CONFIRM_ORDER,
    payload: { deliveryAddress, paymentMethod },
  };
}

export function empty() {
  return { type: Action.EMPTY_THE_CART };
}
