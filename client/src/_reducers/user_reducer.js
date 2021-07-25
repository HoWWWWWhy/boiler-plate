import { LOGIN_USER, REGISTER_USER } from "../_actions/types";

function Reducer(prevState = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...prevState, loginSuccess: action.payload }; // ...: spread operator
    case REGISTER_USER:
      return { ...prevState, registerSuccess: action.payload }; // ...: spread operator
    default:
      return prevState;
  }
}

export default Reducer;
