import { useContext } from "react";

import { OrderContext } from "../contexts/OrderContext";

// Hook personalizado
export const useOrderContext = () => {
  // useContext() retorna o que foi passado para a propriedade value em OrderContext.Provider
  const context = useContext(OrderContext);

  // Um erro será lançado se o hook useOrderContext for usado fora do componente <OrderContextProvider>
  if (typeof context === "undefined" || Object.keys(context).length === 0) {
    throw new Error(
      "You have to use useOrderContext inside <OrderContextProvider>"
    );
  }

  return { ...context };
};
