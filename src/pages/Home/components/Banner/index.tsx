import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import bannerImage from "../../../../assets/images/banner.png";

import { BannerContainer } from "./styles";

export function Banner() {
  return (
    <BannerContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        {/* <div>
          <p>
            <ShoppingCart size={16} weight="fill" />
            <span>Compra simples e segura</span>
          </p>
          <p>
            <Package size={16} weight="fill" />
            <span>Embalagem mantém o café intacto</span>
          </p>
          <p>
            <Timer size={16} weight="fill" />
            <span>Entrega rápida e rastreada</span>
          </p>
          <p>
            <Coffee size={16} weight="fill" />
            <span>O café chega fresquinho até você</span>
          </p>
        </div> */}
        <ul>
          <li>
            <ShoppingCart size={16} weight="fill" />
            <span>Compra simples e segura</span>
          </li>
          <li>
            <Package size={16} weight="fill" />
            <span>Embalagem mantém o café intacto</span>
          </li>
          <li>
            <Timer size={16} weight="fill" />
            <span>Entrega rápida e rastreada</span>
          </li>
          <li>
            <Coffee size={16} weight="fill" />
            <span>O café chega fresquinho até você</span>
          </li>
        </ul>
      </div>
      <figure>
        <img src={bannerImage} alt="Copo de café com grãos de café envolta" />
      </figure>
    </BannerContainer>
  );
}
