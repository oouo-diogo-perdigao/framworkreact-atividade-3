import { FAVORITES_ADD, FAVORITES_REMOVE } from "../actions/favoritesActions";

const initialState = {
  favorites: []
};

export const favorites = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITES_ADD:
      let favorites = state.favorites;

      console.log(state.favorites.indexOf(action.payload));
      if (state.favorites.indexOf(action.payload) == -1) {
        console.log(action);
        favorites = [...state.favorites, action.payload];
      }
      console.log(favorites);
      return {
        ...state,
        favorites: favorites
      };
    case FAVORITES_REMOVE:
      let newState = state.favorites.filter(e => e !== action.payload);
      return {
        ...state,
        favorites: newState
      };
    default:
      return state;
  }
};
