export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null
  //token:
  //"BQAR_-dS5IfEokOJH43NhTlR4sLyZ0btvVqcSyRyneAW9ORXCjD69JlshyxNpdkb8QVW69bwFmDkPd84PYu0J6J3NBntNOmPxCJHt_gzVddqL7oDUw3vZAujlmRkflAQF92o5u6P-Iany_2aqxV8YjdnkafF"
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly
      };
    default:
      return state;
  }
};
export default reducer;
