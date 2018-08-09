export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
    console.log(action)
      return {
        ...state,
        restaurants: [...state.restaurants, action.restaurant]
      }

    default:
      return state;

  }
};
