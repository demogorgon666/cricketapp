import { GET_NEWS, GET_HOME_RECENT_MATCHES } from "../actions/Types";

const intialState = {
  home: [],
  // another reducer for recent_matches
  recent_matches: [],
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        home: action.payload,
      };

    case GET_HOME_RECENT_MATCHES:
      return {
        ...state,
        recent_matches: action.payload,
      };
    default:
      return state;
  }
}
