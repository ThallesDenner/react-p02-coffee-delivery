import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import { useOrderContext } from "../../../../hooks/useOrderContext";

import { DeliveryInformationContainer } from "./styles";

export function DeliveryInformation() {
  const {
    orderState: { deliveryAddress, paymentMethod },
    emptyTheCart,
  } = useOrderContext();

  // useNavigate retorna uma função que permite navegar programaticamente
  const navigate = useNavigate();

  // useEffect irá chamar a função passada no primeiro parâmetro toda vez que o componente for renderizado
  useEffect(() => {
    if (deliveryAddress === undefined || paymentMethod == undefined) {
      navigate("/");
    }
  });

  // useEffect irá chamar a função emptyTheCart após a montagem do componente e quando houver uma atualização de dependências (emptyTheCart)
  // Como emptyTheCart é uma função estável (não é recriada toda vez que <OrderContextProvider> é renderizado), useEffect será executado apenas após a montagem do componente
  useEffect(() => emptyTheCart(), [emptyTheCart]);

  return (
    <DeliveryInformationContainer>
      <li>
        <div>
          <MapPin size={16} weight="fill" />
        </div>
        <div>
          <div>
            Entrega na <b>{deliveryAddress?.street}</b>
          </div>
          <div>
            <b>{`${deliveryAddress?.neighborhood} - ${deliveryAddress?.city} - ${deliveryAddress?.state}`}</b>
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
            <b>{paymentMethod}</b>
          </div>
        </div>
      </li>
    </DeliveryInformationContainer>
  );
}
