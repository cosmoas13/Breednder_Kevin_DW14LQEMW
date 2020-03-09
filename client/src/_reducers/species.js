import { GET_SPECIES } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  loading: false,
  error: false
};

const species = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_SPECIES}_PENDING`:
      return {
        ...state,
        loading: true,
        error: null
      };
    case `${GET_SPECIES}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case `${GET_SPECIES}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: action.payload.response.data.message
      };
    default:
      return state;
  }
};

export default species;
