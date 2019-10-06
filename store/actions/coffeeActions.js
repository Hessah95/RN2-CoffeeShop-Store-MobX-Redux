import * as actionTypes from "./types";

import axios from "axios";

export const getCoffeeShops = () => {
  return async dispatch => {
    try {
      const res = await axios.get("http://178.128.114.232/api/?format=json");
      const coffeeShops = res.data;
      //   console.log("hiiiii", coffeeShops);
      dispatch({ type: actionTypes.GET_COFFEESHOPS, payload: coffeeShops });
    } catch (err) {
      console.error(err);
      //console.error(err.response.data);
    }
  };
};

export const setCoffeeShopsLoading = () => {
  return dispatch => {
    try {
      dispatch({ type: actionTypes.COFFEESHOPS_LOADING });
    } catch (err) {
      console.error(err);
      //console.error(err.response.data);
    }
  };
};
