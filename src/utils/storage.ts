import { version } from "../../package.json";
import {
  CartItemType,
  DeliveryAddresType,
  PaymentMethodType,
} from "../contexts/OrderContext";

// Armazenamento Local

function isTheAppVersionUpToDate() {
  const localVersion = localStorage.getItem("@coffee-delivery:version");
  return localVersion ? JSON.parse(localVersion) === version : false;
}

export function saveAppVersionToLocalStorage() {
  localStorage.setItem("@coffee-delivery:version", JSON.stringify(version));
}

export function saveShoppingCartToLocalStorage(itens: CartItemType[]) {
  localStorage.setItem("@coffee-delivery:shopping-cart", JSON.stringify(itens));
}

export function getAppVersionFromLocalStorage() {
  const localVersion = localStorage.getItem("@coffee-delivery:version");
  return localVersion ? JSON.parse(localVersion) : null;
}

export function getShoppingCartFromLocalStorage() {
  if (!isTheAppVersionUpToDate()) {
    saveAppVersionToLocalStorage();
    saveShoppingCartToLocalStorage([]);
  }

  const shoppingCart = localStorage.getItem("@coffee-delivery:shopping-cart");
  return shoppingCart ? JSON.parse(shoppingCart) : [];
}

// Armazenamento de Sessão

export function saveDeliveryAddressToSessionStorage(
  deliveryAddress: DeliveryAddresType
) {
  sessionStorage.setItem(
    "@coffee-delivery:delivery-address",
    JSON.stringify(deliveryAddress)
  );
}

export function savePaymentMethodToSessionStorage(
  paymentMethod: PaymentMethodType
) {
  sessionStorage.setItem(
    "@coffee-delivery:payment-method",
    JSON.stringify(paymentMethod)
  );
}

export function getDeliveryAddressFromSessionStorage() {
  const deliveryAddress = sessionStorage.getItem(
    "@coffee-delivery:delivery-address"
  );
  return deliveryAddress ? JSON.parse(deliveryAddress) : undefined;
}

export function getPaymentMethodFromSessionStorage() {
  const paymentMethod = sessionStorage.getItem(
    "@coffee-delivery:payment-method"
  );
  return paymentMethod ? JSON.parse(paymentMethod) : undefined;
}
