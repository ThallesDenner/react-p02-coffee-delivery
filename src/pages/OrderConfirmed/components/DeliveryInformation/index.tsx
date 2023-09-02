import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import { DeliveryInformationContainer } from "./styles";

export function DeliveryInformation() {
  return (
    <DeliveryInformationContainer>
      <li>
        <div>
          <MapPin size={16} weight="fill" />
        </div>
        <div>
          <div>
            Entrega na <b>{`Rua blá blá, 100`}</b>
          </div>
          <div>
            <b>{`Bairro - Cidade - UF`}</b>
          </div>
        </div>
      </li>
      <li>
        <div>
          <Timer size={16} weight="fill" />
        </div>
        <div>
          <div>Previsão de entrega</div>
          <div>
            <b>20min - 30min</b>
          </div>
        </div>
      </li>
      <li>
        <div>
          <CurrencyDollar size={16} />
        </div>
        <div>
          <div>Pagamento na entrega</div>
          <div>
            <b>{`Cartão de Crédito`}</b>
          </div>
        </div>
      </li>
    </DeliveryInformationContainer>
  );
}
