import { MapPin } from "phosphor-react";

import { regions } from "../../../../assets/data/regions";

import { DeliveryAddressContainer } from "./styles";

export function DeliveryAddress() {
  return (
    <DeliveryAddressContainer>
      <header>
        <MapPin size={22} />
        <div>
          <h3>Endereço de entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </header>
      <form>
        <div>
          <label htmlFor="zipCode">CEP</label>
          <input type="text" id="zipCode" placeholder="CEP" required />
        </div>
        <div>
          <label htmlFor="street">Rua</label>
          <input type="text" id="street" placeholder="Rua" required />
        </div>
        <div>
          <div>
            <label htmlFor="number">Número</label>
            <input type="number" id="number" placeholder="Número" required />
          </div>
          <div>
            <label htmlFor="complement">Complemento</label>
            <input type="text" id="complement" placeholder="Complemento" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="neighborhood">Bairro</label>
            <input type="text" id="neighborhood" placeholder="Bairro" />
          </div>
          <div>
            <label htmlFor="city">Cidade</label>
            <input type="text" id="city" placeholder="Cidade" list="cities" />
            <datalist id="cities">
              {regions.map((region) => (
                <option key={region.id} value={region.city} />
              ))}
            </datalist>
          </div>
          <div>
            <label htmlFor="state">UF</label>
            <input type="text" id="state" placeholder="UF" list="states" />
            <datalist id="states">
              {regions.map((region) => (
                <option key={region.id} value={region.state} />
              ))}
            </datalist>
          </div>
        </div>
      </form>
    </DeliveryAddressContainer>
  );
}
