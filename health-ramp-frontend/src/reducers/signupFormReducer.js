const initialState = {
    email: "",
    password: "",
    name: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_SIGNUP_FORM":
            return action.form
        case "CLEAR_SIGNUP_FORM":
            return initialState
        default:
            return state
    }
}