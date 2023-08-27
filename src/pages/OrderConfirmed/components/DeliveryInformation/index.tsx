import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import { DeliveryInformationContainer } from "./styles";

export function DeliveryInformation() {
  return (
    <DeliveryInformationContainer>
      <div>
        <MapPin size={16} weight="fill" />
        <div>
          <span>Entrega na {`Rua blá blá, 100`}</span>
          <span>{`Bairro - Cidade - UF`}</span>
        </div>
      </div>
      <div>
        <Timer size={16} weight="fill" />
        <div>
          <span>Previsão de entrega</span>
          <span>20min - 30min</span>
        </div>
      </div>
      <div>
        <CurrencyDollar size={16} />
        <div>
          <span>Pagamento na entrega</span>
          <span>{`Cartão de Crédito`}</span>
        </div>
      </div>
    </DeliveryInformationContainer>
  );
}
