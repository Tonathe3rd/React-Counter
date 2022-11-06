// import React from "react";

export const initialState = { count: 0 };

export function ValueReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "setValue":
      return {count: action.payload}
    default:
      throw new Error("Invalid action type");
  }
}
