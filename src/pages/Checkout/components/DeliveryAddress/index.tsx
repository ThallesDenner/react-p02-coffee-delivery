import { useFormContext } from "react-hook-form";
import { MapPinLine } from "phosphor-react";

import { CheckoutFormDataType } from "../..";

import { regions } from "../../../../assets/data/regions";

import { DeliveryAddressContainer, Input } from "./styles";

export function DeliveryAddress() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormDataType>();

  return (
    <DeliveryAddressContainer>
      <header>
        <MapPinLine size={22} />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </header>
      <div>
        <div>
          <label htmlFor="zipCode">CEP</label>
          <Input
            width="200px"
            type="text"
            inputMode="numeric"
            id="zipCode"
            placeholder="CEP"
            required
            {...register("zipCode")}
          />
          {errors.zipCode && <small>{errors.zipCode.message}</small>}
        </div>
        <div>
          <label htmlFor="street">Rua</label>
          <Input
            className="w-100"
            type="text"
            id="street"
            placeholder="Rua"
            required
            {...register("street")}
          />
          {errors.street && <small>{errors.street.message}</small>}
        </div>
        <div>
          <div>
            <label htmlFor="number">Número</label>
            <Input
              width="200px"
              type="text"
              inputMode="numeric"
              id="number"
              placeholder="Número"
              {...register("number")}
            />
            {errors.number && <small>{errors.number.message}</small>}
          </div>
          <div>
            <label htmlFor="complement">Complemento</label>
            <Input
              className="w-100"
              type="text"
              id="complement"
              placeholder="Complemento"
              {...register("complement")}
            />
            <span>Opcional</span>
            {/* {errors.complement && <small>{errors.complement.message}</small>} */}
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="neighborhood">Bairro</label>
            <Input
              width="200px"
              type="text"
              id="neighborhood"
              placeholder="Bairro"
              required
              {...register("neighborhood")}
            />
            {errors.neighborhood && (
              <small>{errors.neighborhood.message}</small>
            )}
          </div>
          <div>
            <label htmlFor="city">Cidade</label>
            <Input
              width="276px"
              type="text"
              id="city"
              placeholder="Cidade"
              list="cities"
              required
              {...register("city")}
            />
            {errors.city && <small>{errors.city.message}</small>}
            <datalist id="cities">
              {regions.map((region) => (
                <option key={region.id} value={region.city} />
              ))}
            </datalist>
          </div>
          <div>
            <label htmlFor="state">UF</label>
            <Input
              width="60px"
              type="text"
              id="state"
              placeholder="UF"
              list="states"
              required
              {...register("state")}
            />
            {errors.state && <small>{errors.state.message}</small>}
            <datalist id="states">
              {regions.map((region) => (
                <option key={region.id} value={region.state} />
              ))}
            </datalist>
          </div>
        </div>
      </div>
    </DeliveryAddressContainer>
  );
}
