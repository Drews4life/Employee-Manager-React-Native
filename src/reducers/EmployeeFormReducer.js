import {EMPLOYEE_UPDATE} from "../actions/types";
import {EMPLOYEE_CREATE} from "../actions/types";
import {EMPLOYEE_SAVE_SUCCESS} from "../actions/types";
import {EMPLOYEE_RESET} from "../actions/types";

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: "Monday"
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    case EMPLOYEE_RESET:
      return INITIAL_STATE;
    default:
      return state;

  }
};
