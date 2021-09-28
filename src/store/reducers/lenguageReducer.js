import * as actionTypes from "../types/types";

const initialState = [
  {
    Navbar: {
      item1: "Acerca de nosotros",
      item2: "Servicios y productos",
      item3: "Contáctenos",
    },
  },
  {
    Navbar: {
      item1: "About us",
      item2: "Services and products",
      item3: "Contact us",
    },
  },
];

let index = 0;

export const lenguageReducer = (state = initialState[index], action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LENGUAGE:
      index = index + 1;
      return {
        ...initialState[index % 2 == 0 ? 0 : 1],
      };
      break;

    default:
      return state;
      break;
  }
};
