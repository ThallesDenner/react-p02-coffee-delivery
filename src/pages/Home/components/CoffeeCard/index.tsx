import { ShoppingCart } from "phosphor-react";
import { Counter } from "../../../../components/Counter";

import { CoffeeCardContainer } from "./styles";

interface CoffeeType {
  id: number;
  imageUrl: string;
  title: string; 
  description: string; 
  characteristics: string[]; 
  price: number;
}

interface CoffeeProps {
  coffee: CoffeeType;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { imageUrl, title, description, characteristics, price } = coffee;

  return (
    <CoffeeCardContainer>
      <figure>
        <img src={imageUrl} alt="Xícara com café" />
      </figure>
      {/* <div>
        <span>TRADICIONAL</span>
        <span>COM LEITE</span>
      </div> */}
      <ul>
        {characteristics.map((characteristic) => (
          <li key={characteristic}>{characteristic}</li>
        ))}
      </ul>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <span>R$ {price}</span>
        <Counter />
        <ShoppingCart size={22} weight="fill" />
      </div>
    </CoffeeCardContainer>
  );
}
