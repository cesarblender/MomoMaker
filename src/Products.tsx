import React, { useContext } from "react";
import { AppContext } from "./context/context";
import { Types } from "./context/reducers";

const Products = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: Types.SetTopText,
            payload: {
              text: "texto d arriba kasjdkad"
            }
          });
        }}
      >
        click
      </button>
      {state.momoProperties.topText}
    </div>
  );
};

export default Products;
