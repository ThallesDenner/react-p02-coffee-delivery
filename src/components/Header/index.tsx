import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import logo from "../../assets/images/logo.svg";

import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <figure>
        <img src={logo} alt="Copo de café" />
      </figure>
      <nav>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Goiânia, GO</span>
        </div>
        <div>
          <NavLink to="/checkout" title="Carrinho de compras">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
          <span>3</span>
        </div>
      </nav>
    </HeaderContainer>
  );
}
