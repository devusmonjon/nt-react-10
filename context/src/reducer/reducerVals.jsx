export const initialValue = {
  count: 0,
  toggle: false,
  color: "blue",
  name: "Usmonjon",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};
