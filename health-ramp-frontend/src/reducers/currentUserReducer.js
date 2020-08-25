export default (state = null, action) => {
    switch (action.type) {
        case "LOADING_CURRENT_USER":
            return {
              ...state,
              loading: true
            }
        case "SET_CURRENT_USER":
            return {
              data: action.user,
              loading: false
            }
        case "CLEAR_CURRENT_USER":
            return {
              loading: false
            }
        default:
            return state
    }
}