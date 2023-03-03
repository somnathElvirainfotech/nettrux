import React, { createContext, useReducer } from "react";

const InitialState = {
  id: 0,
  firstname: "",
  lastname: "",
  username: "",
  no_shipment: 0,
  phone: "",
  user_status: false,
  email_verification_status: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "id":
      return {
        ...state,
        id: action.value,
      };

    case "firstname":
      return {
        ...state,
        firstname: action.value,
      };

    case "lastname":
      return {
        ...state,
        lastname: action.value,
      };

    case "username":
      return {
        ...state,
        username: action.value,
      };

      case "no_shipment":
      return {
        ...state,
        no_shipment: action.value,
      };

      case "phone":
      return {
        ...state,
        phone: action.value,
      };

      case "user_status":
      return {
        ...state,
        user_status: action.value,
      };

      case "email_verification_status":
      return {
        ...state,
        email_verification_status: action.value,
      };

    case "reset":
      return {...InitialState};

    default:
      return {...state};
  }
}

export const userContext = createContext();

function Store({ children }) {
  const [userState, dispatch] = useReducer(reducer, InitialState);


  return (
    <userContext.Provider value={{ userState, dispatch }}>
      {children}
    </userContext.Provider>
  );
}

export default Store;
