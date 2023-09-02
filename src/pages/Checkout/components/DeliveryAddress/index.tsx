import { MapPinLine } from "phosphor-react";

import { regions } from "../../../../assets/data/regions";

import { DeliveryAddressContainer, Input } from "./styles";

export function DeliveryAddress() {
  return (
    <DeliveryAddressContainer>
      <header>
        <MapPinLine size={22} />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </header>
      <form>
        <div>
          <label htmlFor="zipCode">CEP</label>
          <Input width="200px" type="text" id="zipCode" placeholder="CEP" required />
        </div>
        <div>
          <label htmlFor="street">Rua</label>
          <Input className="w-100" type="text" id="street" placeholder="Rua" required />
        </div>
        <div>
          <div>
            <label htmlFor="number">Número</label>
            <Input width="200px" type="number" id="number" placeholder="Número" required />
          </div>
          <div>
            <label htmlFor="complement">Complemento</label>
            <Input className="w-100" type="text" id="complement" placeholder="Complemento" />
            <span>Opcional</span>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="neighborhood">Bairro</label>
            <Input width="200px" type="text" id="neighborhood" placeholder="Bairro" />
          </div>
          <div>
            <label htmlFor="city">Cidade</label>
            <Input width="276px" type="text" id="city" placeholder="Cidade" list="cities" />
            <datalist id="cities">
              {regions.map((region) => (
                <option key={region.id} value={region.city} />
              ))}
            </datalist>
          </div>
          <div>
            <label htmlFor="state">UF</label>
            <Input width="60px" type="text" id="state" placeholder="UF" list="states" />
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
