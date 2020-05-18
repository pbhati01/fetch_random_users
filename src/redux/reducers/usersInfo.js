import initialState from "./initialState";

const usersInfo = (state = initialState.usersInfo, action) => {
  switch (action.type) {
    case "LOAD_USER_INFO":
      console.log("action=", action);
      return [...state, ...action.usersInfo];
    default:
      return state;
  }
};

export default usersInfo;
