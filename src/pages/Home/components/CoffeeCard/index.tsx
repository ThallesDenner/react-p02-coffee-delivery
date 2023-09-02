import { CartInputOutput } from "../../../../components/CartInputOutput";

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
      <img src={imageUrl} alt="Xícara com café" />
      <ul>
        {characteristics.map((characteristic) => (
          <li key={characteristic}>{characteristic}</li>
        ))}
      </ul>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <span>
          R$ <b>{price.toFixed(2).replace(".", ",")}</b>
        </span>
        <CartInputOutput action="add" />
      </div>
    </CoffeeCardContainer>
  );
}
