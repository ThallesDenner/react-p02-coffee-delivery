import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import { useOrderContext } from "../../hooks/useOrderContext";

import logo from "../../assets/images/logo.svg";

import { HeaderContainer } from "./styles";

export function Header() {
  const {
    orderState: { shoppingCart },
  } = useOrderContext();

  const amountCoffee = shoppingCart.reduce(
    (totalAmount, coffee) => totalAmount + coffee.amount,
    0
  );

  const hasSelectCoffee = amountCoffee !== 0;

  return (
    <HeaderContainer>
      <img src={logo} alt="Copo de café" />
      <div>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Goiânia, GO</span>
        </div>
        <nav>
          <NavLink
            to={hasSelectCoffee ? "/checkout" : "/"}
            title="Carrinho de compras"
          >
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
          {hasSelectCoffee && <span>{amountCoffee}</span>}
        </nav>
      </div>
    </HeaderContainer>
  );
}
