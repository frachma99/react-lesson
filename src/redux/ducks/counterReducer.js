const INCREMENT = "increment";
const DECREMENT = "decrement";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

const initialState = {
  count: 0,
};

export default function counterReducer(state = initialState, actions) {
  switch (actions.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
