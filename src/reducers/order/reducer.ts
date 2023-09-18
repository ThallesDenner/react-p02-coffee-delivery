import { produce } from "immer";
import { OrderType } from "../../contexts/OrderContext";
import { Action, ActionType } from "./actions";
import {
  saveDeliveryAddressToSessionStorage,
  savePaymentMethodToSessionStorage,
} from "../../utils/storage";

// Função de mudança do estado (é chamada quando a função dispatch é disparada e sempre retorna um estado)
// O parâmetro state recebe o estado e o parâmetro action recebe o objeto passado para a função dispatch
export function orderReducer(state: OrderType, action: ActionType) {
  const { shoppingCart } = state;
  switch (action.type) {
    case Action.ADD_COFFEE: {
      const chosenCoffeeIndex = shoppingCart.findIndex(
        (coffee) => coffee.id === action.payload.coffee.id
      );

      if (chosenCoffeeIndex < 0) {
        return produce(state, (draft) => {
          draft.shoppingCart.push(action.payload.coffee);
        });
      }

      return produce(state, (draft) => {
        draft.shoppingCart[chosenCoffeeIndex].amount +=
          action.payload.coffee.amount;
      });
    }
    case Action.REMOVE_COFFEE: {
      const updatedCart = shoppingCart.filter(
        (coffee) => coffee.id !== action.payload.coffeeId
      );
      return { ...state, shoppingCart: updatedCart };
    }
    case Action.UPDATE_AMOUNT_OF_COFFEE: {
      const chosenCoffeeIndex = shoppingCart.findIndex(
        (coffee) => coffee.id === action.payload.coffee.id
      );

      if (chosenCoffeeIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.shoppingCart[chosenCoffeeIndex].amount =
          action.payload.coffee.amount;
      });
    }
    case Action.CONFIRM_ORDER: {
      saveDeliveryAddressToSessionStorage(action.payload.deliveryAddress);
      savePaymentMethodToSessionStorage(action.payload.paymentMethod);

      return {
        ...state,
        deliveryAddress: action.payload.deliveryAddress,
        paymentMethod: action.payload.paymentMethod,
      };
    }
    case Action.EMPTY_THE_CART:
      return { ...state, shoppingCart: [] };
    default:
      return state;
  }
}
