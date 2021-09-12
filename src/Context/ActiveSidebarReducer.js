export const ActiveSidebarInitialState = {
  active: "browse-all"
};

const ActiveSidebarReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_BAR":
      return {
        active: action.activeBar
      };

    default:
      return state;
  }
};

export default ActiveSidebarReducer;