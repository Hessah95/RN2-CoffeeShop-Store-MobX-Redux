import * as actionTypes from "../actions/types";

const initialState = {
  coffeeShops: [],
  loading: true
};

export default reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_COFFEESHOPS:
      return {
        ...state,
        coffeeShops: payload,
        loading: false
      };
    case actionTypes.COFFEESHOPS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
