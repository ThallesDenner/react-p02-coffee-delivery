import { Trash } from "phosphor-react";
import { Counter } from "../../../../components/Counter";

import { OrderDetailsContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function OrderDetails() {
  return (
    <OrderDetailsContainer>
      <ul>
        <li>
          <div>
            <figure>
              <img
                src="src/assets/images/capuccino.png"
                alt="Xícara com café"
              />
            </figure>
            <div>
              <h3>Cappucino</h3>
              <div>
                <Counter />
                <button>
                  <Trash size={16} /> REMOVER
                </button>
              </div>
            </div>
          </div>
          <div>R$ 9,90</div>
        </li>
        <hr />
        <li>
          <div>
            <figure>
              <img
                src="src/assets/images/cubano.png"
                alt="Xícara com café"
              />
            </figure>
            <div>
              <h3>Cubano</h3>
              <div>
                <Counter />
                <button>
                  <Trash size={16} /> REMOVER
                </button>
              </div>
            </div>
          </div>
          <div>R$ 9,90</div>
        </li>
        <hr />
      </ul>
      <div>
        <div>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </div>
        <div>
          <span>Total</span>
          <span>R$ 33,20</span>
        </div>
      </div>
      {/* <button>CONFIRMAR PEDIDO</button> */}
      <NavLink to="/order-confirmed">CONFIRMAR PEDIDO</NavLink>
    </OrderDetailsContainer>
  );
}
