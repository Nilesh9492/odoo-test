import { searchTypes } from "./searchTypes";
import { searchAction, searchState } from "./types";
let initState: searchState = {
  take: 3,
  page: 1,
  component: 0,
  search: "",
  userData: {},
  searchResult: [],
};
export default function roomsReducer(state = initState, action: searchAction) {
  switch (action.type) {
    case searchTypes.GET_ROOM_LIST_SUCCESS:
      return {
        ...state,
        searchResult: action.searchResult,
      };
    case searchTypes.GET_ROOM_LIST_FAILED:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    case searchTypes.RESET_DATA:
      return {
        take: 3,
        page: 1,
        component: 0,
        search: "",
      };

    default:
      return state;
  }
}
