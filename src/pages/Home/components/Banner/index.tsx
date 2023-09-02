import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import bannerImage from "../../../../assets/images/banner.png";

import { BannerContainer } from "./styles";

export function Banner() {
  return (
    <BannerContainer>
      <div>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <ul>
          <li>
            <span>
              <ShoppingCart size={16} weight="fill" />
            </span>
            <span>Compra simples e segura</span>
          </li>
          <li>
            <span>
              <Package size={16} weight="fill" />
            </span>
            <span>Embalagem mantém o café intacto</span>
          </li>
          <li>
            <span>
              <Timer size={16} weight="fill" />
            </span>{" "}
            <span>Entrega rápida e rastreada</span>
          </li>
          <li>
            <span>
              <Coffee size={16} weight="fill" />
            </span>{" "}
            <span>O café chega fresquinho até você</span>
          </li>
        </ul>
      </div>
      <img src={bannerImage} alt="Copo de café com grãos de café envolta" />
    </BannerContainer>
  );
}
