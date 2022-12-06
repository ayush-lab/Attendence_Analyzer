const intialState = {
    user: null,
  };
  
  const Auth = (state = intialState, action) => {
    switch (action.type) {
      case "SET_USER":
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };
  
  export default Auth;