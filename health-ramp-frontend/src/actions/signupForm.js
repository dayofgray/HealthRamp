export const updateSignupForm = form => {
    return {
        type: "UPDATE_SIGNUP_FORM",
        form
    }
}

export const clearSignupForm = () => {
    return {
        type: "CLEAR_SIGNUP_FORM"
    }
}